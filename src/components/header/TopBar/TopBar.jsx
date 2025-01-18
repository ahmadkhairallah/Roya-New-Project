import React from 'react';
import { FaUser, FaVideo } from 'react-icons/fa';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <button className="top-bar-button live-button">
                    <FaVideo className="icon" />
                    البث المباشر
                </button>
                <button className="top-bar-button login-button">
                    <FaUser className="icon" />
                    تسجيل الدخول
                </button>
            </div>

            <div className="top-bar-right">
                <span>مرحبًا بك في موقع رؤيا الإخباري لتطلع على آخر الأحداث والمستجدات في الأردن والعالم</span>
            </div>
        </div>
    );
};

export default TopBar;