export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  gender?: 'Homme' | 'Femme';
  orderLink: string;
  details?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'T-shirt Adulte Homme Senzala 78',
    description: 'T-shirt officiel du Grupo Senzala 78 pour homme avec le logo brodé. Coton de qualité supérieure, coupe confortable pour la pratique ou le quotidien.',
    price: 15.00,
    image: '/images/boutique/tenue_adulte_14.jpg',
    images: [
      '/images/boutique/tenue_adulte_10.jpg',
      '/images/boutique/tenue_adulte_11.jpg',
      '/images/boutique/tenue_adulte_12.jpg',
      '/images/boutique/tenue_adulte_13.jpg',
      '/images/boutique/tenue_adulte_14.jpg',
      '/images/boutique/tenue_adulte_15.jpg',
      '/images/boutique/tenue_adulte_16.jpg',
      '/images/boutique/tenue_adulte_17.jpg',
      '/images/boutique/tenue_adulte_18.jpg',
      '/images/boutique/tenue_adulte_19.jpg'
    ],
    category: 'Vêtements',
    gender: 'Homme',
    orderLink: 'https://capoeira-senzala-78.assoconnect.com/collect/choice/93016-s-tenues-officielle-capoeira-senzala-78-tee-shirt-et-abada',
    details: {
      'Tailles': 'S, M, L, XL, XXL',
      'Matière': 'Coton 100%',
      'Couleur': 'Blanc avec logo Senzala 78'
    }
  },
  {
    id: '2',
    name: 'T-shirt Adulte Femme Senzala 78',
    description: 'T-shirt officiel du Grupo Senzala 78 pour femme avec le logo brodé. Coton de qualité supérieure, coupe féminine confortable pour la pratique ou le quotidien.',
    price: 15.00,
    image: '/images/boutique/tenue_adulte_24.jpg',
    images: [
      '/images/boutique/tenue_adulte_20.jpg',
      '/images/boutique/tenue_adulte_21.jpg',
      '/images/boutique/tenue_adulte_22.jpg',
      '/images/boutique/tenue_adulte_23.jpg',
      '/images/boutique/tenue_adulte_24.jpg',
      '/images/boutique/tenue_adulte_25.jpg',
      '/images/boutique/tenue_adulte_26.jpg',
      '/images/boutique/tenue_adulte_27.jpg'
    ],
    category: 'Vêtements',
    gender: 'Femme',
    orderLink: 'https://capoeira-senzala-78.assoconnect.com/collect/choice/93016-s-tenues-officielle-capoeira-senzala-78-tee-shirt-et-abada',
    details: {
      'Tailles': 'XS, S, M, L, XL',
      'Matière': 'Coton 100%',
      'Couleur': 'Blanc avec logo Senzala 78'
    }
  },
  {
    id: '3',
    name: 'Abadá Adulte Homme Senzala 78',
    description: 'Pantalon abadá traditionnel de capoeira pour homme. Coupe ample permettant tous les mouvements, tissu résistant et confortable. Logo Senzala 78 sur la jambe.',
    price: 35.00,
    image: '/images/boutique/tenue_adulte_05.jpg',
    images: [
      '/images/boutique/tenue_adulte_02.jpg',
      '/images/boutique/tenue_adulte_03.jpg',
      '/images/boutique/tenue_adulte_04.jpg',
      '/images/boutique/tenue_adulte_05.jpg',
      '/images/boutique/tenue_adulte_06.jpg',
      '/images/boutique/tenue_adulte_07.jpg',
      '/images/boutique/tenue_adulte_08.jpg',
      '/images/boutique/tenue_adulte_09.jpg'
    ],
    category: 'Vêtements',
    gender: 'Homme',
    orderLink: 'https://capoeira-senzala-78.assoconnect.com/collect/choice/93016-s-tenues-officielle-capoeira-senzala-78-tee-shirt-et-abada',
    details: {
      'Tailles': 'S, M, L, XL, XXL',
      'Matière': 'Coton résistant',
      'Couleur': 'Blanc avec logo Senzala 78'
    }
  },
  {
    id: '4',
    name: 'Abadá Adulte Femme Senzala 78',
    description: 'Pantalon abadá traditionnel de capoeira pour femme. Coupe féminine permettant tous les mouvements, tissu résistant et confortable. Logo Senzala 78 sur la jambe.',
    price: 35.00,
    image: '/images/boutique/tenue_adulte_28.jpg',
    images: [
      '/images/boutique/tenue_adulte_28.jpg',
      '/images/boutique/tenue_adulte_29.jpg',
      '/images/boutique/tenue_adulte_30.jpg',
      '/images/boutique/tenue_adulte_31.jpg',
      '/images/boutique/tenue_adulte_32.jpg',
      '/images/boutique/tenue_adulte_33.jpg',
      '/images/boutique/tenue_adulte_34.jpg',
      '/images/boutique/tenue_adulte_20.jpg'
    ],
    category: 'Vêtements',
    gender: 'Femme',
    orderLink: 'https://capoeira-senzala-78.assoconnect.com/collect/choice/93016-s-tenues-officielle-capoeira-senzala-78-tee-shirt-et-abada',
    details: {
      'Tailles': 'XS, S, M, L, XL',
      'Matière': 'Coton résistant',
      'Couleur': 'Blanc avec logo Senzala 78'
    }
  },
  {
    id: '5',
    name: 'T-shirt Enfant Senzala 78',
    description: 'T-shirt officiel pour enfants du Grupo Senzala 78. Parfait pour les jeunes capoeiristas, confortable et adapté aux mouvements de la capoeira.',
    price: 15.00,
    image: '/images/boutique/tenue_enfants_11.jpg',
    images: [
      '/images/boutique/tenue_enfants_11.jpg',
      '/images/boutique/tenue_enfants_10.jpg',
      '/images/boutique/tenue_enfants_09.jpg',
      '/images/boutique/tenue_enfants_08.jpg',
      '/images/boutique/tenue_enfants_07.jpg',
      '/images/boutique/tenue_enfants_06.jpg',
      '/images/boutique/tenue_enfants_05.jpg',
      '/images/boutique/tenue_enfants_04.jpg'
    ],
    category: 'Vêtements',
    orderLink: 'https://capoeira-senzala-78.assoconnect.com/collect/choice/93016-s-tenues-officielle-capoeira-senzala-78-tee-shirt-et-abada',
    details: {
      'Tailles': '4 ans, 6 ans, 8 ans, 10 ans, 12 ans, 14 ans',
      'Matière': 'Coton 100%',
      'Couleur': 'Blanc avec logo Senzala 78'
    }
  },
  {
    id: '6',
    name: 'Abadá Enfant Senzala 78',
    description: 'Pantalon abadá traditionnel pour enfants. Coupe adaptée aux jeunes pratiquants avec le confort nécessaire pour tous les mouvements de capoeira.',
    price: 30.00,
    image: '/images/boutique/tenue_ados_01.jpg',
    images: [
      '/images/boutique/tenue_ados_01.jpg',
      '/images/boutique/tenue_enfants_03.jpg',
      '/images/boutique/tenue_enfants_02.jpg',
      '/images/boutique/tenue_enfants_01.jpg'
    ],
    category: 'Vêtements',
    orderLink: 'https://capoeira-senzala-78.assoconnect.com/collect/choice/93016-s-tenues-officielle-capoeira-senzala-78-tee-shirt-et-abada',
    details: {
      'Tailles': '4 ans, 6 ans, 8 ans, 10 ans, 12 ans, 14 ans',
      'Matière': 'Coton résistant',
      'Couleur': 'Blanc avec logo Senzala 78'
    }
  },
  {
    id: '7',
    name: 'Berimbau',
    description: 'Berimbau traditionnel fabriqué au Brésil. Instrument principal de la capoeira, livré avec sa cabaça, sa baqueta et son dobrão. Son authentique et qualité professionnelle.',
    price: 120.00,
    image: '/images/boutique/berimbau-01.jpg',
    images: [
      '/images/boutique/berimbau-01.jpg',
      '/images/boutique/berimbau_02.jpg',
      '/images/boutique/berimbau_03.jpg'
    ],
    category: 'Instruments',
    orderLink: 'https://www.assoconnect.com/grupo-senzala-78/collect/description/401988-w-berimbau',
    details: {
      'Origine': 'Brésil',
      'Type': 'Médio',
      'Inclus': 'Verga, cabaça, arame, baqueta, dobrão'
    }
  },
  {
    id: '8',
    name: 'Pandeiro',
    description: 'Pandeiro brésilien de qualité professionnelle. Peau naturelle et platinelas en laiton pour un son authentique. Indispensable pour accompagner la roda de capoeira.',
    price: 85.00,
    image: '/images/boutique/pandeiro_01.jpg',
    images: [
      '/images/boutique/pandeiro_01.jpg',
      '/images/boutique/pandeiro_02.jpg',
      '/images/boutique/pandeiro_03.jpg'
    ],
    category: 'Instruments',
    orderLink: 'https://www.assoconnect.com/grupo-senzala-78/collect/description/401988-w-pandeiro',
    details: {
      'Diamètre': '10 pouces',
      'Peau': 'Naturelle',
      'Platinelas': 'Laiton'
    }
  }
];
