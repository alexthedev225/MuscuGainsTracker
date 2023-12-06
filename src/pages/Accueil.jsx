import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Logout from "../components/ButtonDeDeconnexion";

export default function Accueil() {
  const token = Cookies.get("token");
  const username = Cookies.get("username");
  if (!token) {
    return (
      <>
        <Link to={"/inscription"}>Inscription</Link>
        <Link to={"/connexion"}>Connexion</Link>
      </>
    );
  }
  return (
    <>
      <h1>Bienvenue {username}</h1>
      <Logout />
    </>
  );
}
