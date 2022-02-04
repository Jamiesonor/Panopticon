export const sentimentScore = (data) => {

    let positive = 0;
    let negative = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i] > 0) {
            positive += data[i];
        } else if (data[i] < 0) {
            negative -= data[i];
        }
    }

    let score = positive / (positive + negative);
    
    return(score.toFixed(2) * 100);
}