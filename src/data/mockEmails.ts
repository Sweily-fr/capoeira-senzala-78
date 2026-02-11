export interface Email {
  id: string;
  from: string;
  fromEmail: string;
  subject: string;
  preview: string;
  content?: string;
  htmlContent?: string;
  timestamp: Date;
  read: boolean;
}

export const mockEmails: Email[] = [
  {
    id: "1",
    from: "Mestre Senzala",
    fromEmail: "mestre@senzala78.fr",
    subject: "Stage de Capoeira - Inscriptions ouvertes",
    preview: "Bonjour, nous avons le plaisir de vous annoncer l'ouverture des inscriptions pour le prochain stage de capoeira...",
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // il y a 30 min
    read: false,
  },
  {
    id: "2",
    from: "Groupe Senzala 78",
    fromEmail: "contact@senzala78.fr",
    subject: "Rappel: Roda ce samedi",
    preview: "N'oubliez pas la roda ce samedi à 15h au gymnase. Venez nombreux avec vos instruments...",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // il y a 2h
    read: false,
  },
  {
    id: "3",
    from: "Capoeira Senzala",
    fromEmail: "info@senzala78.fr",
    subject: "Nouveau cours à Versailles",
    preview: "Nous sommes heureux de vous informer de l'ouverture d'un nouveau cours à Versailles tous les mercredis...",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // il y a 5h
    read: false,
  },
  {
    id: "4",
    from: "Administration Senzala",
    fromEmail: "admin@senzala78.fr",
    subject: "Confirmation d'inscription",
    preview: "Votre inscription au cours de capoeira a bien été enregistrée. Bienvenue dans notre groupe...",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // hier
    read: true,
  },
  {
    id: "5",
    from: "Mestre Senzala",
    fromEmail: "mestre@senzala78.fr",
    subject: "Batizado 2024 - Save the date",
    preview: "Le batizado annuel aura lieu le 15 juin 2024. Réservez cette date importante pour notre groupe...",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // il y a 2 jours
    read: true,
  },
  {
    id: "6",
    from: "Groupe Senzala 78",
    fromEmail: "contact@senzala78.fr",
    subject: "Photos du dernier événement",
    preview: "Les photos de la roda du mois dernier sont maintenant disponibles. Rendez-vous sur notre site...",
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // il y a 4 jours
    read: true,
  },
  {
    id: "7",
    from: "Newsletter Senzala",
    fromEmail: "newsletter@senzala78.fr",
    subject: "Newsletter de janvier",
    preview: "Découvrez les actualités du mois: nouveaux cours, événements à venir, et témoignages de nos élèves...",
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // il y a 7 jours
    read: true,
  },
];

export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes < 1) {
    return "à l'instant";
  } else if (diffInMinutes < 60) {
    return `il y a ${diffInMinutes} min`;
  } else if (diffInHours < 24) {
    return `il y a ${diffInHours}h`;
  } else if (diffInDays === 1) {
    return "hier";
  } else if (diffInDays < 7) {
    return `il y a ${diffInDays} jours`;
  } else {
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
    });
  }
}
