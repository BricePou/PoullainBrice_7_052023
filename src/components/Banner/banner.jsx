import "../Banner/banner.scss";
import React from "react";
import Image from "../../assets/IMGhome.png";

function Banner() {
  return (
    <div className="home">
      <div className="accueil">
        <img src={Image} alt="" />
        <p className="textimg">Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
}

export default Banner;
