export const formatChart = (data) => {
    let finalData = {
        labels: [],
        datasets: [
            {
                type: 'line',
                label: "Dev Count",
                data: [],
                hidden: true,
                tension: 0.4,
                backgroundColor: "rgb(255, 99, 132, 0.8)",
                borderColor: "rgba(255, 99, 132, 0.8)",
                xAxisID: 'x',
                yAxisID: 'y',
            },
            {
                type: 'line',
                label: "Github Activity",
                data: [],
                hidden: true,
                tension: 0.4,
                backgroundColor: "rgb(75, 192, 192, 0.8)",
                borderColor: "rgba(75, 192, 192, 0.8)",
                xAxisID: 'x',
                yAxisID: 'y1',
            },
            {
                type: 'line',
                label: "Price",
                data: [],
                backgroundColor: "rgb(54, 162, 235, 0.8)",
                borderColor: "rgba(54, 162, 235, 0.8)",
                xAxisID: 'x',
                yAxisID: 'y2',
            },
            {
                type: 'line',
                label: "Social Sentiment",
                data: [],
                tension: 0.4,
                fill: {
                    target: "origin",
                    above: "rgba(0, 169, 80, 0.8)",
                    below: "rgba(255, 80, 80, 0.8)",
                },
                backgroundColor: "rgba(0, 169, 80, 0.8)",
                borderColor: "rgba(255, 80, 80, 0.8)",
                borderWidth: 0,
                xAxisID: 'x',
                yAxisID: 'y3',
            },
            {
                type: 'bar',
                label: "Social Volume",
                data: [],
                backgroundColor: "rgb(153, 102, 255, 0.8)",
                borderColor: "rgba(153, 102, 255, 0.8)",
                xAxisID: 'x',
                yAxisID: 'y4',
            },
            {
                type: 'bar',
                label: "Trade Volume",
                data: [],
                backgroundColor: "rgb(201, 203, 207, 0.8)",
                borderColor: "rgba(201, 203, 207, 0.8)",
                xAxisID: 'x',
                yAxisID: 'y5',
            },
        ]
    };

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let metrics = Object.keys(data);
    for (let i = 0; i < metrics.length; i++) {
        let chartData = data[metrics[i]].timeseriesData.map(val => {
            return [new Date(val.datetime), val.value]
        })

        let dates = chartData.map((val) => {
            const date = val[0];
            let day = date.getDate();
            let month = monthNames[date.getMonth()];
            let label = `${month} ${day}`;
            return label;
        });

        let dataArr = chartData.map((val) => {
            return val[1];
        })

        if (finalData.labels.length == 0) {
            finalData.labels = dates;
        }
        finalData.datasets[i].label = metrics[i];
        finalData.datasets[i].data = dataArr;
    }

    return finalData;
}