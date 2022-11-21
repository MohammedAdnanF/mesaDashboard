$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#half-doughnut-chart");

    // Chart Options
    var chartOptions = {
        aspextRatio: 2,
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    boxWidth: 14,
                    boxHeight: 14,
                    useBorderRadius: true,
                    borderRadius: 7
                }
            }
        }
    };

    // Chart Data
    var chartData = {
        labels: ["Total pinding", "Total canceled", "Total approved", "Total completed"],
        datasets: [{
            label: "My First dataset",
            data: [85, 65, 34, 45, 35],
            backgroundColor: ['#EDBE46', '#CF3030', '#3479D1','#44B66B'],
            cutout: '92%',
            circumference: 180,
            rotation: 270,
            borderRadius: 8,
        }]
    };

    var config = {
        type: 'doughnut',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var pieSimpleChart = new Chart(ctx, config);
});