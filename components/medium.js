import styles from '../styles/Home.module.css';
import { Collapse, Text, Link } from "@nextui-org/react";
import { timeDifference } from "../utils/timeDifference";


export default function Medium({ data }) {

    let postList = data.items.slice(0, 5).map((post, index) => {
        return (
            <Collapse key={index} title={post.title} subtitle={<>{post.author} · {timeDifference((new Date()).getTime(), (new Date(post.pubDate + " GMT")).getTime())}</>}>
                <Text>{post.content.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 250) + "..."}</Text>
                <Text><b><Link href={post.link} icon>Go to Medium</Link></b></Text>
            </Collapse>
        )
    });

    return (
        <Collapse.Group className={styles.cardNoBg} shadow>
            {postList}
        </Collapse.Group>
    );
}
