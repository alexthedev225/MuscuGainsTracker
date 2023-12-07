import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://muscu-gains-tracker.onrender.com/api/users/login",
        formData
      );
      const { token, userId, username, profileImage } = response.data;

      // Stockez le token dans un cookie avec une durée d'expiration (7 jours)
      Cookies.set("token", token);

      // Stockez les informations dans des cookies sécurisés et HttpOnly
      Cookies.set("token", token, { secure: true, httpOnly: true });
      Cookies.set("userId", userId, {
        secure: true
      });
      Cookies.set("username", username, {
        secure: true,
      });
      Cookies.set("profileImage", profileImage, { secure: true });
      window.location.href = "/";
      console.log(response.data); // Affichez la réponse du serveur, qui peut inclure le token JWT
      // Redirigez l'utilisateur vers la page d'accueil ou effectuez d'autres actions nécessaires
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Se Connecter</button>
      </form>
    </div>
  );
};

export default Login;
