import React, { useState, useEffect, useRef } from "react";
import "./Sidebar.css";
import {
  FaBars,
  FaTimes,
  FaNewspaper,
  FaFire,
  FaClock,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Toggle sidebar state
  const toggleSidebar = (event) => {
    event.stopPropagation(); // Prevent interaction with outside mouse events
    setIsSidebarOpen((prevState) => !prevState); // Toggle state
  };

  // Close the sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false); // Close sidebar
  };

  // Close the sidebar when clicking outside the sidebar area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={(event) => toggleSidebar(event)}
      >
        <FaBars />
      </button>

      <aside
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        ref={sidebarRef}
      >
        <div className="sidebar-content">
          <button className="login-button">تسجيل الدخول</button>

          <ul className="sidebar-menu">
            <li>
              <a href="/latest-news" onClick={closeSidebar}>
                <FaNewspaper className="menu-icon" /> أحدث الأخبار
              </a>
            </li>
            <li>
              <a href="/most-popular" onClick={closeSidebar}>
                <FaFire className="menu-icon" /> الأكثر شيوعًا
              </a>
            </li>
            <li>
              <a href="/breaking-news" onClick={closeSidebar}>
                <FaClock className="menu-icon" /> عواجل آخر 48 ساعة
              </a>
            </li>
            <li>
              <a href="/important-events" onClick={closeSidebar}>
                <FaStar className="menu-icon" /> أحداث مهمة
              </a>
            </li>
            <li>
              <a href="/privacy-policy" onClick={closeSidebar}>
                <FaShieldAlt className="menu-icon" /> سياسة الخصوصية
              </a>
            </li>
          </ul>

          <div className="sidebar-advertisement">
            <img
              src="../../../public/assets/images/ad-img-3.webp"
              alt="إعلان"
              className="ad-image"
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
