// import { useState } from "react";
import "./style.css";

const Card = ({ image, desc, person }) => {
  return (
    <div className="card card-testimonial">
      <img
        className="card-img-top"
        src={image}
        alt=""
        // style={{ display: "inline-block" }}
      />
      <div
        className="card-body"
        // style={{ display: "inline-block", float: "left" }}
      >
        <div className="card-stars">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
        <h6 className="card-title">"{desc}"</h6>
        <p className="card-text">{person}</p>
      </div>
    </div>
  );
};

export default Card;
