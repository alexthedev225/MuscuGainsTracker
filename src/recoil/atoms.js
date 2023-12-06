// atoms.js
import { atom } from 'recoil';

// Atome Recoil pour stocker les entraînements
export const entraînementsState = atom({
  key: 'entraînementsState',
  default: [], // Le tableau par défaut est vide, il sera rempli avec les entraînements au fur et à mesure
});
export const exercicesListState = atom({
  key: 'exercicesList',
  default: [
    { id: 1, nom: 'Squat' },
    { id: 2, nom: 'Développé couché' },
    { id: 3, nom: 'Soulevé de terre' },
    { id: 4, nom: 'Rowing barre' },
    { id: 5, nom: 'Développé militaire' },
    { id: 6, nom: 'Tirage poitrine' },
    { id: 7, nom: 'Curl biceps barre EZ' },
    { id: 8, nom: 'Extension triceps barre' },
    { id: 9, nom: 'Leg press' },
    { id: 10, nom: 'Presse à épaules' },
    // Ajoute d'autres exercices si nécessaire...
  ],
});
export const onEntrainementEnregistreAtom = atom({
  key: 'onEntrainementEnregistreAtom',
  default: () => {},
});
export const dernierEntrainementState = atom({
  key: 'dernierEntrainement',
  default: null, // Vous pouvez définir la valeur par défaut en fonction de la structure de vos données
});