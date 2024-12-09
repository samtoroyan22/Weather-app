import styles from "../Weather.module.css";

export const getWeatherBackground = (weatherType) => {
  switch (weatherType) {
    case "clear":
      return styles.clearWeather;
    case "clouds":
    case "rain":
    case "snow":
    case "mist":
      return styles.cloudyWeather;
    case "thunderstorm":
      return styles.thunderstormWeather;
    default:
      return styles.clearWeather;
  }
};
