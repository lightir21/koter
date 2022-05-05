import React, { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { colRef } from "../../utils/firebase/Firebase";
import DriversList from "../drivers-list/DriversList";

const Home = ({ setDrivers, drivers }) => {
  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        let driversTemp = [];
        snapshot.docs.map((doc) => {
          driversTemp.push(doc.data());
        });
        setDrivers(() => driversTemp);
      })
      .catch((err) => console.log(err.message));
  }, []);
  console.log(drivers);
  return (
    <div>
      <nav></nav>
      <section>
        <DriversList drivers={drivers} />
      </section>
    </div>
  );
};

export default Home;
