import { useState } from "react";
import VantaBackground from "./components/VantaBackground";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  const [weatherType, setWeatherType] = useState("clear");

  return (
    <div className="main">
      <VantaBackground weatherType={weatherType} />
      <div className="WeatherApp">
        <Weather onWeatherChange={setWeatherType} weatherType={weatherType} />
      </div>
    </div>
  );
}

export default App;
