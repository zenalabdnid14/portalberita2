import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HalamanBerita = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=dd7f52fe66224f08a9dda92d38a9902a'
        );
        setNews(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {news.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img
                src={article.urlToImage}
                className="card-img-top"
                alt={article.title}
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a
                  href={article.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HalamanBerita;
