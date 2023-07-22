import React from "react";
import useFetch from "../../useFetch/useFetch";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/slider";
import Star from "../../components/Star/star";
import Tag from "../../components/Tag/tag";
import Collapse from "../../components/Collapse/collapse";
import "../Accommodations/accommodations.scss";

function Logement() {
  const logements = useFetch("/logements.json");
  const { id } = useParams();
  if (logements.isLoading) {
    return "Chargement en cours";
  }
  const thisLogement = logements.fetchedData.find(
    (logement) => logement.id === id
  );

  document.title = thisLogement.title;
  return (
    <div className="Accomodations">
      <div className="truc">
        <Slider images={thisLogement.pictures} />
        <div className="informations">
          <div className="titre-localisation-tag">
            <h1 className="titre">{thisLogement.title}</h1>
            <p className="localisation">{thisLogement.location}</p>
            <div className="tag">
              {thisLogement.tags.map((tag, index) => (
                <Tag tagName={tag} key={`${tag}-${index}`} />
              ))}
            </div>
          </div>
          <div className="name-host-star">
            <div className="name-host">
              <div className="name">
                <p>{thisLogement.host.name}</p>
              </div>

              <img
                className="host"
                src={thisLogement.host.picture}
                alt="Host"
              />
            </div>
            <Star star={thisLogement.rating} />
          </div>
        </div>
        <div className="List">
          <Collapse className="medium" label="Description">
            <p>{thisLogement.description}</p>
          </Collapse>
          <Collapse className="medium" label="Equipements">
            <p>{thisLogement.description}</p>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Logement;
