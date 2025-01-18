import React from 'react';
import FooterLogo from './FooterLogo/FooterLogo';
import SocialLinks from './SocialLinks/SocialLinks';
import AppLinks from './AppLinks/AppLinks';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <FooterLogo />
            <SocialLinks />
            <AppLinks />
            <p>© 2023 Roya News. جميع الحقوق محفوظة.</p>
        </footer>
    );
};

export default Footer;