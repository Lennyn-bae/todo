import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import styles from "./Ticker.module.css";


const Ticker: React.FC = () => {
    const [selectedArticleIndex, setSelectedArticleIndex] = useState(0);

    const { data, status } = useQuery('news', async () => {
        const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e4c0738b4e904a8fa09600057e826426');
        return response.json();
    });

     useEffect(() => {
        if (data) {
            setSelectedArticleIndex(Math.floor(Math.random() * data.articles.length))
        }
    }, [data]);

    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error...</p>;

    return (
        <div className={styles.wrapper}>
            <div className={styles.line}>
                <p className={styles.text}>{data.articles[selectedArticleIndex].description}</p>
            </div>
            
        </div>  
    );
};

export default Ticker;
