export interface Contact {
  nom?: string;
  prenom?: string;
  email?: string;
  telephone?: string;
}

export interface CoursItem {
  heure: string;
  age: string;
  lieu: string;
}

export interface JourCours {
  jour: string;
  cours: CoursItem[];
  inscriptionHref?: string;
  contact?: Contact;
}

export interface VilleData {
  nom: string;
  inscriptionHref?: string;
  contact?: Contact;
  cours: JourCours[];
}

export type CoursParVille = Record<string, VilleData>;
