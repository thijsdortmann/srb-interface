var srb = {
    defaultDischargeTime: 7200000,
    bufferCapacity: 300,

    init: function () {
        var urlParams = new URLSearchParams(window.location.search);

        if(!urlParams.has('id')) window.location.replace("login.html");

        var bufferId = urlParams.get('id');
        var typeId = 1;

        if ($(window).width() < 480) {
            $("#notificationCollapsible").addClass("collapse");
        }

        var m = moment();

        var startDt = moment().subtract(4, 'hours').format("YYYY-MM-DD:HH:mm:ss");
        var nowDt = moment().format("YYYY-MM-DD:HH:mm:ss");
        var endDt = moment().add(10, 'hours').format("YYYY-MM-DD:HH:mm:ss");

        var bufferInfo = {};
        bufferInfo.capacity = 300;

        $.getJSON("getdata.php?q=cons/datemeasurements/" + bufferId + "/" + typeId + "/" + startDt + "/" + nowDt, function(data, error) {
            var parsedMeasurements = [];

            data.forEach(function(e) {
                var ts = new Date(e.timestamp).getTime();

                parsedMeasurements.push({
                    "ms" : ts,
                    "value" : parseInt(e.fill_level)
                });
            });

            bufferInfo.waterTemp = parseInt(data[data.length - 1].temperature);
            bufferInfo.level = parseInt(data[data.length - 1].fill_level);

            $.getJSON("getdata.php?q=cons/location/" + bufferId + "/" + typeId, function(data, error) {
                $.ajax({
                    dataType: "jsonp",
                    jsonpCallback: "handleLatLon",
                    url: "https://nominatim.openstreetmap.org/reverse",
                    data: {
                        'lat': data[0].latitude,
                        'lon': data[0].longitude,
                        'format': 'json',
                        'limit': 1,
                        'json_callback': "handleLatLon"
                    },
                    success: function(data) {
                        bufferInfo.address = data.address.postcode + " " + data.address.city;

                        $.getJSON("getdata.php?q=cons/events/" + bufferId + "/" + typeId + "/" + startDt + "/" + endDt, function(data, error) {
                            var parsedEvents = [];

                            data.forEach(function(e) {
                                var ts = new Date(e.timestamp).getTime();

                                parsedEvents.push({
                                    "ms" : ts,
                                    "dischargeType": e.event_type,
                                    "amount": e.value
                                });
                            });

                            this.bufferCapacity = bufferInfo.capacity;

                            console.log(moment().valueOf());

                            var currentTime = moment().valueOf();

                            var parsedDischarges = srb.parseDischarges(parsedEvents, parsedMeasurements, currentTime, 36000000);

                            srb.createCompetitiveGraphic(bufferId, '#competitiveChart', '#srb__competitive #compliment', '#srb__competitive #details');

                            srb.createFillLevelGraphic(parsedDischarges.fillLevel, parsedDischarges.eventsList, parsedDischarges.showers, '#chart1', currentTime, 7200000);

                            srb.createTimeline(parsedDischarges.timeline, '#timeline', currentTime);

                            srb.setBufferInfo(bufferInfo, "srb__status");

                            var notifications = [];

                            if(bufferInfo.waterTemp > 20) notifications.push({
                                "severity": 1,
                                "title": "Risk of legionella!",
                                "content": "Due to the temperature in your buffer, there is a risk of legionella developing. Please be careful when using the water for garden use."
                            });

                            srb.setStatus(notifications);
                        });
                    }
                });
            });
        });
    },

    valueAtMs: function (ms, array) {
        for (var i = 0; i < array.length; i++) {
            if (i === array.length - 1) {
                return array[i].value;
            }

            if (ms > array[i].ms && ms < array[i + 1].ms) {
                return array[i].value;
            }
        }
    },

    setBufferInfo: function (infoData, element) {
        $("#address").text(infoData.address);
        $("#wTemperature").html(infoData.waterTemp + " &#8451;");

        var waterHealthy = true;

        if (infoData.waterTemp > 20) waterHealthy = false;

        $("#wHealth").html(waterHealthy ? "Good" : "Risk of legionella <i class=\"fas fa-info-circle\" id='waterhealthTooltip'></i>");
        $('#waterhealthTooltip').tooltip({
            'title': "The temperature in your buffer is currently above 20 degrees. At this temperature, legionella is likely to develop. Please be careful when using the water yourself!"
        });

        srb.setCurrentLevel(infoData.level, infoData.capacity, waterHealthy);
    },

    setCurrentLevel: function (current, total, health) {
        var graphic_fillLevel_height = 435;

        d3.select('#srb__status_graphic_fillLevel').transition().duration(500).attr('height', (graphic_fillLevel_height * (current / total)) + 'px').style("fill", (health ? '#39c' : '#FF9600'));
        d3.select('#srb__status_graphic_fillPercentage').text(Math.ceil((current / total) * 100) + ' %');
        d3.select('#srb__status_graphic_fillLiters').text('(' + Math.ceil(current) + ' / ' + Math.ceil(total) + ' L)');
    },

    setStatus: function (notifications) {
        var statusIndicator = $("#status-indicator");
        var notificationsElement = $("#notifications");

        var statusTextArray = ['ok', 'warning', 'error'];

        var status = 0;

        var notificationsContent = "";

        if (notifications.length > 0) {
            notificationsContent += '<ul class="list-group">';

            for(var i = 0; i < notifications.length; i++) {
                if (notifications[i].severity > status) status = notifications[i].severity;

                notificationsContent += "<li class='list-group-item'><div class='notifications-container " + statusTextArray[notifications[i].severity] + "'><strong>" + notifications[i].title + "</strong><br>" + notifications[i].content + "</div></li>";
            }

            notificationsContent += '</ul>';
        } else {
            notificationsContent = "<center>There are currently no notifications.<br>Everything's good <i class=\"far fa-smile-beam\"></i></center>";
        }

        var statusText = statusTextArray[status];

        $("#status-text").text(statusText.charAt(0).toUpperCase() + statusText.slice(1));

        statusIndicator.removeClass();
        statusIndicator.addClass(statusText);

        notificationsElement.html(notificationsContent);
    },

    parseDischarges: function (discharges, fillLevel, now, futureParseLimit) {
        var eventsList = [];
        var timeline = [];
        var showers = [];

        var fillDelta = [];

        var currentTemp = 0;

        showers.push({"ms": fillLevel[0].ms, "value": 0});

        fillLevel.push({"ms": now - 1, "value": fillLevel[fillLevel.length - 1].value});

        fillLevel.push({"ms": now + 1, "value": fillLevel[fillLevel.length - 1].value});

        for (var i = 0; i < discharges.length; i++) {
            var d = discharges[i];

            if (d.dischargeType === "planned_discharge") {
                var rainTime = d.ms + this.defaultDischargeTime;

                eventsList.push({
                    "ms": d.ms,
                    "event": "Buffer discharged to make room for rainfall starting at " + moment(rainTime).format("H:mm") + " with an expected amount of " + d.amount + " liters." + ((d.amount > srb.bufferCapacity) ? " This will exceed the buffer capacity by " + (d.amount - srb.bufferCapacity) + " liters." : "")
                });

                eventsList.push({
                    "ms": rainTime,
                    "event": "Rainfall started. The buffer made capacity available for  " + d.amount + " liters at " + moment(d.ms).format("H:mm") + " in preparation for this rainfall." + ((d.amount > srb.bufferCapacity) ? " This exceeds the buffer capacity, causing " + (d.amount - srb.bufferCapacity) + " liters to overflow." : "")
                });

                if (d.ms > now) {
                    fillDelta.push({
                        "ms": d.ms,
                        "delta": 0
                    });

                    fillDelta.push({
                        "ms": d.ms + 300000,
                        "delta": -d.amount
                    });
                }


                if (rainTime > now) {
                    fillDelta.push({
                        "ms": rainTime,
                        "delta": 0
                    });

                    fillDelta.push({
                        "ms": rainTime + 300000,
                        "delta": d.amount
                    });
                }

                showers.push({
                    "ms": rainTime - 300000,
                    "value": 0
                });

                showers.push({
                    "ms": rainTime - 150000,
                    "value": d.amount
                });

                showers.push({
                    "ms": rainTime + 150000,
                    "value": d.amount
                });

                showers.push({
                    "ms": rainTime + 300000,
                    "value": 0
                });
            }

            if (d.dischargeType === "manual_discharge") {
                eventsList.push({
                    "ms": d.ms,
                    "event": "The faucet on your buffer was used to empty " + d.amount + " liters."
                });
            }
        }

        fillDelta.push({
            "ms": now + futureParseLimit,
            "delta": 0
        });


        // Sort fillDelta
        fillDelta = fillDelta.sort(function (a, b) {
            return a.ms - b.ms;
        });

        // Add fillDelta to fillLevel
        for (var i = 0; i < fillDelta.length; i++) {
            var newFillLevel = fillLevel[fillLevel.length - 1].value + fillDelta[i].delta;

            if(newFillLevel > srb.bufferCapacity) newFillLevel = srb.bufferCapacity;
            if(newFillLevel < 0) newFillLevel = 0;

            fillLevel.push({
                "ms": fillDelta[i].ms,
                "value": newFillLevel
            });
        }

        // Sort fillLevel
        fillLevel = fillLevel.sort(function (a, b) {
            return a.ms - b.ms;
        });

        for (var i = 0; i < eventsList.length; i++) {
            timeline.push({
                "ms": eventsList[i].ms - 1,
                "type": "fillLevel",
                "value": srb.valueAtMs(eventsList[i].ms - 1, fillLevel)
            });

            timeline.push({
                "ms": eventsList[i].ms,
                "type": "event",
                "value": eventsList[i].event
            });
        }

        timeline.push({
            "ms": fillLevel[fillLevel.length - 1].ms,
            "type": "fillLevel",
            "value": fillLevel[fillLevel.length - 1].value
        });

        timeline = timeline.sort(function (a, b) {
            return a.ms - b.ms;
        });

        showers.push({
            "ms": now + futureParseLimit,
            "value": 0
        });

        return {
            "fillLevel": fillLevel,
            "eventsList": eventsList,
            "timeline": timeline,
            "showers": showers
        };
    },

    createCompetitiveGraphic: function (bufferId, element, complimentElement, detailsElement) {
        $.getJSON("getdata.php?q=cons/buffered/1", function(avgData) {
            $.getJSON("getdata.php?q=cons/buffered/" + bufferId + "/1/", function(userData) {
                $(complimentElement).text("Great job!");
                $(detailsElement).text("Together, we kept " + parseInt(JSON.parse(avgData).total_buffered) + " L out of the sewers during rain. Your buffer was responsible for " + Math.round((userData[0].buffered / parseInt(JSON.parse(avgData).total_buffered)) * 100) + " % of this.");

                new Chartist.Pie(element, {
                    series: [{
                        data: userData[0].buffered,
                        className: 'user'
                    }, {
                        data: JSON.parse(avgData).total_buffered,
                        className: 'avg'
                    }]
                }, {
                    donut: true,
                    donutWidth: 50,
                    startAngle: 270,
                    total: (userData + avgData) * 2,
                    showLabel: false
                }).on('draw', function () {
                    var chartEl = $(element + ' .ct-chart-donut');
                    chartEl.removeAttr('style');
                    chartEl.height(chartEl.height() / 2);
                });
            });
        });
    },

    createFillLevelGraphic: function (data, events, showers, element, currentDt, accurateMs) {
        var allGraphData = [];
        var pastGraphData = [];
        var futureAccGraphData = [];
        var futureEstGraphData = [];

        var showerGraphData = [];

        var eventsGraphData = [];

        data.push({"ms": currentDt + accurateMs - 1, "value": srb.valueAtMs(currentDt + accurateMs - 1, data)});
        data.push({"ms": currentDt + accurateMs + 1, "value": srb.valueAtMs(currentDt + accurateMs - 1, data)});

        console.log(data);

        // Sort fillLevel
        data = data.sort(function (a, b) {
            return a.ms - b.ms;
        });

        for (var i = 0; i < data.length; i++) {
            var d = data[i];

            var formattedData = {x: new Date(d.ms), y: d.value};

            allGraphData.push(formattedData);

            if (d.ms <= currentDt) {
                pastGraphData.push(formattedData);
            } else if (d.ms > currentDt && d.ms < currentDt + accurateMs) {
                if (futureAccGraphData.length === 0) futureAccGraphData.push({
                    x: new Date(currentDt),
                    y: pastGraphData[pastGraphData.length - 1].y
                });
                futureAccGraphData.push(formattedData);
            } else {
                if (futureEstGraphData.length === 0) futureEstGraphData.push({
                    x: new Date(currentDt + accurateMs),
                    y: futureAccGraphData[futureAccGraphData.length - 1].y
                });
                futureEstGraphData.push(formattedData);
            }
        }

        console.log(futureEstGraphData);

        // Rainfall processing

        showers.push({"ms": currentDt - 1, "value": srb.valueAtMs(currentDt - 1, showers)});
        showers.push({"ms": currentDt, "value": srb.valueAtMs(currentDt, showers)});
        showers.push({
            "ms": currentDt + accurateMs - 1,
            "value": srb.valueAtMs(currentDt + accurateMs - 1, showers)
        });
        showers.push({
            "ms": currentDt + accurateMs,
            "value": srb.valueAtMs(currentDt + accurateMs - 1, showers)
        });

        // Sort fillLevel
        showers = showers.sort(function (a, b) {
            return a.ms - b.ms;
        });

        var maxShower = 0;

        for (var i = 0; i < showers.length; i++) {
            var d = showers[i];
            var formattedData = {x: new Date(d.ms), y: d.value};

            showerGraphData.push(formattedData);
            if(d.value > maxShower) maxShower = d.value;
        }

        // End rainfall processing

        if (events) {
            for (var i = 0; i < events.length; i++) {
                var e = events[i];

                var selectIndex = null;

                for (var j = 0; j < data.length; j++) {
                    if (j === data.length - 2) {
                        selectIndex = data.length - 2;
                        break;
                    }

                    if (e.ms >= data[j].ms && e.ms < data[j + 1].ms) {
                        selectIndex = j;
                        break;
                    }
                }

                eventsGraphData.push({x: new Date(data[selectIndex].ms), y: data[selectIndex].value, meta: e.event});
            }
        }

        new Chartist.Line(element, {
            series: [
                {
                    data: pastGraphData,
                    className: 'past',
                    name: 'Past'
                },
                {
                    data: futureAccGraphData,
                    className: 'future-accurate',
                    name: '2-hour prediction'
                },
                {
                    data: futureEstGraphData,
                    className: 'future-estimated',
                    name: '10-hour prediction'
                },
                {
                    data: showerGraphData,
                    className: 'rainfall',
                    name: 'Rainfall'
                },
                {
                    data: eventsGraphData,
                    className: 'event',
                    name: 'Event'
                },
                {
                    data: [{
                        x: new Date(currentDt),
                        y: 0
                    }],
                    className: 'now'
                }
            ]
        }, {
            showArea: true,
            low: 0,
            high: (srb.bufferCapacity < maxShower) ? maxShower : srb.bufferCapacity,
            fullWidth: true,
            height: '400px',
            axisX: {
                type: Chartist.FixedScaleAxis,
                divisor: 6,
                labelInterpolationFnc: function (value) {
                    return moment(value).format('H:mm');
                }
            },
            axisY: {
                labelInterpolationFnc: function (value) {
                    return Math.round(((value / srb.bufferCapacity) * 100)) + '%';
                },
                divisor: 5
            },
            plugins: [
                Chartist.plugins.legend({
                    clickable: false,
                    classNames: ['past', 'future-accurate', 'future-estimated', 'rainfall', 'event'],
                    legendNames: ['Past', '2-hour prediction', '10-hour prediction', 'Rainfall', 'Event']
                }),
                Chartist.plugins.ctThreshold({
                    threshold: srb.bufferCapacity + 1
                })
            ]
        }).on("draw", function (data) {
            if (data.type === "point" && data.series.className === 'event') {
                data.element._node.setAttribute("data-content", data.meta);
                data.element._node.setAttribute("data-title", moment(data.value.x).format('H:mm'))
            }

            if (data.type === "point" && data.series.className === 'now') {
                data.element._node.setAttribute('y2', 10);
            }
        }).on("created", function () {
            // Initiate Tooltip
            $(element).popover({
                selector: '.event .ct-point',
                container: 'body',
                html: true,
                trigger: 'hover',
                offset: '0, 5px'
            });
        });
    },

    createRainfallGraph: function (rainfallData, element, currentDt, accurateMs) {
        rainfallData.push({"ms": currentDt - 1, "value": srb.valueAtMs(currentDt - 1, rainfallData)});
        rainfallData.push({"ms": currentDt, "value": srb.valueAtMs(currentDt, rainfallData)});
        rainfallData.push({
            "ms": currentDt + accurateMs - 1,
            "value": srb.valueAtMs(currentDt + accurateMs - 1, rainfallData)
        });
        rainfallData.push({
            "ms": currentDt + accurateMs,
            "value": srb.valueAtMs(currentDt + accurateMs - 1, rainfallData)
        });

        // Sort fillLevel
        rainfallData = rainfallData.sort(function (a, b) {
            return a.ms - b.ms;
        });

        var allGraphData = [];
        var pastGraphData = [];
        var futureAccGraphData = [];
        var futureEstGraphData = [];

        for (var i = 0; i < rainfallData.length; i++) {
            var d = rainfallData[i];

            var formattedData = {x: new Date(d.ms), y: d.value};

            allGraphData.push(formattedData);

            if (d.ms <= currentDt) {
                pastGraphData.push(formattedData);
            } else if (d.ms > currentDt && d.ms < currentDt + accurateMs) {
                if (futureAccGraphData.length === 0) futureAccGraphData.push(pastGraphData[pastGraphData.length - 1]);
                futureAccGraphData.push(formattedData);
            } else {
                if (futureEstGraphData.length === 0) futureEstGraphData.push(futureAccGraphData[futureAccGraphData.length - 1]);
                futureEstGraphData.push(formattedData);
            }
        }

        console.log(pastGraphData);

        new Chartist.Line(element, {
            series: [
                {
                    data: pastGraphData,
                    className: 'past',
                    name: 'Past'
                },
                {
                    data: futureAccGraphData,
                    className: 'future-accurate',
                    name: '2-hour prediction'
                },
                {
                    data: futureEstGraphData,
                    className: 'future-estimated',
                    name: '10-hour prediction'
                },
                {
                    data: [{
                        x: new Date(currentDt),
                        y: 0
                    }],
                    className: 'now'
                }
            ]
        }, {
            showArea: true,
            low: 0,
            fullWidth: true,
            height: '300px',
            axisX: {
                type: Chartist.FixedScaleAxis,
                divisor: 6,
                labelInterpolationFnc: function (value) {
                    return moment(value).format('H:mm');
                }
            },
            plugins: [
                Chartist.plugins.legend({
                    clickable: false,
                    classNames: ['past', 'future-accurate', 'future-estimated', 'event'],
                    legendNames: ['Past', '2-hour prediction', '10-hour prediction', 'Event']
                })
            ]
        }).on("draw", function (data) {
            if (data.type === "point" && data.series.className === 'now') {
                data.element._node.setAttribute('y2', 10);
            }
        });
    },

    createTimeline: function (timelineData, element, now) {
        var e = $(element);

        e.html("");

        for (var i = 0; i < timelineData.length; i++) {
            var t = timelineData[i];

            if (t.type === "event") {
                e.append('<li class="event"><strong>' + moment(t.ms).format('H:mm') + '</strong><br>' + t.value + '</li>');
            }

            if (t.type === "fillLevel") {
                e.append('<li class="fillLevel">' + Math.round((t.value / srb.bufferCapacity) * 100) + ' % full</li>')
            }

            if (t.ms < now && i < timelineData.length - 1 && timelineData[i + 1].ms > now) {
                e.append('<li class="now">now</li>');
            }
        }
    }
};

var srbSetup = {

};