

export const professeurs = [
  {
    id: 'marcio-silva',
    nom: 'Banana',
    prenom: 'Mestre',
    photo: '/images/professeurs/cathy.jpeg',
    email: 'carlos.silva@example.com',
    telephone: '06 12 34 56 78',
    villes: ['saint-germain', 'poissy', 'triel', 'chatou', 'le-vesinet']
  },
  {
    id: 'orlane-silva',
    nom: 'Orlane',
    prenom: 'Mestra',
    photo: '/images/professeurs/orlane.jpg',
    email: 'mariana.santos@example.com',
    telephone: '06 23 45 67 89',
    villes: ['triel', 'vernouillet', 'verneuil']
  },
  {
    id: 'hanaa-aangour',
    nom: 'Positiva',
    prenom: 'Professora',
    photo: '/images/professeurs/hanaa.jpeg',
    email: 'rafael.oliveira@example.com',
    telephone: '06 34 56 78 90',
    villes: ['triel']
  },
  {
    id: 'treme-treme',
    nom: 'Treme treme',
    prenom: 'Professor',
    photo: '/images/professeurs/Tremetreme.jpg',
    email: 'juliana.pereira@example.com',
    telephone: '06 45 67 89 01',
    villes: ['guyancourt']
  },
  {
    id: 'sininho',
    nom: 'Sininho',
    prenom: 'Professora',
    photo: '/images/professeurs/sininho.jpg',
    email: 'lucas.costa@example.com',
    telephone: '06 56 78 90 12',
    villes: ['guyancourt']
  },
  {
    id: 'christian-tavares',
    nom: 'Bicho do mato',
    prenom: 'Contra-mestre',
    photo: '/images/professeurs/cathy.jpeg',
    email: 'camila.martins@example.com',
    telephone: '06 67 89 01 23',
    villes: ['carrieres-poissy', 'mesnil', 'maisons-laffitte']
  },
  {
    id: 'india',
    nom: 'India',
    prenom: 'Professora',
    photo: '/images/professeurs/india.jpg',
    email: 'diego.ferreira@example.com',
    telephone: '06 78 90 12 34',
    villes: ['carrieres-seine']
  },
  {
    id: 'fabio',
    nom: 'Canela',
    prenom: 'Contra-mestre',
    photo: '/images/professeurs/cathy.jpeg',
    email: 'diego.ferreira@example.com',
    telephone: '06 78 90 12 34',
    villes: ['jouy']
  },
  {
    id: 'lea',
    nom: 'Ligeirinha',
    prenom: 'Instrutora',
    photo: '/images/professeurs/ligeirinha.jpg',
    email: 'diego.ferreira@example.com',
    telephone: '06 78 90 12 34',
    villes: ['vaucresson']
  },
  {
    id: 'coqueiro',
    nom: 'Coqueiro',
    prenom: 'Professor',
    photo: '/images/professeurs/coqueiro.jpg',
    email: 'diego.ferreira@example.com',
    telephone: '06 78 90 12 34',
    villes: ['bailly']
  },
  {
    id: 'noemie-carlos',
    nom: 'Estrelinha',
    prenom: 'Professora',
    photo: '/images/professeurs/estrelinha.jpg',
    email: 'diego.ferreira@example.com',
    telephone: '06 78 90 12 34',
    villes: ['gaillon']
  },
  {
    id: 'roland',
    nom: 'Trico',
    prenom: 'Contra-mestre',
    photo: '/images/professeurs/trico.jpg',
    email: 'diego.ferreira@example.com',
    telephone: '06 78 90 12 34',
    villes: ['coubron']
  },
  {
    id: 'geraldine',
    nom: 'Calça Branca',
    prenom: 'Instrutora',
    photo: '/images/professeurs/calçabranca.jpg',
    email: 'diego.ferreira@example.com',
    telephone: '06 78 90 12 34',
    villes: ['mesnil']
  },
  {
    id: 'Nolwenn',
    nom: 'Paquita',
    prenom: 'Instrutora',
    photo: '/images/professeurs/paquita.jpg',
    email: 'diego.ferreira@example.com',
    telephone: '06 78 90 12 34',
    villes: ['saint-nom-la-breteche']
  },
   {
    id: 'claudinha',
    nom: 'Claudinha (Farinha)',
    prenom: 'Contra-mestra',
    photo: '/images/professeurs/claudinha.jpg',
    email: 'diego.ferreira@example.com',
    telephone: '06 78 90 12 34',
    villes: ['ville-avray', 'le-vesinet']
  },
  {
    id: 'perna-leve',
    nom: 'Perna leve',
    prenom: 'Instrutor',
    photo: '/images/professeurs/cathy.jpeg',
    email: 'diego.ferreira@example.com',
    telephone: '06 78 90 12 34',
    villes: ['montesson']
  },
   {
    id: 'brazil',
    nom: 'Brazil',
    prenom: 'Instrutor',
    photo: '/images/professeurs/brazil.jpg',
    email: 'diego.ferreira@example.com',
    telephone: '06 78 90 12 34',
    villes: ['triel']
  },
];

// Fonction pour obtenir les professeurs par ville
export function getProfesseursParVille(villeId) {
  return professeurs
    .filter(prof => prof.villes.includes(villeId))
    .map(prof => ({
      id: prof.id,
      nomComplet: `${prof.prenom} ${prof.nom}`,
      photo: prof.photo
    }));
}

// Fonction pour obtenir les informations complètes d'un professeur par son ID
export function getProfesseurParId(professeurId) {
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
export function getVilleParId(villeId) {
  return villes.find(v => v.id === villeId);
}
