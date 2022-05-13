import React from "react";
import { convertDate } from "../../utils/recentTime";
import "./DetailCard.css";

const DetailCard = ({ currentItem }) => {
  return (
    <div>
      <div className="dashboard-right-top">
        <img src={currentItem.urlToImage} alt="" width="50px" height="50px" />
        <p>
          by{" "}
          <span style={{ color: "#ff4163" }}>
            {currentItem.author.split(",")[0]}
          </span>
          <span style={{ color: "grey" }}>
            {" "}
            / {convertDate(currentItem.publishedAt)} ago
          </span>
        </p>
        <a rel="noreferrer" href={currentItem.url} target="_blank">
          visit now
        </a>
      </div>
      <div>
        <h5 className="pt-3 pb-3">{currentItem.title}</h5>
        <img src={currentItem.urlToImage} alt="" className="detail_img" />
        <p className="pt-4 description">{currentItem.description}</p>
        <p className="pt-4 content">{currentItem.content}</p>
      </div>
    </div>
  );
};

export default DetailCard;
