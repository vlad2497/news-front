import React from "react";
import "./style.scss";

export const NewsBlock = ({ title, urlToImage, description }) => {
  return (
    <div className="news-block">
      <h3 className="news-block__title">{title}</h3>
      <img className="news-block__img" src={urlToImage} alt="news" />
      <div className="news-block__description">{description}</div>
    </div>
  );
};
