import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ drinkId, name, image, alcohole, amount }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>

        <h4>{amount}</h4>
        <p>{alcohole}</p>
        <Link to={`/cocktail/${drinkId}`} className="btn btn-primary">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
