// TableauDeBord.jsx

import { useEffect } from 'react';
import { useEntrainementContext } from '../context/useEntrainementContext';
import styles from '../styles/TableauDeBord.module.css';

const TableauDeBord = () => {
  const { dernieresPerformances, fetchData } = useEntrainementContext();

  useEffect(() => {
    // Appelle la fonction pour récupérer les données depuis le backend
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.container}>
      <h2 className={styles.titre}>Dernières Performances</h2>
      <ul className={styles.liste}>
        {dernieresPerformances.map((performance, index) => (
          <li key={index} className={styles.item}>
            {performance.exercice} - {performance.poids} kg - {performance.repetitions} reps - {performance.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableauDeBord;
