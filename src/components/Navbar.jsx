import { NavLink } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { useEffect, useState } from "react";
import "../styles/Navbar.css";
function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);

    // Ajoute ou supprime la classe 'no-scroll' au corps du document
    document.body.classList.toggle("no-scroll", !isMenuOpen);
  };

  useEffect(() => {
    // Nettoie la classe ajoutée lorsque le composant est démonté
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <nav className={styles.container}>
      <div className={styles["logo-container"]}>
        <img src="/logo.png" alt="logo image" />
      </div>
      <button
        className={`burger-menu-button ${isMenuOpen ? "close" : ""}`}
        onClick={toggleMenu}
      >
        <div className={`burger-line ${isMenuOpen ? "close" : ""}`}></div>
        <div className={`burger-line ${isMenuOpen ? "close" : ""}`}></div>
        <div className={`burger-line ${isMenuOpen ? "close" : ""}`}></div>
      </button>
      <div className={`menu-items ${isMenuOpen ? "show-menu" : ""}`}>
        <ul className="link-container">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "hotpink" : null,
                  borderBottom: isActive ? "3px solid hotpink" : null,
                };
              }}
              onClick={toggleMenu}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profil"
              style={({ isActive }) => {
                return {
                  color: isActive ? "hotpink" : null,
                  borderBottom: isActive ? "3px solid hotpink" : null,
                };
              }}
              onClick={toggleMenu}
            >
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/entrainement"
              style={({ isActive }) => {
                return {
                  color: isActive ? "hotpink" : null,
                  borderBottom: isActive ? "3px solid hotpink" : null,
                };
              }}
              onClick={toggleMenu}
            >
              Entraînement
            </NavLink>
          </li>
          <li>
          <NavLink
            to="/inscription"
            style={({ isActive }) => {
              return {
                color: isActive ? "hotpink" : null,
                borderBottom: isActive ? "3px solid hotpink" : null,
              };
            }}
            onClick={toggleMenu}
          >
            Inscription
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/connexion"
            style={({ isActive }) => {
              return {
                color: isActive ? "hotpink" : null,
                borderBottom: isActive ? "3px solid hotpink" : null,
              };
            }}
            onClick={toggleMenu}
          >
            Connexion
          </NavLink>
        </li>
        </ul>
        
      </div>
      <ul className={styles["link-container"]}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "hotpink" : null,
                borderBottom: isActive ? "3px solid hotpink" : null,
              };
            }}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profil"
            style={({ isActive }) => {
              return {
                color: isActive ? "hotpink" : null,
                borderBottom: isActive ? "3px solid hotpink" : null,
              };
            }}
          >
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/entrainement"
            style={({ isActive }) => {
              return {
                color: isActive ? "hotpink" : null,
                borderBottom: isActive ? "3px solid hotpink" : null,
              };
            }}
          >
            Entraînement
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/inscription"
            style={({ isActive }) => {
              return {
                color: isActive ? "hotpink" : null,
                borderBottom: isActive ? "3px solid hotpink" : null,
              };
            }}
          >
            Inscription
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/connexion"
            style={({ isActive }) => {
              return {
                color: isActive ? "hotpink" : null,
                borderBottom: isActive ? "3px solid hotpink" : null,
              };
            }}
          >
            Connexion
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
