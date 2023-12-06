
import Cookies from "js-cookie";

const Logout = () => {
  const handleLogout = () => {
    // Supprimez les cookies associés à l'utilisateur en spécifiant les options SameSite=None et Secure
    Cookies.remove("token", { sameSite: "None", secure: true });
    Cookies.remove("userId", { sameSite: "None", secure: true });
    Cookies.remove("username", { sameSite: "None", secure: true });
    Cookies.remove("profileImage", { sameSite: "None", secure: true });
    window.location.reload();
  };

  return (
    <div>
      <button onClick={handleLogout}>Se Déconnecter</button>
    </div>
  );
};

export default Logout;
