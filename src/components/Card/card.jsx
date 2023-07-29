import "../Card/card.scss";
import React from "react";
import { Link } from "react-router-dom";

function Card({ link, cover, title }) {
  return (
    <div className="card">
      <Link to={link}>
        <div className="card-cover">
          <img src={cover} alt="" />
        </div>
        <h2 className="card-title">{title}</h2>
      </Link>
    </div>
  );
}

export default Card;
