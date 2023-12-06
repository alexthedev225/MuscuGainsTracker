import axios from '../config/axios.js'; // Importez le fichier axios.js
import { useState } from 'react';
import PropTypes from 'prop-types';
import { EntrainementContext } from './useEntrainementContext.js';

export const EntrainementProvider = ({ children }) => {
  const [dernieresPerformances, setDernieresPerformances] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/entrainement');
      const data = response.data;
      setDernieresPerformances(data.dernieresPerformances);
    } catch (error) {
      console.error('Erreur lors de la récupération des données depuis le backend :', error);
    }
  };

  return (
    <EntrainementContext.Provider value={{ dernieresPerformances, fetchData }}>
      {children}
    </EntrainementContext.Provider>
  );
};

EntrainementProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

