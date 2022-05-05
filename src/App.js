import { useState } from "react";
import Home from "./pages/home/Home";

function App() {
  const [drivers, setDrivers] = useState([]);

  return (
    <div className="App">
      <Home setDrivers={setDrivers} drivers={drivers} />
    </div>
  );
}

export default App;
