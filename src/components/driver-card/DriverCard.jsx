import React from "react";

const DriverCard = ({ name, truck }) => {
  return (
    <div className="card">
      <p className="card__name">{name}</p>
      <p>מספר משאית{truck}</p>
    </div>
  );
};

export default DriverCard;
