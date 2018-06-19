var srb = {
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
            {"ms": 1528214516000, "value": 150},
            {"ms": 1528215116000, "value": 150},
            {"ms": 1528215716000, "value": 170},
            {"ms": 1528216316000, "value": 190},
            {"ms": 1528216916000, "value": 195},
            {"ms": 1528217516000, "value": 195},
            {"ms": 1528218116000, "value": 195},
            {"ms": 1528218716000, "value": 195},
            {"ms": 1528219316000, "value": 195},
            {"ms": 1528219916000, "value": 185},
            {"ms": 1528220516000, "value": 175},
            {"ms": 1528221116000, "value": 175}];

        var demoEvents = [
            {"ms": 1528210916000, "event": "Buffer emptying because of predicted shower."},
            {"ms": 1528215116000, "event": "Shower started."},
            {"ms": 1528219316000, "event": "Buffer emptying because of predicted shower."}
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
            {"month": 0, "year": 2018, "sewage": 5000, "own": 0},
            {"month": 1, "year": 2018, "sewage": 7000, "own": 0},
            {"month": 2, "year": 2018, "sewage": 2000, "own": 0},
            {"month": 3, "year": 2018, "sewage": 1000, "own": 500},
            {"month": 4, "year": 2018, "sewage": 600, "own": 1000},
            {"month": 5, "year": 2018, "sewage": 4000, "own": 1300}
        ];

        this.createComparisonGraphic(demoUserUsage, demoAvgUsage, '#usageChart');

        this.createEventGraphic(demoData, demoEvents, '#chart1', 1528214516000, 3000000);
    },

    setCurrentLevel: function (current, total) {
        var graphic_fillLevel_height = 435;

        d3.select('#srb__status_graphic_fillLevel').transition().duration(500).attr('height', (graphic_fillLevel_height * (current / total)) + 'px');
        d3.select('#srb__status_graphic_fillPercentage').text(Math.ceil((current / total) * 100) + ' %');
        d3.select('#srb__status_graphic_fillLiters').text('(' + Math.ceil(current) + ' L)');
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
            ]
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
    }
};