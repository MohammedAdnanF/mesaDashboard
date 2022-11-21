/*=========================================================================================
    File Name: bar.js
    Description: Chartjs bar chart
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Bar chart
// ------------------------------
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#bar-chart");

    // Chart Options
    var chartOptions = {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide and green
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
        indexAxis: 'y',
        categoryPercentage: 0.15,
        barPercentage: 1.0,
        scales: {
            xAxes: {
                display: true,
                title: {
                    display: true
                },
                grid: {
                    display: false,
                },
            },
            yAxes: {
                display: true,
                title: {
                    display: true,
                },
                grid: {
                    display: false,
                },
                ticks: {
                    crossAlign: 'far',
                }
            },
        },
        title: {
            display: false,
            text: 'Chart.js Horizontal Bar Chart'
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    };

    // Chart Data
    var chartData = {
        labels: ["Amal hotel", "Jeddah office", "lolo Cafe", "Amal hotel", "Subway resturant"],
        datasets: [{
            label: "My Second dataset",
            data: [113, 48, 40, 19, 6],
            backgroundColor: ["#FF6633", "#3361FF", "#8833FF", "#FB33FF", "#2EE6CA"], 
            borderColor: "transparent",
            borderRadius: 6,
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