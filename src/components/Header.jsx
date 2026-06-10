import { Link } from "react-router";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <p>LOGO</p>
        </div>
        <nav>
          <ul className={styles.list}>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/rechercher-un-livre">Rechercher un livre</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
