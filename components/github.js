import styles from '../styles/Home.module.css';
import { Collapse, Text, Link } from "@nextui-org/react";
import { timeDifference } from "../utils/timeDifference";


export default function Github({ data }) {

    let repoList = data.search.nodes.map((repo, index) => {
        return (
            <Collapse key={index} title={repo.name} subtitle={repo.description}>
                <Text><b>Updated:</b> {timeDifference((new Date()).getTime(), (new Date(repo.defaultBranchRef.target.pushedDate)).getTime())}</Text>
                <Text><b>Commit:</b> <Link href={repo.defaultBranchRef.target.commitUrl}>{repo.defaultBranchRef.target.message}</Link></Text>
            </Collapse>
        )
    })

    return (
        <Collapse.Group className={styles.cardNoBg} shadow>
            {repoList}
        </Collapse.Group>
    );
}
