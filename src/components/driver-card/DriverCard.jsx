import React from "react";
import "./DriverCard.scss";

const DriverCard = ({ name, truck }) => {
  return (
    <div className="card">
      <p className="card__name">{name}</p>
      <p className="card__truck-number">מספר משאית: {truck}</p>
    </div>
  );
};

export default DriverCard;
