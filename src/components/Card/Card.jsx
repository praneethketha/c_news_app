import React from "react";
import "./Card.css";

const Card = ({ item, setCurrentItem }) => {
  return (
    <div
      key={item.source.id}
      className="news-card"
      style={{ display: "flex", cursor: "pointer" }}
      onClick={() => setCurrentItem(item)}
    >
      <div>
        <img src={item.urlToImage} alt="" className="news_item-img" />
      </div>
      <div className="news-content">
        <button>{item.source.name}</button>

        <h6>{item.title.slice(0, 60) + "..."}</h6>
        <p>{item.author.split(",")[0]}</p>
        <a rel="noreferrer" href={item.url} target="_blank">
          visit article
        </a>
      </div>
    </div>
  );
};

export default Card;
