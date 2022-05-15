import React, { useState } from "react";
import "./SingleDriver.scss";

import DriveForm from "../drive-form/DriveForm";

const SingleDriver = () => {
  const [drives, setDriver] = useState([{ drive: "" }]);

  return (
    <div className="singleDriver">
      <div className="singleDriver__title-box">
        <p className="singleDriver__name">taadsfsdgdsfg</p>
        <p className="singleDriver__trcuk">sdafsdfg</p>
      </div>
      <div className="singleDriver__drives-box">
        {drives.map((drive, index) => {
          return <DriveForm key={index} />;
        })}
        <button>הוסף נסיעה +</button>
      </div>
    </div>
  );
};

export default SingleDriver;
