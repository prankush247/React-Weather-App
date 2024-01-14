import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
// import { useState } from 'react';

export default function News(props) {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {                                                       
        const response = await fetch('https://newsapi.org/v2/everything?q=weather&sortBy=publishedAt&apiKey=700a5950d9194fe59398f05f46abd0de');
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
      {newsData.map((item) => (
        <NewsItem
          key={item.url}
          title={item.title}
          url={item.url}
          description={item.description}
          imageURL={item.urlToImage}
          mode={props.mode}
        />
      ))}
    </div>
  );
}