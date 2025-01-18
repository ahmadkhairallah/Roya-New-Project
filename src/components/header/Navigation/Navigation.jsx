import React, { useRef } from "react";
import "./Navigation.css";

const Navigation = () => {
    const sections = [
        "الرئيسية",
        "أسعار الذهب",
        "الأردن",
        "فلسطين",
        "طقس",
        "عربي ودولي",
        "اقتصاد",
        "رياضة",
        "هنا وهناك",
        "صحة",
        "تكنولوجيا",
        "انتخابات 2024",
        "أحداث مهمة",
        "فيديو",
        "وفيات",
    ];

    const scrollContainerRef = useRef(null);

    const handleMouseDown = (e) => {
        const container = scrollContainerRef.current;
        container.isDown = true;
        container.startX = e.pageX - container.offsetLeft;
        container.scrollLeft = container.scrollLeft;
    };

    const handleMouseMove = (e) => {
        const container = scrollContainerRef.current;
        if (!container.isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = x - container.startX;
        container.scrollLeft -= walk;
    };

    const handleMouseUpOrLeave = () => {
        const container = scrollContainerRef.current;
        container.isDown = false;
    };

    return (
        <div className="navigation">
            <div
                className="scroll-container"
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseUpOrLeave}
                onMouseUp={handleMouseUpOrLeave}
                onMouseMove={handleMouseMove}
            >
                {sections.map((section, index) => (
                    <div key={index} className="navigation-item">
                        {section}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Navigation;
