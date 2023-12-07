// axios.js

import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: 'https://muscu-gains-tracker.onrender.com/api', // Remplacez par l'URL de votre backend
});

// Ajouter un intercepteur pour toutes les requêtes sortantes
instance.interceptors.request.use((config) => {
  // Récupérer le token depuis le cookie
  const token = Cookies.get('token');
  // Ajouter le token à l'en-tête d'autorisation si présent
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;
