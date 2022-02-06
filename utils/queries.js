const santimentQuery = `{
    Price: getMetric(metric: "price_usd") {
        timeseriesData(
            slug: "rari-governance-token"
            from: "utc_now-300d"
            to: "utc_now"
            interval: "1d"
        ) {
            datetime
            value
        }
    }
    Github_Activity: getMetric(metric: "github_activity") {
        timeseriesData(
            slug: "rari-governance-token"
            from: "utc_now-300d"
            to: "utc_now"
            interval: "1d"
        ) {
            datetime
            value
        }
    }
    Dev_Count: getMetric(metric: "dev_activity_contributors_count") {
        timeseriesData(
            slug: "rari-governance-token"
            from: "utc_now-300d"
            to: "utc_now"
            interval: "1d"
        ) {
            datetime
            value
        }
    }
    Trade_Volume: getMetric(metric: "volume_usd") {
        timeseriesData(
            slug: "rari-governance-token"
            from: "utc_now-300d"
            to: "utc_now"
            interval: "1d"
        ) {
            datetime
            value
        }
    }
    Social_Volume: getMetric(metric: "social_volume_total") {
        timeseriesData(
            slug: "rari-governance-token"
            from: "utc_now-300d"
            to: "utc_now"
            interval: "1d"
        ) {
            datetime
            value
        }
    }
    Sentiment: getMetric(metric: "sentiment_balance_total") {
        timeseriesData(
            slug: "rari-governance-token"
            from: "utc_now-300d"
            to: "utc_now"
            interval: "1d"
        ) {
            datetime
            value
        }
    }
}`
  
const socialQuery = `{
    Twitter: getMetric(metric: "social_volume_twitter") {
        timeseriesData(
            slug: "rari-governance-token"
            from: "utc_now-300d"
            to: "utc_now"
            interval: "1w"
        ) {
            datetime
            value
        }
    }
    Telegram: getMetric(metric: "social_volume_telegram") {
        timeseriesData(
            slug: "rari-governance-token"
            from: "utc_now-300d"
            to: "utc_now"
            interval: "1w"
        ) {
            datetime
            value
        }
    }
    Reddit: getMetric(metric: "social_volume_reddit") {
        timeseriesData(
            slug: "rari-governance-token"
            from: "utc_now-300d"
            to: "utc_now"
            interval: "1w"
        ) {
            datetime
            value
        }
    }
}`

const marketQuery = `{
    getMetric(metric: "marketcap_usd") {
        timeseriesData(
            slug: "rari-governance-token"
            from: "utc_now-1d"
            to: "utc_now"
            interval: "1d"
        ) {
            datetime
            value
        }
    }
    ohlc(
        slug: "rari-governance-token"
        from: "utc_now-1d"
        to: "utc_now"
        interval: "1d"
    ) {
        openPriceUsd
        highPriceUsd
        lowPriceUsd
        closePriceUsd
    }
}`

const githubQuery = `{
    search(
        query: "org:Rari-Capital fork:true sort:updated-desc"
        type: REPOSITORY
        first: 5
    ) {
        repositoryCount
        nodes {
            ... on Repository {
                description
                updatedAt
                name
                defaultBranchRef {
                target {
                    ... on Commit {
                        id
                        message
                        committer {
                            user {
                                login
                            }
                        }
                        committedDate
                        commitUrl
                        pushedDate
                    }
                }
                name
                }
            }
        }
    }
}`

const anomalyQuery = `{
    getMetric(metric: "amount_in_top_holders") {
        timeseriesData(
            slug: "rari-governance-token"
            from: "utc_now-60d"
            to: "utc_now"
            interval: "1d"
        ) {
            datetime
            value
        }
    }
}`

export { santimentQuery, socialQuery, marketQuery, githubQuery, anomalyQuery };