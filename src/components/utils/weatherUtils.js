import sunIcon from "../../assets/sun.png";
import fewCloudsIcon from "../../assets/few-clouds.png";
import scatteredCloudsIcon from "../../assets/scattered-clouds.png";
import cloudyIcon from "../../assets/cloudy.png";
import showerRainIcon from "../../assets/shower-rain.png";
import rainIcon from "../../assets/rain.png";
import thunderStormIcon from "../../assets/thunderstorm.png";
import snowIcon from "../../assets/snow.png";
import mistIcon from "../../assets/mist.png";

const allIcons = {
  "01d": sunIcon,
  "01n": sunIcon,
  "02d": fewCloudsIcon,
  "02n": fewCloudsIcon,
  "03d": scatteredCloudsIcon,
  "03n": scatteredCloudsIcon,
  "04d": cloudyIcon,
  "04n": cloudyIcon,
  "09d": showerRainIcon,
  "09n": showerRainIcon,
  "10d": rainIcon,
  "10n": rainIcon,
  "11d": thunderStormIcon,
  "11n": thunderStormIcon,
  "13d": snowIcon,
  "13n": snowIcon,
  "50d": mistIcon,
  "50n": mistIcon,
};

export const getWeatherIcon = (weatherCode) => {
  return allIcons[weatherCode] || sunIcon;
};

export const transformWeatherData = (data) => {
  return {
    location: data.name,
    temperature: Math.floor(data.main.temp),
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    icon: getWeatherIcon(data.weather?.[0]?.icon) || sunIcon,
  };
};
