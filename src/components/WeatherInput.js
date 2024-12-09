import styles from "./Weather.module.css";
import { IoSearchSharp } from "react-icons/io5";

function WeatherInput({ inputRef, onClick }) {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>Weather</h1>
      <form onSubmit={onSubmitHandler} className={styles.searchBar}>
        <input ref={inputRef} type="text" placeholder="Search" />
        <button onClick={onClick} type="submit">
          <IoSearchSharp />
        </button>
      </form>
    </>
  );
}

export default WeatherInput;
