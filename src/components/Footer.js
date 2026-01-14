'use client';

import { Footer7 } from '@/components/ui/footer-7';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const sections = [
    {
      title: "Liens Rapides",
      links: [
        { name: "Accueil", href: "/" },
        { name: "À propos", href: "/about" },
        { name: "Cours", href: "/classes" },
        { name: "Événements", href: "/events" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "123 Rue de la Capoeira, 78000 Versailles, France" },
        { name: "contact@capoeirasenzala78.fr", href: "mailto:contact@capoeirasenzala78.fr" },
        { name: "+33 1 23 45 67 89", href: "tel:+33123456789" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "#", label: "Facebook" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaYoutube />, href: "#", label: "YouTube" }
  ];

  return (
    <Footer7 
      logo={{
        url: "/",
        src: "/images/logo-white.svg", // Update with your logo path
        alt: "Capoeira Senzala 78",
        title: "Capoeira Senzala 78"
      }}
      sections={sections}
      description="École de capoeira authentique, transmettant l'art, la culture et la philosophie de la capoeira brésilienne."
      socialLinks={socialLinks}
      copyright={`© ${new Date().getFullYear()} Capoeira Senzala 78. Tous droits réservés.`}
      legalLinks={[
        { name: "Mentions Légales", href: "/legal" },
        { name: "Politique de Confidentialité", href: "/privacy" },
        { name: "CGU", href: "/terms" }
      ]}
    />
  );
}
