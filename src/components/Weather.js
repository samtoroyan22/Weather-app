import { useRef, useState } from "react";
import { transformWeatherData } from "./utils/weatherUtils";
import { getWeatherBackground } from "./utils/backgroundUtils";
import WeatherInput from "./WeatherInput";
import WeatherData from "./WeatherData";
import LoadingIcon from "./utils/LoadingIcon";
import { message } from "antd";
import styles from "./Weather.module.css";

function Weather({ onWeatherChange, weatherType }) {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleError = (errorMessage) => {
    message.error(errorMessage);
  };

  const search = async () => {
    const city = inputRef.current.value.trim();
    if (!city) {
      return;
    }

    setLoading(true);
    setWeatherData(null);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ac690b97ee15b5bddc33d50d8221533b`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        const errorMessage =
          data.message[0].toUpperCase() + data.message.slice(1).toLowerCase() ||
          "Something went wrong!";
        handleError(errorMessage);
        return;
      }

      const transformedData = transformWeatherData(data);
      setWeatherData(transformedData);

      onWeatherChange(data.weather[0].main.toLowerCase());
    } catch (error) {
      const errorMessage = "Failed to fetch weather data. Please try again.";
      handleError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${styles.weather} ${getWeatherBackground(weatherType)}`}>
      <WeatherInput inputRef={inputRef} onClick={search} />
      {loading && <LoadingIcon />}
      {weatherData && <WeatherData weatherData={weatherData} />}
    </div>
  );
}

export default Weather;
