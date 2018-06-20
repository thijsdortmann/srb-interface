var srb = {
    defaultDischargeTime: 7200000,

    init: function () {
        this.setCurrentLevel(100, 200);

        var demoData = [{"ms": 1528209716000, "value": 180},
            {"ms": 1528210316000, "value": 180},
            {"ms": 1528210916000, "value": 180},
            {"ms": 1528211516000, "value": 170},
            {"ms": 1528212116000, "value": 160},
            {"ms": 1528212716000, "value": 150},
            {"ms": 1528213316000, "value": 150},
            {"ms": 1528213916000, "value": 150},
            {"ms": 1528214516000, "value": 150}];

        var demoRainfall = [{"ms": 1528209716000, "value": 0},
            {"ms": 1528210316000, "value": 0},
            {"ms": 1528210916000, "value": 0},
            {"ms": 1528211516000, "value": 0},
            {"ms": 1528212116000, "value": 0},
            {"ms": 1528212716000, "value": 0},
            {"ms": 1528213316000, "value": 0},
            {"ms": 1528213916000, "value": 0},
            {"ms": 1528214516000, "value": 0},
            {"ms": 1528215116000, "value": 0},
            {"ms": 1528215716000, "value": 2},
            {"ms": 1528216316000, "value": 3},
            {"ms": 1528216916000, "value": 0},
            {"ms": 1528217516000, "value": 0},
            {"ms": 1528218116000, "value": 0},
            {"ms": 1528218716000, "value": 0},
            {"ms": 1528219316000, "value": 0},
            {"ms": 1528219916000, "value": 0},
            {"ms": 1528220516000, "value": 0},
            {"ms": 1528221116000, "value": 0}];

        var demoDischarges = [
            {"ms": 1528210916000, "dischargeType": "rain", "amount": 30},
            {"ms": 1528221916000, "dischargeType": "rain", "amount": 100}
        ];


        var demoUserUsage = [
            {"month": 0, "year": 2018, "sewage": 5000, "own": 0},
            {"month": 1, "year": 2018, "sewage": 7000, "own": 0},
            {"month": 2, "year": 2018, "sewage": 2000, "own": 0},
            {"month": 3, "year": 2018, "sewage": 1000, "own": 500},
            {"month": 4, "year": 2018, "sewage": 600, "own": 1000},
            {"month": 5, "year": 2018, "sewage": 4000, "own": 1300}
        ];

        var demoAvgUsage = [
            {"month": 0, "year": 2018, "sewage": 4500, "own": 100},
            {"month": 1, "year": 2018, "sewage": 7000, "own": 0},
            {"month": 2, "year": 2018, "sewage": 1600, "own": 200},
            {"month": 3, "year": 2018, "sewage": 900, "own": 300},
            {"month": 4, "year": 2018, "sewage": 350, "own": 100},
            {"month": 5, "year": 2018, "sewage": 2900, "own": 50}
        ];

        var demoBufferInfo = {
            "address": "Drienerlolaan 5",
            "waterTemp": 22,
            "capacity": 200,
            "level": 150
        };

        var parsedDischarges = this.parseDischarges(demoDischarges, demoData, 1528214516000, 36000000);

        console.log(parsedDischarges);

        this.createCompetitiveGraphic(demoUserUsage, demoAvgUsage, '#competitiveChart', '#srb__competitive #compliment', '#srb__competitive #details');

        this.createEventGraphic(parsedDischarges.fillLevel, parsedDischarges.eventsList, '#chart1', 1528214516000, 3000000);
        this.createEventGraphic(demoRainfall, null, '#rainfallChart', 1528214516000, 3000000);

        this.setStatus('warning', [
            {
                "title": "This is a test.",
                "content": "Lorem ipsum dolor sit amet."
            }
        ]);
    },

    setBufferInfo: function(infoData, element) {
        $()
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
        function valueAtMs(ms, array) {
            for(var i = 0; i < array.length; i++) {
                if (i === array.length - 1) {
                    return array[i].value;
                }

                if (ms > array[i].ms && ms < array[i + 1].ms) {
                    return array[i].value;
                }
            }
        }

        var eventsList = [];

        var timeline = [];

        var fillDelta = [];

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
                "value" : valueAtMs(eventsList[i].ms - 1, fillLevel)
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

        return {
            "fillLevel" : fillLevel,
            "eventsList" : eventsList,
            "timeline" : timeline
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
        var userSewage = 0;
        var userOwn = 0;
        var avgSewage = 0;
        var avgOwn = 0;

        for(var i = 0; i < userData.length; i++) {
            var currentUserData = userData[i];
            var currentAvgData = avgData[i];

            userSewage += currentUserData.sewage;
            userOwn += currentUserData.own;
            avgSewage += currentAvgData.sewage;
            avgOwn += currentAvgData.own;
        }

        var userPercentage = (userOwn / (userOwn + userSewage));
        var avgPercentage = (avgOwn / (avgOwn + avgSewage));

        var userWin = userPercentage > avgPercentage;

        if(userWin) $(complimentElement).text("Great job!");
        else $(complimentElement).text("There is room for improvement");

        $(detailsElement).text("You used " + Math.round((userPercentage * 100) * 10) / 10 + "% of your collected rainwater, while your neighbours used " + Math.round((avgPercentage * 100) * 10) / 10 + "%.");

        new Chartist.Pie(element, {
            series: [userPercentage, avgPercentage]
        }, {
            donut: true,
            donutWidth: 50,
            startAngle: 270,
            total: (userPercentage + avgPercentage) * 2,
            showLabel: true,
            labelInterpolationFnc: function(value) {
                return Math.round((value * 100) * 10) / 10 + '%';
            }
        }).on('draw', function() {
            var chartEl = $(element + ' .ct-chart-donut');
            chartEl.removeAttr('style');
            chartEl.height(chartEl.height() / 2);
        });


    },

    createEventGraphic: function (data, events, element, currentDt, accurateMs) {
        var allGraphData = [];
        var pastGraphData = [];
        var futureAccGraphData = [];
        var futureEstGraphData = [];

        var eventsGraphData = [];

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
                    name: 'Prediction'
                },
                {
                    data: futureEstGraphData,
                    className: 'future-estimated',
                    name: 'Estimation'
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
                    legendNames: ['Past', 'Prediction', 'Estimation', 'Event']
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

    createTimeline: function(eventData) {

    }
};