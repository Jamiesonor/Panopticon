import styles from '../styles/Home.module.css';
import { Collapse, Text, Link } from "@nextui-org/react";
import { timeDifference } from "../utils/timeDifference";


export default function Anomaly({ data }) {

    let anomalyData = data.getMetric.timeseriesData.map(val => {
        return [new Date(val.datetime), val.value]
    });

    let dataArr = anomalyData.map((val) => {
        return val[1];
    })

    let diffArr = [];
    for (let i = 0; i < dataArr.length - 1; i++) {
        let diff = dataArr[i] - dataArr[i+1];
        diffArr.push(diff);
    }

    // console.log(data.getMetric.timeseriesData[diffArr.indexOf(Math.max(...diffArr)) + 1]);


    let timeDiff = timeDifference((new Date()).getTime(), (new Date(data.getMetric.timeseriesData[diffArr.indexOf(Math.max(...diffArr)) + 1])).getTime())

    // console.log(timeDiff);

    timeDiff = "1 month ago"

    return (
        <Collapse.Group className={styles.cardNoBg} shadow>
            <Collapse title="Whale Alert" subtitle={"Decrease in Whale Balance - " + timeDiff}>
                <Text>The amount of $RGT in the top holders decreased by a large amount ({data.getMetric.timeseriesData[diffArr.indexOf(Math.max(...diffArr)) + 1].value})</Text>
            </Collapse>
            <Collapse title="Development Activity" subtitle="Increase in Contribution - 1 month ago">
                <Text>The number of individual development contributors reached an all-time high (9)</Text>
            </Collapse>
        </Collapse.Group>
    )

}
