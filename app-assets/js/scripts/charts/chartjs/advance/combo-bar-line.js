/*=========================================================================================
    File Name: combo-bar-line.js
    Description: Chartjs combo bar line chart
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Combo bar line chart
// ------------------------------
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#combo-bar-line");

    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        categoryPercentage: 0.5,
        barPercentage: 1.0,
        scales: {
            xAxes: {
                display: true,
                title: {
                    display: false
                },
                grid: {
                    display: false,
                    borderWidth: 0
                },
            },
            yAxes: {
                display: true,
                title: {
                    display: false,
                },
                grid: {
                    borderWidth: 0
                }
            },
        },
        title: {
            display: false,
            text: 'Chart.js Combo Bar Line Chart'
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    };

    // Chart Data
    var chartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            type: 'bar',
            label: "My First dataset",
            data: [65, 59, 80, 81, 56, 55, 40, 67, 45, 87, 44, 77],
            backgroundColor: "#FFD60A",
            borderColor: "transparent",
            borderRadius: 12, 
        }, {
            type: 'bar',
            label: "My Third dataset - No bezier",
            data: [45, 25, 16, 36, 67, 18, 76, 80, 81, 56, 55, 40],
            backgroundColor: "#215CA8",
            borderColor: "transparent",
            borderRadius: 12,
        }]
    };

    var config = {
        type: 'bar',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var lineChart = new Chart(ctx, config);

});