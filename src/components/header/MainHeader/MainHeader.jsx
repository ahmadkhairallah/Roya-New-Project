import React from "react";
import { FaGlobe, FaSearch, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeContext";
import "./MainHeader.css";

const MainHeader = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="main-header">
      <div className="main-header-left">
        <div className="icon-wrapper" title="تغيير اللغة">
          <FaGlobe className="icon" />
        </div>

        <div className="icon-wrapper" title="بحث">
          <FaSearch className="icon" />
        </div>
        
        <div
          className={`icon-wrapper dark-mode-toggle ${isDarkMode ? "active" : ""}`}
          onClick={toggleDarkMode}
          title="تبديل الوضع الليلي"
        >
          <FaSun className="icon fa-sun" />
          <FaMoon className="icon fa-moon" />
        </div>
      </div>

      <div className="main-header-right">
        <div className="logo-container">
          <span className="site-name">رؤيا الإخباري</span>
          <img
            src="/public/assets/images/logo (1).webp"
            alt="Roya News Logo"
            className="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;