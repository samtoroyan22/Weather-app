import WeatherSecondaryData from "./WeatherSecondaryData";
import styles from "./Weather.module.css";
import humidityIcon from "../assets/humidity.png";
import windIcon from "../assets/wind.png";

function WeatherData({ weatherData }) {
  return (
    <>
      <img
        src={weatherData.icon}
        alt="Weather Icon"
        className={styles.weatherIcon}
      />
      <p className={styles.temprature}>{weatherData.temperature}°c</p>
      <p className={styles.location}>{weatherData.location}</p>
      <div className={styles.weatherData}>
        <WeatherSecondaryData
          weatherSecondaryData={weatherData.humidity}
          icon={humidityIcon}
          text="Humidity"
          dimensions="%"
        />
        <WeatherSecondaryData
          weatherSecondaryData={weatherData.windSpeed}
          icon={windIcon}
          text="Wind speed"
          dimensions="Km/h"
        />
      </div>
    </>
  );
}

export default WeatherData;
