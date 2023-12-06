import TableauDeBord from "../components/TableauDeBord";
import GraphiquePerformances from "../components/GraphiquesProgression";
import styles from "../styles/Profil.module.css";
import Cookies from "js-cookie";

export default function Profil() {
  const username = Cookies.get('username')
  return (
    <div className={styles.profil}>
      <h1 className={styles.bienvenue}>Bienvenue sur votre page de profil {username} !</h1>
      <p className={styles.description}>
        Ici, vous pouvez suivre votre progression en musculation, visualiser vos
        performances au fil du temps et gérer vos informations personnelles.
        Utilisez cette page pour rester motivé, fixer des objectifs et voir à
        quel point vous avez progressé. Bon entraînement 😉
      </p>
      <h2 className={styles.titre}>Tableau de bord de progression</h2>
      <div className={styles.tableauDeBord}>
        <TableauDeBord />
      </div>
      <h2 className={styles.titre}>Performances au fil du temps</h2>
      <div className={styles.graphiquePerformances}>
        <GraphiquePerformances />
      </div>
    </div>
  );
}
