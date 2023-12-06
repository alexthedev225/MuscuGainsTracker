import { useState } from 'react';
import axios from '../config/axios'; // Importez le fichier axios.js
import { useRecoilState } from 'recoil';
import { entraînementsState, exercicesListState } from '../recoil/atoms';
import { useEntrainementContext } from '../context/useEntrainementContext';

const EnregistrementEntrainementForm = () => {
  const { fetchData } = useEntrainementContext();

  const [detailsEntrainement, setDetailsEntrainement] = useState({
    exercice: '',
    poids: '',
    repetitions: '',
    date: '',
  });

  const [exercicesList] = useRecoilState(exercicesListState);

  // Recoil state pour gérer les entraînements globaux
  const [entraînements, setEntraînements] = useRecoilState(entraînementsState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetailsEntrainement((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  

  
    // Envoie les détails de l'entraînement au backend avec le jeton dans l'en-tête
    try {
      const response = await axios.post('/entrainement/enregistrements', detailsEntrainement);
      // Mise à jour de l'état global Recoil avec le nouvel entraînement
      setEntraînements([...entraînements, response.data]);
      console.log(response.data)
      fetchData()
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de l\'entraînement :', error);
    }
  
    // Réinitialise le formulaire après envoi
    setDetailsEntrainement({
      exercice: '',
      poids: '',
      repetitions: '',
      date: '',
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Exercice:
        <select
          name="exercice"
          value={detailsEntrainement.exercice}
          onChange={handleChange}
        >
          <option value="" disabled>Sélectionnez un exercice</option>
          {exercicesList.map((exercice) => (
            <option key={exercice.id} value={exercice.nom}>
              {exercice.nom}
            </option>
          ))}
        </select>
      </label>
      <label>
        Poids (kg):
        <input
          type="text"
          name="poids"
          value={detailsEntrainement.poids}
          onChange={handleChange}
        />
      </label>
      <label>
        Répétitions:
        <input
          type="text"
          name="repetitions"
          value={detailsEntrainement.repetitions}
          onChange={handleChange}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={detailsEntrainement.date}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default EnregistrementEntrainementForm;
