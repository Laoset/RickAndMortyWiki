import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div className={styles.contenedor}>
      <div className={styles.divorin}>
        <div className={styles.navsitos}>
          <NavLink to="/about" className={styles.navi}>
            ABOUT
          </NavLink>
          <NavLink to="/home" className={styles.navi}>
            HOME
          </NavLink>
          <NavLink to="/favorites" className={styles.navi}>
            FAVORITES
          </NavLink>
            <button
              className={styles.logOut}
              onClick={() => window.location.reload()}
            >
              Log Out
            </button>
        </div>
      </div>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
