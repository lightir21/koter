import { useState } from "react";
import ManagerDashboard from "./pages/managerDashboard/ManagerDashboard";

function App() {
  const [drivers, setDrivers] = useState([]);

  return (
    <div className="App">
      <ManagerDashboard setDrivers={setDrivers} drivers={drivers} />
    </div>
  );
}

export default App;
