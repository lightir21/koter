import React, { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { colRef } from "../../utils/firebase/Firebase";
import DriversList from "../drivers-list/DriversList";

import "./ManagerDashboard.scss";

const ManagerDashboard = ({ setDrivers, drivers }) => {
  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        let driversTemp = [];
        snapshot.docs.forEach((doc) => {
          driversTemp.push(doc.data());
        });
        setDrivers(() => driversTemp);
      })
      .catch((err) => console.log(err.message));
  }, [setDrivers]);
  console.log(drivers);
  return (
    <div className="managerDashboard">
      <nav>
        <button className="managerDashboard__btn">
          הוסף
          <br /> עובד חדש
        </button>
      </nav>
      <section>
        <DriversList drivers={drivers} />
      </section>
    </div>
  );
};

export default ManagerDashboard;
