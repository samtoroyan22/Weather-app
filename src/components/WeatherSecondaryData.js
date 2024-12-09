import styles from "./Weather.module.css";

function WeatherSecondaryData({
  weatherSecondaryData,
  icon,
  text,
  dimensions,
}) {
  return (
    <div className={styles.col}>
      <img src={icon} alt={`${text} Icon`} />
      <div>
        <p>
          {weatherSecondaryData} {dimensions}
        </p>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default WeatherSecondaryData;
