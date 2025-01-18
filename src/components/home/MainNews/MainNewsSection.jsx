import React from "react";

import "./MainNewsSection.css";
import HeroSection from "./SideNews/HeroSection";
import MainNewsCard from "./MainNewsCard/MainNewsCard";

const MainNewsSection = () => {
    const heroData = {
        label: "يحدث الآن",
        date: "17:11 2025-01-15",
        category: "فلسطين",
        title: "آخر تطورات اتفاق وقف إطلاق النار في غزة وتبادل الأسرى",
        image: "../../../../public/assets/images/main-news.webp",
    };

    const mainNewsData = [
        {
            timer: "منذ 3 ساعات",
            category: "رياضة",
            image: "../../../../public/assets/images/card-news-1.webp",
            linkText: "الهلال يُبقي على محمد القحطاني.. استجابة لطلب",
        },
        {
            timer: "منذ 2 ساعات",
            category: "رياضة",
            image: "../../../../public/assets/images/card-news-3.webp",
            linkText: "بايرن ميونخ يقترب من إفساد حلم ريال مدريد بضم ديفيز",
        },
        {
            timer: "منذ 3 ساعات",
            category: "رياضة",
            image: "../../../../public/assets/images/card-news-4.webp",
            linkText: "كفاراتسخيليا: الحلم يتحقق بالانتقال إلى باريس سان",
        },
        {
            timer: "منذ 3 ساعات",
            category: "رياضة",
            image: "../../../../public/assets/images/card-news-9.webp",
            linkText: "أرتيتا: سباق البريميرليج مفتوح ومليء بالمفاجآت",
        },
    ];

    return (
        <div className="main-news-section">

            <div className="news-cards-container">
                {mainNewsData.map((news, index) => (
                    <MainNewsCard
                        key={index}
                        timer={news.timer}
                        category={news.category}
                        image={news.image}
                        linkText={news.linkText}
                    />
                ))}
            </div>
    
            <div className="hero-section-container">
                <HeroSection {...heroData} />
            </div>
        </div>
    );
};

export default MainNewsSection;
