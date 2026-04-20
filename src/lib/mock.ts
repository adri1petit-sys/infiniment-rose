// Données mockées — remplacées par Supabase + HelloAsso après partenariat Ligue 37

export type MockDonation = {
  firstName: string;
  amount: number; // en euros
  minutesAgo: number;
};

export const mockDonations: MockDonation[] = [
  { firstName: "Camille", amount: 50, minutesAgo: 3 },
  { firstName: "Thomas", amount: 20, minutesAgo: 12 },
  { firstName: "Sophie", amount: 100, minutesAgo: 24 },
  { firstName: "Julien", amount: 30, minutesAgo: 47 },
  { firstName: "Marie", amount: 20, minutesAgo: 63 },
  { firstName: "Pierre", amount: 40, minutesAgo: 91 },
  { firstName: "Léa", amount: 25, minutesAgo: 124 },
  { firstName: "Antoine", amount: 80, minutesAgo: 156 },
  { firstName: "Chloé", amount: 20, minutesAgo: 189 },
  { firstName: "Vincent", amount: 150, minutesAgo: 220 },
];

export const MOCK_CURRENT_PARTICIPANTS = 27;
export const MOCK_TOTAL_COLLECTED_EUR = 1_080;

export const pastEditions = [
  {
    year: 2024,
    edition: "1ʳᵉ édition",
    participants: 42,
    lastHour: 7,
    note: "Premier test, ambiance familiale, pluie battante au 5ᵉ tour.",
  },
  {
    year: 2025,
    edition: "2ᵉ édition",
    participants: 89,
    lastHour: 11,
    note: "Record battu, belle météo, premier vrai last one standing du SARC.",
  },
];

export const faqItems = [
  {
    q: "C'est quoi un backyard ultra, concrètement ?",
    a: "Toutes les heures pile, un coup de pistolet. Vous devez boucler les 6,7 km en moins d'une heure pour être autorisé à repartir au coup suivant. Si vous finissez en 52 min, vous avez 8 min pour souffler. Si vous dépassez 60 min, vous êtes éliminé. Le dernier debout gagne.",
  },
  {
    q: "Faut-il un certificat médical ?",
    a: "Oui, un certificat de non contre-indication à la course à pied en compétition daté de moins d'un an, ou une licence FFA/FFTri en cours de validité. Document à téléverser lors de l'inscription.",
  },
  {
    q: "Dois-je pouvoir aller très loin ?",
    a: "Non ! Beaucoup viennent pour tenter 1, 2 ou 3 tours, par solidarité et pour l'ambiance. Chaque euro compte, peu importe le nombre de tours.",
  },
  {
    q: "Quel équipement ?",
    a: "Chaussures de running/trail, eau, téléphone chargé, frontale à partir du 7ᵉ tour (19h). Tenue adaptée à la météo (couche longue recommandée à partir du soir).",
  },
  {
    q: "Y a-t-il des ravitaillements ?",
    a: "Oui, deux ravitos : un à mi-parcours sur la boucle, et le ravito principal à l'agence LaFORÊT entre chaque tour (eau, isotonique, fruits, sucré, salé, chaud en soirée).",
  },
  {
    q: "Combien de temps ça dure ?",
    a: "Entre quelques heures et… autant que le dernier debout tient. Le record mondial est à plus de 100 tours. Prévoyez vêtements de rechange si vous visez la nuit.",
  },
  {
    q: "Puis-je abandonner quand je veux ?",
    a: "Oui, à tout moment. Il suffit d'avertir un bénévole au passage au corral. Vous restez un finisher aux yeux de la cause.",
  },
  {
    q: "Où est-ce que je me gare ?",
    a: "Parking de l'agence LaFORÊT et rues adjacentes. Un plan de parking sera envoyé par email à tous les inscrits la semaine précédente.",
  },
  {
    q: "Douches et vestiaires ?",
    a: "Douches disponibles au complexe sportif à 400 m, accès offert aux participants sur présentation du dossard.",
  },
  {
    q: "Puis-je m'inscrire le jour J ?",
    a: "Uniquement si la limite de 150 inscrits n'est pas atteinte. On conseille vivement de s'inscrire à l'avance, les deux dernières éditions ont été complètes une semaine avant.",
  },
];
