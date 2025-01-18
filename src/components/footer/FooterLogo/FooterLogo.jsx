import React from "react";
import "./FooterLogo.css";

const FooterLogo = () => {
  return (
    <div className="footer-logo">
      <img
        src="../../../../public/assets/images/logo (1).webp"
        alt="Roya News Logo"
        className="logo"
      />
      <span className="site-name">رؤيا الإخباري</span>
      <span className="copyright">جميع الحقوق محفوظة رؤيا © 2024</span>
      <p className="description">
        موقع أخباري أردني تابع لقناة رؤيا الفضائية ينقل لكم الأخبار المحلية
        الأردنية وأخبار فلسطين وأبرز الأخبار العربية والدولية.
      </p>
    </div>
  );
};

export default FooterLogo;
