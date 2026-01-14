// Données des professeurs par ville
export interface Professeur {
  id: string;
  nom: string;
  prenom: string;
  email?: string;
  telephone?: string;
  villes: string[]; // IDs des villes où le professeur enseigne
}

export const professeurs: Professeur[] = [
  {
    id: 'prof1',
    nom: 'Silva',
    prenom: 'Carlos',
    email: 'carlos.silva@example.com',
    telephone: '06 12 34 56 78',
    villes: ['saint-germain', 'poissy', 'carrieres-poissy']
  },
  {
    id: 'prof2',
    nom: 'Santos',
    prenom: 'Mariana',
    email: 'mariana.santos@example.com',
    telephone: '06 23 45 67 89',
    villes: ['jouy', 'vaucresson', 'bailly']
  },
  {
    id: 'prof3',
    nom: 'Oliveira',
    prenom: 'Rafael',
    email: 'rafael.oliveira@example.com',
    telephone: '06 34 56 78 90',
    villes: ['gaillon', 'verneuil', 'vernouillet']
  },
  {
    id: 'prof4',
    nom: 'Pereira',
    prenom: 'Juliana',
    email: 'juliana.pereira@example.com',
    telephone: '06 45 67 89 01',
    villes: ['guyancourt', 'chatou', 'mesnil']
  },
  {
    id: 'prof5',
    nom: 'Costa',
    prenom: 'Lucas',
    email: 'lucas.costa@example.com',
    telephone: '06 56 78 90 12',
    villes: ['triel', 'carrieres-seine', 'coubron']
  },
  {
    id: 'prof6',
    nom: 'Martins',
    prenom: 'Camila',
    email: 'camila.martins@example.com',
    telephone: '06 67 89 01 23',
    villes: ['saint-nom-la-breteche', 'ville-avray', 'montesson']
  },
  {
    id: 'prof7',
    nom: 'Ferreira',
    prenom: 'Diego',
    email: 'diego.ferreira@example.com',
    telephone: '06 78 90 12 34',
    villes: ['le-vesinet', 'maisons-laffitte', 'croissy-seine']
  }
];

// Fonction pour obtenir les professeurs par ville
export function getProfesseursParVille(villeId: string): {id: string, nomComplet: string}[] {
  return professeurs
    .filter(prof => prof.villes.includes(villeId))
    .map(prof => ({
      id: prof.id,
      nomComplet: `${prof.prenom} ${prof.nom}`
    }));
}

// Fonction pour obtenir les informations complètes d'un professeur par son ID
export function getProfesseurParId(professeurId: string): Professeur | undefined {
  return professeurs.find(p => p.id === professeurId);
}

// Données des villes avec leurs informations
export const villes = [
  {
    id: 'saint-germain',
    nom: 'Saint-Germain-en-Laye',
    professeurs: getProfesseursParVille('saint-germain')
  },
  {
    id: 'poissy',
    nom: 'Poissy',
    professeurs: getProfesseursParVille('poissy')
  },
  {
    id: 'carrieres-poissy',
    nom: 'Carrières-sous-Poissy',
    professeurs: getProfesseursParVille('carrieres-poissy')
  },
  {
    id: 'jouy',
    nom: 'Jouy-le-Moutier',
    professeurs: getProfesseursParVille('jouy')
  },
  {
    id: 'vaucresson',
    nom: 'Vaucresson',
    professeurs: getProfesseursParVille('vaucresson')
  },
  {
    id: 'bailly',
    nom: 'Bailly',
    professeurs: getProfesseursParVille('bailly')
  },
  // Ajoutez d'autres villes avec leurs professeurs
  {
    id: 'gaillon',
    nom: 'Gaillon',
    professeurs: getProfesseursParVille('gaillon')
  },
  {
    id: 'verneuil',
    nom: 'Verneuil-sur-Seine',
    professeurs: getProfesseursParVille('verneuil')
  },
  {
    id: 'vernouillet',
    nom: 'Vernouillet',
    professeurs: getProfesseursParVille('vernouillet')
  },
  {
    id: 'guyancourt',
    nom: 'Guyancourt',
    professeurs: getProfesseursParVille('guyancourt')
  },
  {
    id: 'chatou',
    nom: 'Chatou',
    professeurs: getProfesseursParVille('chatou')
  },
  {
    id: 'mesnil',
    nom: 'Le Mesnil-le-Roi',
    professeurs: getProfesseursParVille('mesnil')
  },
  {
    id: 'triel',
    nom: 'Triel-sur-Seine',
    professeurs: getProfesseursParVille('triel')
  },
  {
    id: 'carrieres-seine',
    nom: 'Carrières-sur-Seine',
    professeurs: getProfesseursParVille('carrieres-seine')
  },
  {
    id: 'coubron',
    nom: 'Coubron',
    professeurs: getProfesseursParVille('coubron')
  },
  {
    id: 'saint-nom-la-breteche',
    nom: 'Saint-Nom-la-Bretèche',
    professeurs: getProfesseursParVille('saint-nom-la-breteche')
  },
  {
    id: 'ville-avray',
    nom: 'Ville-d\'Avray',
    professeurs: getProfesseursParVille('ville-avray')
  },
  {
    id: 'montesson',
    nom: 'Montesson',
    professeurs: getProfesseursParVille('montesson')
  },
  {
    id: 'le-vesinet',
    nom: 'Le Vésinet',
    professeurs: getProfesseursParVille('le-vesinet')
  },
  {
    id: 'maisons-laffitte',
    nom: 'Maisons-Laffitte',
    professeurs: getProfesseursParVille('maisons-laffitte')
  },
  {
    id: 'croissy-seine',
    nom: 'Croissy-sur-Seine',
    professeurs: getProfesseursParVille('croissy-seine')
  }
];

// Fonction pour obtenir les informations d'une ville par son ID
export function getVilleParId(villeId: string) {
  return villes.find(v => v.id === villeId);
}
