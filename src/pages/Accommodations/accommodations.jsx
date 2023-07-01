import React from "react";
import useFetch from "../../useFetch/useFetch";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/slider";
import Star from "../../components/Star/star";
import Tag from "../../components/Tag/tag";
import Collapse from "../../components/Collapse/collapse";
import "../Accommodations/accommodations.scss";

function Logement() {
  const logements = useFetch(window.location + "logements.json");
  const {logementId} = useParams();
  let thisLogement;
  console.log(window.location +"logements.json")
  if (logements.fetchedData) {
    thisLogement = logements.fetchedData.find(
      (logement) => logement.id === logementId
    );
  } else {
    const [firstName, lastName] = thisLogement.host.name.split("");
    document.title = thisLogement.title + "- Kasa";
    return (
      <div>
        <Slider images={thisLogement.pictures} />
        <div className="">
          <div className="titre-localisation-tag">
            <h1 className="titre">{thisLogement.title}</h1>
            <p className="localisation">{thisLogement.location}</p>
            <div className="tag">
              {thisLogement.tags.map((tag, index) => (
                <Tag tagName={tag} key={`${tag}-${index}`} />
              ))}
            </div>
          </div>
          <div className="star-hote-truc">
            <Star star={thisLogement.rating} />
            <div className="">
              <div className="hote">
                {firstName}
                <br />
                {lastName}
              </div>
              <img
                className="host-picture"
                src={thisLogement.host.picture}
                alt="Host"
              />
            </div>
          </div>
        </div>
        <div>
          <Collapse />
          <Collapse />
        </div>
      </div>
    );
  }
}

export default Logement;
