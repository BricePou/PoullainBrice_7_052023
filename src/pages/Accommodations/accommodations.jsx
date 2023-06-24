import React from 'react';
import Slider from "../../components/Slider/slider";
import Tag from "../../components/Tag/tag";
import CollapseSmall from "../../components/Collapse/collapse-small";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Accommodations/accommodations.scss"

function App() {
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
            <p className='porpiétaire'>Propriétaire</p>
            <img src="" alt="" className='photoproprio'/>
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