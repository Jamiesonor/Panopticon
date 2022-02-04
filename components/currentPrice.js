import { useState, useEffect } from 'react';

export default function CurrentPrice({ token }) {

    const [currentPrice, setcurrentPrice] = useState("...");

    const msg = {
        type: "subscribe",
        product_ids: [token],
        channels: ["ticker"],
    };

    useEffect(() => {
        const ws = new WebSocket("wss://ws-feed.pro.coinbase.com");
        ws.onopen = () => {
            ws.send(JSON.stringify(msg));
        };
        ws.onmessage = function (e) {
            const priceData = JSON.parse(e.data);
            if (priceData.type !== "ticker") {
                return;
            }
            if (priceData.product_id === token) {
                setcurrentPrice("$" + parseFloat(priceData.price).toFixed(2).toString());
            }
        };
        return () => ws.close();
    }, []);
    
    return(currentPrice);
}