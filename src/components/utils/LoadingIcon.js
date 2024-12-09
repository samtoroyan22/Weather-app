import loadingIcon from "../../assets/loading.webm";
import styles from "../Weather.module.css";

function LoadingIcon() {
  return (
    <video className={styles.loadingIcon} autoPlay loop muted playsInline>
      <source src={loadingIcon} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}

export default LoadingIcon;
