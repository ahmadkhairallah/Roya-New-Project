import React from "react";
import "./HeroSection.css";

const HeroSection = ({ label, date, category, title, image }) => {
    return (
        <div className="hero-section" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay">
                <span className="hero-label">
                    {label}
                    <span className="pulse-circle"></span>
                </span>
                <h1 className="hero-title">{title}</h1>
                <div className="hero-details">
                    <span className="hero-category">{category}</span>
                    <span className="hero-date">{date}</span>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
