import React from "react";
import Asset from "../MainImage/assets/img/pciture_me.png";
import "../MainImage/MainImage.css";

const MainImage = () => {
  return (
    <div className="PerfiImg">
      <img src={Asset} />
    </div>
  );
};

export default MainImage;
