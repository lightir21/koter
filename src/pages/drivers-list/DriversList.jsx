import React from "react";

import DriverCard from "../../components/driver-card/DriverCard";

const DriversList = ({ drivers }) => {
  return (
    <div>
      {drivers.map((driver) => {
        const { name, truck } = driver;
        return <DriverCard name={name} truck={truck} key={truck} />;
      })}
    </div>
  );
};

export default DriversList;
