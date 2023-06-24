import React, { useEffect } from "react";
// import Tag from "../../components/Tag/tag"
import Card from "../../components/Card/card";
import Banner from "../../components/Banner/banner";
import Slider from "../../components/Slider/slider";
import Tag from "../../components/Tag/tag";
import CollapseSmall from "../../components/Collapse/collapse-small";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../Home/home.scss";
import "../Accommodations/accommodations.scss"

function App() {
  // useEffect(() => {
  //   fetch(
  //     "http://localhost:3000/../public/logements"
  //   ).then((resp) => {
  //     if (resp.ok) {
  //       return resp.json();
  //     }
  //   }).then(logements => {
  //     console.log(logements.results)
  //   })
  // }, [])
  return (
    <div className="Home">
      <div>
        <Slider />
      </div>
      <div className="informations">
        <div className="First-part">
          <h1 className='title'>titre a importer</h1>
          <p className='localistation'>locatlisation</p>
          <Tag />
        </div>
        <div className="Second-part">
          <div>
          <p className='propiétaire'>Propriétaire</p>
            <img src="" alt="" className='photoproprio'/>
          </div>
          <div>
            <span>
              <i className="star-pink"><FontAwesomeIcon icon={faStar} /></i>
              <i className="star-pink"><FontAwesomeIcon icon={faStar} /></i>
              <i className="star-pink"><FontAwesomeIcon icon={faStar} /></i>
              <i className="star-grey"><FontAwesomeIcon icon={faStar} /></i>
              <i className="star-grey"><FontAwesomeIcon icon={faStar} /></i>
            </span>
          </div>
        </div>
        <div>
        <CollapseSmall label="Description">
          <p>
            import
          </p>
        </CollapseSmall>
        <CollapseSmall label="Equipements">
          <p>
            import
          </p>
        </CollapseSmall>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <div>
        <Banner />
      </div>
        <div className="Cards">
        <Card name="Brice" />
        <Card name="Brice" />
        <Card name="Brice" />
        <Card name="Brice" />
        <Card name="Brice" />
        <Card name="Brice" />
        </div> */
}
