import React from "react";
import "./MainNewsCard.css";

const MainNewsCard = ({ timer, category, image, linkText, onLike, onDislike, onShare, onSave }) => {
    return (
        <div className="main-news-card">
            <div className="card-top">
                <img src={image} alt={linkText} className="news-image-small" />
                <div className="card-header">
                    <span className="category">{category}</span>
                    <div className="separator"></div> 
                    <span className="timer">{timer}</span>
                </div>
            </div>

            <a href="#" className="link-text">
                {linkText}
            </a>

            <div className="interaction-icons">
                <button className="icon-button like" onClick={onLike}>
                    👍
                </button>
                <button className="icon-button dislike" onClick={onDislike}>
                    👎
                </button>
                <button className="icon-button share" onClick={onShare}>
                    🔄
                </button>
                <button className="icon-button save" onClick={onSave}>
                    💾
                </button>
            </div>
        </div>
    );
};

export default MainNewsCard;
