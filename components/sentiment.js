import { Avatar } from '@nextui-org/react';
import { sentimentScore } from '../utils/sentimentScore';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function Sentiment({ data }) {

    let score = sentimentScore(data);

    let icon = "";

    if (score >= 67) {
        icon = "/happy.svg";
    } else if (score <= 33) {
        icon = "/sad.svg";
    } else {
        icon = "/meh.svg";
    }


    return (
        <CircularProgressbarWithChildren
            value={score/2}
            styles={buildStyles({
                rotation: 0.75,
                pathColor: "rgba(0, 169, 80, 0.8)",
                trailColor: "rgba(255, 80, 80, 0.8)"
            })}>
            
            <div style={{marginTop: -75 }}>
                <Avatar src={icon} color="gradient" />
            </div>
        </CircularProgressbarWithChildren>
        
    ); 
}