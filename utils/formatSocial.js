export const formatSocial = (data) => {
    let finalData = {
        labels: [],
        datasets: [
            {
                label: "Reddit",
                data: [],
                backgroundColor: "rgb(255, 99, 132, 0.8)",
                borderColor: "rgba(255, 99, 132, 0.8)",
            },
            {
                label: "Telegram",
                data: [],
                backgroundColor: "rgb(75, 192, 192, 0.8)",
                borderColor: "rgba(75, 192, 192, 0.8)",
            },
            {
                label: "Twitter",
                data: [],
                backgroundColor: "rgb(54, 162, 235, 0.8)",
                borderColor: "rgba(54, 162, 235, 0.8)",
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