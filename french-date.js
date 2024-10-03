// Ecrire une date en français 

// Tableaux des jours
const jours = [
  "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"
];

// Tableaux des mois
const mois = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre"
];

// Déclaration de la date
const date = new Date();

const jourSemaine = jours[date.getDay()];
const jourMois = date.getDate();
const moisAnnee = mois[date.getMonth()];
const année = date.getFullYear();

alert(`La date d'aujourd'hui : ${jourSemaine}, le ${jourMois} ${moisAnnee} ${année}`);