import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const items = [
    {
      image: "../../../../public/assets/images/selected-img-10.webp",
      text: "رابط 1",
      link: "#",
    },
    {
      image: "../../../../public/assets/images/selected-img-2.webp",
      text: "رابط 2",
      link: "#",
    },
    {
      image: "../../../../public/assets/images/card-news-10.webp",
      text: "رابط 3",
      link: "#",
    },
    {
      image: "../../../../public/assets/images/card-news-11.webp",
      text: "رابط 4",
      link: "#",
    },
    {
      image: "../../../../public/assets/images/card-news-12.webp",
      text: "رابط 5",
      link: "#",
    },
    {
      image: "../../../../public/assets/images/card-news-13.webp",
      text: "رابط 6",
      link: "#",
    },
    {
      image: "../../../../public/assets/images/card-news-14.webp",
      text: "رابط 7",
      link: "#",
    },
    {
      image: "../../../../public/assets/images/card-news-15.webp",
      text: "رابط 8",
      link: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4; // Number of visible items in the carousel

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <h2 className="carousel-title">الأخبار المميزة</h2>
      <div className="carousel-container">
        <button className="carousel-arrow prev-arrow" onClick={handlePrev}>
          &lt;
        </button>
        <div
          className="carousel-items"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-item">
              <a href={item.link} className="carousel-link">
                <img
                  src={item.image}
                  alt={item.text}
                  className="carousel-image"
                />
                <span className="carousel-text">{item.text}</span>
              </a>
            </div>
          ))}
        </div>
        <button className="carousel-arrow next-arrow" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
