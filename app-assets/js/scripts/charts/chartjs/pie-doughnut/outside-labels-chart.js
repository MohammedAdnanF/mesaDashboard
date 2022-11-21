$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#outside-labels-chart");

    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
        maintainAspectRatio: false,
        layout: {
            padding: 30
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    };

    // Chart Data
    var chartData = {
        labels: ["Training Space", "Study Space", "Office Space", "Business Dinner Space", "Work Station Space", "Workshop Space", "Buffet Space", "Meeting Space"],
        datasets: [{
            label: "My First dataset",
            data: [20, 33, 40, 30, 50, 35, 15, 45],
            backgroundColor: ['#005CFF', '#C3D9FF', '#EAF1FF','#7195D5', '#4781E8', '#B3D5FF', '#063791', '#325594',],
            borderColor: ['#005CFF', '#C3D9FF', '#EAF1FF','#7195D5', '#4781E8', '#B3D5FF', '#063791', '#325594',],
            cutout: '60%',
            borderWidth: 0
        }]
    };

    const doughnutLabelsLine = {
        id: 'doughnutLabelsLine',
        afterDraw(chart, args, options){
            const {ctx, chartArea: {top, bottom, left, right, width, height}} = chart;

            chart.data.datasets.forEach((dataset, i) => {
                chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
                    const {x, y} = datapoint.tooltipPosition();
                    console.log(dataset);
                    // Draw Line
                    const halfWidth = width / 2;
                    const halfHeight = height / 2;

                    const xLine = x >= halfWidth ? x + 40 : x - 40;
                    const yLine = y >= halfHeight ? y + 40 : y - 40;
                    const extraLine = x >= halfWidth ? 35 : -35;

                    ctx.setLineDash([3, 3]);
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(xLine, yLine);
                    ctx.lineTo(xLine + extraLine, yLine);
                    ctx.strokeStyle = '#CDCDCD';
                    ctx.lineWidth = 2;
                    ctx.stroke();

                    // Text
                    const textWidth = ctx.measureText(chart.data.labels[index]).width;
                    
                    // Text Position
                    const textXPosition = x >= halfWidth ? 'left' : 'right';
                    const minusPx = x >= halfWidth ? -15 : 15;
                    const plusPx = x >= halfWidth ? textWidth/2 - 26 : -textWidth/2 + 26;

                    ctx.textAlign = textXPosition;
                    ctx.textBaseline = 'middle'

                    ctx.font = '12px Arial';
                    ctx.fillStyle = "#111111";
                    ctx.fillText(chart.data.labels[index], xLine + extraLine + minusPx, yLine + 19);
                    ctx.fillStyle = "#18A804";
                    ctx.fillText(dataset.data[index] + '%', xLine + extraLine + plusPx, yLine);
                })
            })
        }
    }

    var config = {
        type: 'doughnut',

        // Chart Options
        options : chartOptions,
        plugins: [doughnutLabelsLine],
        data : chartData
    };

    // Create the chart
    var doughnutSimpleChart = new Chart(ctx, config);

});