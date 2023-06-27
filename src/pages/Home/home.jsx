import React, { useEffect } from "react";
// import Tag from "../../components/Tag/tag"
import Card from "../../components/Card/card";
import Banner from "../../components/Banner/banner";
import "../Home/home.scss";
import "../Accommodations/accommodations.scss";

function App() {
  useEffect(() => {
    fetch("logements.json")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((logements) => {
        console.log(logements);
      });
  }, []);
  return (
    <div className="Home">
      <div>
        <Banner />
      </div>
      <div className="Cards">
        <Card name="Brice" />
        <Card name="Brice" />
        <Card name="Brice" />
        <Card name="Brice" />
        <Card name="Brice" />
        <Card name="Brice" />
      </div>
    </div>
  );
}

export default App;
