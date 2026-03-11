import './globals.css';
import { NotificationProvider } from '@/context/NotificationContext';
import { FloatingNotifications } from '@/components/ui/floating-notifications';

export const metadata = {
  metadataBase: new URL('https://capoeirasenzala78.fr'),
  title: {
    default: 'Capoeira Senzala 78 | École de Capoeira dans les Yvelines',
    template: '%s | Capoeira Senzala 78',
  },
  description: 'École de capoeira dans les Yvelines (78). Cours pour enfants et adultes dans plus de 20 villes : Versailles, Saint-Germain-en-Laye, Poissy, Mantes-la-Jolie. Stages, événements et prestations professionnelles.',
  keywords: ['capoeira', 'senzala', 'yvelines', '78', 'cours capoeira', 'capoeira enfants', 'capoeira adultes', 'batucada', 'art martial brésilien', 'Versailles', 'Saint-Germain-en-Laye', 'Poissy'],
  authors: [{ name: 'Grupo Senzala 78' }],
  creator: 'Grupo Senzala 78',
  icons: {
    icon: '/images/logo-capoeirasenzala1.png',
    apple: '/images/logo-capoeirasenzala1.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://capoeirasenzala78.fr',
    siteName: 'Capoeira Senzala 78',
    title: 'Capoeira Senzala 78 | École de Capoeira dans les Yvelines',
    description: 'École de capoeira dans les Yvelines (78). Cours pour enfants et adultes dans plus de 20 villes. Stages, événements et prestations professionnelles.',
    images: [
      {
        url: '/images/hero-section-img/home.jpg',
        width: 1200,
        height: 630,
        alt: 'Capoeira Senzala 78 - École de Capoeira',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capoeira Senzala 78 | École de Capoeira dans les Yvelines',
    description: 'École de capoeira dans les Yvelines (78). Cours pour enfants et adultes dans plus de 20 villes.',
    images: ['/images/hero-section-img/home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://capoeirasenzala78.fr',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Capoeira Senzala 78',
  description: 'École de capoeira dans les Yvelines (78). Cours pour enfants et adultes dans plus de 20 villes.',
  url: 'https://capoeirasenzala78.fr',
  logo: 'https://capoeirasenzala78.fr/images/logo-capoeirasenzala1.png',
  image: 'https://capoeirasenzala78.fr/images/hero-section-img/home.jpg',
  telephone: '+33 6 XX XX XX XX',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Yvelines',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.8,
    longitude: 2.1,
  },
  sameAs: [
    'https://www.facebook.com/gruposenzala78',
    'https://www.instagram.com/gruposenzala78',
  ],
  sport: 'Capoeira',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '21:00',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NotificationProvider>
          {children}
          <FloatingNotifications />
        </NotificationProvider>
      </body>
    </html>
  );
}
