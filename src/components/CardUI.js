import React from "react";
import "./Card-style.css";

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.Desc}</p>
        <a href="" className="btn btn-outline-secondary">
          Rent
        </a>
      </div>
    </div>
  );
};

export default Card;
