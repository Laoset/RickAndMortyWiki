import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

export default function Nav(props) {
  const navigate = useNavigate();
  const onClose = () => {
    localStorage.removeItem("id");
    navigate("/");
  };
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
          <button className={styles.logOut} onClick={onClose}>
            Log Out
          </button>
        </div>
      </div>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
