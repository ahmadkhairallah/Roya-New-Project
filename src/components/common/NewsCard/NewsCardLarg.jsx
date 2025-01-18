import React from "react";
import "./NewsCardLarg.css";

const NewsCardLarg = ({ image, title, date, category, onLike, onDislike, onShare, onSave }) => {
  return (
    <div className="news-card-larg">
      <div
        className="news-card-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="news-card-overlay">
          <span className="news-card-category">{category}</span>
          <h3 className="news-card-title">{title}</h3>
          <span className="news-card-date">{date}</span>
        </div>
      </div>
      <div className="news-card-actions">
        <button className="icon-button" onClick={onLike}>👍</button>
        <button className="icon-button" onClick={onDislike}>👎</button>
        <button className="icon-button" onClick={onShare}>🔄</button>
        <button className="icon-button" onClick={onSave}>💾</button>
      </div>
    </div>
  );
};

export default NewsCardLarg;
