import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
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
