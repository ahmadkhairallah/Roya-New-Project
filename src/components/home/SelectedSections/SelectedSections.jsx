import React from "react";

import "./SelectedSections.css";
import NewsCardLarg from "../../common/NewsCard/NewsCardLarg";

const SelectedSections = () => {
  const newsData = [
    {
      image: "../../../../public/assets/images/slider-img-8.webp",
      title: "خبر 1",
      date: "2025-01-01",
      category: "سياسة",
    },
    {
      image: "../../../../public/assets/images/slider-img-5.webp",
      title: "خبر 2",
      date: "2025-01-02",
      category: "اقتصاد",
    },
    {
      image: "../../../../public/assets/images/card-news-14.webp",
      title: "خبر 3",
      date: "2025-01-03",
      category: "الأردن",
    },
  ];

  return (
    <div className="selected-sections">
      <h2 className="section-title">الأقسام المختارة</h2>
      <div className="news-cards-container">
        {newsData.map((news, index) => (
          <NewsCardLarg
            key={index}
            image={news.image}
            title={news.title}
            date={news.date}
            category={news.category}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedSections;
