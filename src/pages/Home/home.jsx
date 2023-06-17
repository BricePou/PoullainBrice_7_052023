import React from "react";
// import Tag from "../../components/Tag/tag"
import Card from "../../components/Card/card";
import "../Home/home.scss";
import Image from "../../assets/IMGhome.png";

function App() {
  return (
    <div className="Home">
      <div className="Accueil">
        <img src={Image} alt="" />
        <p className="textimg">Chez vous, partout et ailleurs</p>
      </div>
        <div className="Cards">
          <Card />
        </div>
    </div>
  );
}

export default App;
