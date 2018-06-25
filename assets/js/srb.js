var srb = {
    defaultDischargeTime: 7200000,
    bufferCapacity: null,

    init: function () {
        this.setCurrentLevel(100, 200);

        var demoData =[
            {
                "ms": 1529517506000,
                "value": 300
            },
            {
                "ms": 1529517566000,
                "value": 300
            },
            {
                "ms": 1529517626000,
                "value": 300
            },
            {
                "ms": 1529517686000,
                "value": 300
            },
            {
                "ms": 1529517746000,
                "value": 300
            },
            {
                "ms": 1529517806000,
                "value": 300
            },
            {
                "ms": 1529517866000,
                "value": 300
            },
            {
                "ms": 1529517926000,
                "value": 300
            },
            {
                "ms": 1529517986000,
                "value": 300
            },
            {
                "ms": 1529518046000,
                "value": 300
            },
            {
                "ms": 1529518106000,
                "value": 300
            },
            {
                "ms": 1529518166000,
                "value": 300
            },
            {
                "ms": 1529518226000,
                "value": 300
            },
            {
                "ms": 1529518286000,
                "value": 300
            },
            {
                "ms": 1529518346000,
                "value": 300
            },
            {
                "ms": 1529518406000,
                "value": 300
            },
            {
                "ms": 1529518466000,
                "value": 300
            },
            {
                "ms": 1529518526000,
                "value": 300
            },
            {
                "ms": 1529518586000,
                "value": 300
            },
            {
                "ms": 1529518646000,
                "value": 300
            },
            {
                "ms": 1529518706000,
                "value": 300
            },
            {
                "ms": 1529518766000,
                "value": 300
            },
            {
                "ms": 1529518826000,
                "value": 300
            },
            {
                "ms": 1529518886000,
                "value": 300
            },
            {
                "ms": 1529518946000,
                "value": 300
            },
            {
                "ms": 1529519006000,
                "value": 300
            },
            {
                "ms": 1529519066000,
                "value": 300
            },
            {
                "ms": 1529519126000,
                "value": 300
            },
            {
                "ms": 1529519186000,
                "value": 300
            },
            {
                "ms": 1529519246000,
                "value": 300
            },
            {
                "ms": 1529519306000,
                "value": 300
            },
            {
                "ms": 1529519366000,
                "value": 300
            },
            {
                "ms": 1529519426000,
                "value": 300
            },
            {
                "ms": 1529519486000,
                "value": 300
            },
            {
                "ms": 1529519546000,
                "value": 300
            },
            {
                "ms": 1529519606000,
                "value": 300
            },
            {
                "ms": 1529519666000,
                "value": 300
            },
            {
                "ms": 1529519726000,
                "value": 300
            },
            {
                "ms": 1529519786000,
                "value": 300
            },
            {
                "ms": 1529519846000,
                "value": 300
            },
            {
                "ms": 1529519906000,
                "value": 300
            },
            {
                "ms": 1529519966000,
                "value": 300
            },
            {
                "ms": 1529520026000,
                "value": 300
            },
            {
                "ms": 1529520086000,
                "value": 300
            },
            {
                "ms": 1529520146000,
                "value": 300
            },
            {
                "ms": 1529520206000,
                "value": 300
            },
            {
                "ms": 1529520266000,
                "value": 300
            },
            {
                "ms": 1529520326000,
                "value": 300
            },
            {
                "ms": 1529520386000,
                "value": 300
            },
            {
                "ms": 1529520446000,
                "value": 300
            },
            {
                "ms": 1529520506000,
                "value": 300
            },
            {
                "ms": 1529520566000,
                "value": 300
            },
            {
                "ms": 1529520626000,
                "value": 300
            },
            {
                "ms": 1529520686000,
                "value": 300
            },
            {
                "ms": 1529520746000,
                "value": 300
            },
            {
                "ms": 1529520806000,
                "value": 300
            },
            {
                "ms": 1529520866000,
                "value": 300
            },
            {
                "ms": 1529520926000,
                "value": 300
            },
            {
                "ms": 1529520986000,
                "value": 300
            },
            {
                "ms": 1529521046000,
                "value": 300
            },
            {
                "ms": 1529521106000,
                "value": 300
            },
            {
                "ms": 1529521166000,
                "value": 300
            },
            {
                "ms": 1529521226000,
                "value": 300
            },
            {
                "ms": 1529521286000,
                "value": 300
            },
            {
                "ms": 1529521346000,
                "value": 300
            },
            {
                "ms": 1529521406000,
                "value": 300
            },
            {
                "ms": 1529521466000,
                "value": 300
            },
            {
                "ms": 1529521526000,
                "value": 300
            },
            {
                "ms": 1529521586000,
                "value": 300
            },
            {
                "ms": 1529521646000,
                "value": 300
            },
            {
                "ms": 1529521706000,
                "value": 300
            },
            {
                "ms": 1529521766000,
                "value": 300
            },
            {
                "ms": 1529521826000,
                "value": 300
            },
            {
                "ms": 1529521886000,
                "value": 300
            },
            {
                "ms": 1529521946000,
                "value": 300
            },
            {
                "ms": 1529522006000,
                "value": 300
            },
            {
                "ms": 1529522066000,
                "value": 300
            },
            {
                "ms": 1529522126000,
                "value": 300
            },
            {
                "ms": 1529522186000,
                "value": 300
            },
            {
                "ms": 1529522246000,
                "value": 300
            },
            {
                "ms": 1529522306000,
                "value": 290
            },
            {
                "ms": 1529522366000,
                "value": 280
            },
            {
                "ms": 1529522426000,
                "value": 270
            },
            {
                "ms": 1529522486000,
                "value": 260
            },
            {
                "ms": 1529522546000,
                "value": 260
            },
            {
                "ms": 1529522606000,
                "value": 260
            },
            {
                "ms": 1529522666000,
                "value": 260
            },
            {
                "ms": 1529522726000,
                "value": 260
            },
            {
                "ms": 1529522786000,
                "value": 260
            },
            {
                "ms": 1529522846000,
                "value": 260
            },
            {
                "ms": 1529522906000,
                "value": 260
            },
            {
                "ms": 1529522966000,
                "value": 260
            },
            {
                "ms": 1529523026000,
                "value": 260
            },
            {
                "ms": 1529523086000,
                "value": 260
            },
            {
                "ms": 1529523146000,
                "value": 260
            },
            {
                "ms": 1529523206000,
                "value": 260
            },
            {
                "ms": 1529523266000,
                "value": 260
            },
            {
                "ms": 1529523326000,
                "value": 260
            },
            {
                "ms": 1529523386000,
                "value": 260
            },
            {
                "ms": 1529523446000,
                "value": 260
            },
            {
                "ms": 1529523506000,
                "value": 260
            },
            {
                "ms": 1529523566000,
                "value": 260
            },
            {
                "ms": 1529523626000,
                "value": 260
            },
            {
                "ms": 1529523686000,
                "value": 260
            },
            {
                "ms": 1529523746000,
                "value": 260
            },
            {
                "ms": 1529523806000,
                "value": 260
            },
            {
                "ms": 1529523866000,
                "value": 260
            },
            {
                "ms": 1529523926000,
                "value": 260
            },
            {
                "ms": 1529523986000,
                "value": 260
            },
            {
                "ms": 1529524046000,
                "value": 260
            },
            {
                "ms": 1529524106000,
                "value": 260
            },
            {
                "ms": 1529524166000,
                "value": 260
            },
            {
                "ms": 1529524226000,
                "value": 260
            },
            {
                "ms": 1529524286000,
                "value": 260
            },
            {
                "ms": 1529524346000,
                "value": 260
            },
            {
                "ms": 1529524406000,
                "value": 260
            },
            {
                "ms": 1529524466000,
                "value": 260
            },
            {
                "ms": 1529524526000,
                "value": 260
            },
            {
                "ms": 1529524586000,
                "value": 260
            },
            {
                "ms": 1529524646000,
                "value": 260
            }
        ];

        var demoDischarges = [
            {"ms": 1529522186000, "dischargeType": "rain", "amount": 40},
            {"ms": 1529525966000, "dischargeType": "rain", "amount": 60},
            {"ms": 1529536886000, "dischargeType": "rain", "amount": 100}
        ];


        var demoUserBuffered = 6400;

        var demoAvgBuffered = 4600;

        var demoBufferInfo = {
            "address": "Drienerlolaan 5",
            "waterTemp": 22,
            "capacity": 300,
            "level": 240
        };

        this.bufferCapacity = demoBufferInfo.capacity;

        var parsedDischarges = this.parseDischarges(demoDischarges, demoData, 1529524646000, 36000000);

        console.log(parsedDischarges);

        this.createCompetitiveGraphic(demoUserBuffered, demoAvgBuffered, '#competitiveChart', '#srb__competitive #compliment', '#srb__competitive #details');

        this.createFillLevelGraphic(parsedDischarges.fillLevel, parsedDischarges.eventsList, '#chart1', 1529524646000, 3000000);
        this.createRainfallGraph(parsedDischarges.showers, '#rainfallChart', 1529524646000, 3000000);

        this.createTimeline(parsedDischarges.timeline, '#timeline', 1529524646000);

        this.setBufferInfo(demoBufferInfo, "srb__status");
        this.setStatus('warning', [
            {
                "title": "Risk of legionella!",
                "content": "Due to the temperature in your buffer, there is a risk of legionella developing. Please be careful when using the water for garden use."
            }
        ]);
    },

    valueAtMs: function (ms, array) {
    for(var i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            return array[i].value;
        }

        if (ms > array[i].ms && ms < array[i + 1].ms) {
            return array[i].value;
        }
    }
},

    setBufferInfo: function(infoData, element) {
        console.log(infoData);
        srb.setCurrentLevel(infoData.level, infoData.capacity);
        $("#address").text(infoData.address);
        $("#wTemperature").html(infoData.waterTemp + " &#8451;");
        $("#wHealth").html((infoData.waterTemp > 20) ? "Risk of legionella" : "Good");
    },

    setCurrentLevel: function (current, total) {
        var graphic_fillLevel_height = 435;

        d3.select('#srb__status_graphic_fillLevel').transition().duration(500).attr('height', (graphic_fillLevel_height * (current / total)) + 'px');
        d3.select('#srb__status_graphic_fillPercentage').text(Math.ceil((current / total) * 100) + ' %');
        d3.select('#srb__status_graphic_fillLiters').text('(' + Math.ceil(current) + ' L)');
    },

    setStatus: function(status, notifications) {
        var statusIndicator = $("#srb__navbar_status").find("#indicator");

        statusIndicator.removeClass();
        statusIndicator.addClass(status);

        if(notifications.length > 0) {
            statusIndicator.popover('dispose');

            statusIndicator.text(notifications.length);

            var popoverContent = "";

            for(var i = 0; i < notifications.length; i++) {
                popoverContent += "<strong>" + notifications[i].title + "</strong><br>" + notifications[i].content + "<br>";
            }

            statusIndicator.popover({
                selector: false,
                container: 'body',
                html: true,
                trigger: 'focus',
                content: popoverContent,
                placement: 'bottom'
            });
        } else {
            statusIndicator.text("");

            statusIndicator.popover('dispose');
        }
    },

    parseDischarges: function(discharges, fillLevel, now, futureParseLimit) {
        var eventsList = [];
        var timeline = [];
        var showers = [];

        var fillDelta = [];

        showers.push({"ms": fillLevel[0].ms, "value": 0});

        for(var i = 0; i < discharges.length; i++) {
            var d = discharges[i];

            fillDelta.push({
                "ms" : now + 1,
                "delta" : 0
            });

            if(d.dischargeType === "rain") {
                var rainTime = d.ms + this.defaultDischargeTime;

                eventsList.push({
                    "ms" : d.ms,
                    "event" : "Buffer discharged to make room for rainfall starting at " + moment(rainTime).format("H:mm") + " with an expected amount of " + d.amount + " liters."
                });

                eventsList.push({
                    "ms" : rainTime,
                    "event" : "Rainfall started. The buffer emptied " + d.amount + " liters at " + moment(d.ms).format("H:mm") + " in preparation for this rainfall."
                });

                if(d.ms > now) {
                    fillDelta.push({
                        "ms" : d.ms,
                        "delta" : 0
                    });

                    fillDelta.push({
                        "ms" : d.ms + 300000,
                        "delta" : -d.amount
                    });
                }

                if(rainTime > now) {
                    fillDelta.push({
                        "ms" : rainTime,
                        "delta" : 0
                    });

                    fillDelta.push({
                        "ms" : rainTime + 300000,
                        "delta" : d.amount
                    });

                    showers.push({
                        "ms" : rainTime - 1,
                        "value" : 0
                    });

                    showers.push({
                        "ms" : rainTime,
                        "value" : d.amount
                    });

                    showers.push({
                        "ms" : rainTime + 300000,
                        "value" : 0
                    });
                }
            }

            if(d.dischargeType === "faucet") {
                eventsList.push({
                    "ms" : d.ms,
                    "event" : "The faucet on your buffer was used to empty " + d.amount + " liters."
                });
            }
        }

        fillDelta.push({
            "ms" : now + futureParseLimit,
            "delta" : 0
        });


        // Sort fillDelta
        fillDelta = fillDelta.sort(function(a, b) {
            return a.ms - b.ms;
        });

        // Add fillDelta to fillLevel
        for(var i = 0; i < fillDelta.length; i++) {
            fillLevel.push({
                "ms" : fillDelta[i].ms,
                "value" : fillLevel[fillLevel.length - 1].value + fillDelta[i].delta
            });
        }

        // Sort fillLevel
        fillLevel = fillLevel.sort(function(a, b) {
            return a.ms - b.ms;
        });

        for(var i = 0; i < eventsList.length; i++) {
            timeline.push({
                "ms" : eventsList[i].ms - 1,
                "type" : "fillLevel",
                "value" : srb.valueAtMs(eventsList[i].ms - 1, fillLevel)
            });

            timeline.push({
                "ms" : eventsList[i].ms,
                "type" : "event",
                "value" : eventsList[i].event
            });
        }

        timeline.push({
            "ms" : fillLevel[fillLevel.length - 1].ms,
            "type" : "fillLevel",
            "value" : fillLevel[fillLevel.length - 1].value
        });

        timeline = timeline.sort(function(a, b) {
            return a.ms - b.ms;
        });

        showers.push({
            "ms" : now + futureParseLimit,
            "value" : 0
        });

        return {
            "fillLevel" : fillLevel,
            "eventsList" : eventsList,
            "timeline" : timeline,
            "showers" : showers
        };
    },

    createComparisonGraphic: function (userData, avgData, element) {
        var labels = [];

        var userSewage = [];
        var userOwn = [];

        var avgSewage = [];
        var avgOwn = [];

        for (var i = 0; i < userData.length; i++) {
            labels.push(moment().year(userData[i].year).month(userData[i].month).format("MMM YYYY"));

            userSewage.push(userData[i].sewage);
            userOwn.push(userData[i].own);
        }

        for (var j = 0; j < avgData.length; j++) {
            avgSewage.push(avgData[j].sewage);
            avgOwn.push(avgData[j].own);
        }

        var data = {
            labels: labels,

            series: [
                userSewage,
                userOwn,
                avgSewage,
                avgOwn
            ]
        };

        var options = {
            seriesBarDistance: 10,
            plugins: [
                Chartist.plugins.legend({
                    clickable: false,
                    classNames: ['past', 'future-accurate', 'future-estimated', 'event'],
                    legendNames: ['Past', 'Prediction', 'Estimation', 'Event']
                })
            ],
            height: "290px"
        };

        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        console.log(data);

        new Chartist.Bar(element, data, options, responsiveOptions);
    },

    createCompetitiveGraphic: function(userData, avgData, element, complimentElement, detailsElement) {
        var userWin = userData > avgData;

        if(userWin) $(complimentElement).text("Great job!");
        else $(complimentElement).text("There is room for improvement");

        $(detailsElement).text("You kept " + userData + "L rainwater from entering the sewage system during rain, your neighbours kept " + avgData + "L. Thanks for helping with keeping Enschede dry!");

        new Chartist.Pie(element, {
            series: [userData, avgData]
        }, {
            donut: true,
            donutWidth: 50,
            startAngle: 270,
            total: (userData + avgData) * 2,
            showLabel: true
        }).on('draw', function() {
            var chartEl = $(element + ' .ct-chart-donut');
            chartEl.removeAttr('style');
            chartEl.height(chartEl.height() / 2);
        });


    },

    createFillLevelGraphic: function (data, events, element, currentDt, accurateMs) {
        var allGraphData = [];
        var pastGraphData = [];
        var futureAccGraphData = [];
        var futureEstGraphData = [];

        var eventsGraphData = [];

        data.push({ "ms": currentDt + accurateMs - 1, "value": srb.valueAtMs(currentDt + accurateMs - 1, data)});

        // Sort fillLevel
        data = data.sort(function(a, b) {
            return a.ms - b.ms;
        });

        for (var i = 0; i < data.length; i++) {
            var d = data[i];

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

        if(events) {
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
            high: srb.bufferCapacity,
            fullWidth: true,
            height: '300px',
            axisX: {
                type: Chartist.FixedScaleAxis,
                divisor: 6,
                labelInterpolationFnc: function (value) {
                    return moment(value).format('H:mm');
                }
            },
            axisY: {
                labelInterpolationFnc: function (value) {
                    console.log(srb.bufferCapacity);
                    return  Math.round(((value / srb.bufferCapacity) * 100)) + '%';
                },
                divisor: 5
            },
            plugins: [
                Chartist.plugins.legend({
                    clickable: false,
                    classNames: ['past', 'future-accurate', 'future-estimated', 'event'],
                    legendNames: ['Past', '2-hour prediction', '10-hour prediction', 'Event']
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

    createRainfallGraph: function(rainfallData, element, currentDt, accurateMs) {
        rainfallData.push({ "ms": currentDt - 1, "value": srb.valueAtMs(currentDt - 1, rainfallData)});
        rainfallData.push({ "ms": currentDt, "value": srb.valueAtMs(currentDt, rainfallData)});
        rainfallData.push({ "ms": currentDt + accurateMs - 1, "value": srb.valueAtMs(currentDt + accurateMs - 1, rainfallData)});
        rainfallData.push({ "ms": currentDt + accurateMs , "value": srb.valueAtMs(currentDt + accurateMs - 1, rainfallData)});

        // Sort fillLevel
        rainfallData = rainfallData.sort(function(a, b) {
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

    createTimeline: function(timelineData, element, now) {
        var e = $(element);

        e.html("");

        for(var i = 0; i < timelineData.length; i++) {
            var t = timelineData[i];

            if(t.type === "event") {
                e.append('<li class="event"><strong>' + moment(t.ms).format('H:mm') + '</strong><br>' + t.value + '</li>');
            }

            if(t.type === "fillLevel") {
                e.append('<li class="fillLevel">' + Math.round((t.value / srb.bufferCapacity) * 100) + ' % full</li>')
            }

            if(t.ms < now && i < timelineData.length-1 && timelineData[i+1].ms > now) {
                e.append('<li class="now">now</li>');
            }
        }
    }
};