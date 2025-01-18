import React from 'react';
import './AppLinks.css';

const AppLinks = () => {
    return (
        <div className="text-links">
                <a href="/privacy-policy" className="text-link">
                    سياسة الخصوصية
                </a>
                <a href="/intellectual-property" className="text-link">
                    الملكية الفكرية
                </a>
                <a href="/correction-standards" className="text-link">
                    معايير التصحيح
                </a>
            </div>
        
    );
};

export default AppLinks;