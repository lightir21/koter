import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import ManagerDashboard from "./pages/managerDashboard/ManagerDashboard";
import SingleDriver from "./components/singleDriver/SingleDriver";

function App() {
  const [drivers, setDrivers] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ManagerDashboard setDrivers={setDrivers} drivers={drivers} />
          }
        />
        <Route path="/single-driver" element={<SingleDriver />} />
      </Routes>
    </div>
  );
}

export default App;
