import React from "react";
import "./Advertisement.css";

const Advertisement = ({ imageUrl, altText }) => {
  return (
    <div className="advertisement">
      <img src={imageUrl} alt={altText} className="advertisement-image" />
    </div>
  );
};

export default Advertisement;
