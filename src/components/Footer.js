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
        { name: "contact@capoeirasenzala78.fr", href: "mailto:contact@capoeirasenzala78.fr" },
        { name: "06 24 85 12 99", href: "tel:+33624851299" }
      ]
    },
    {
      title: "Partenaire",
      links: [
        { name: "Uni Verde & Co", href: "https://www.helloasso.com/associations/uni-verde-and-co/adhesions/adhesion-uni-verde-and-co" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "https://www.facebook.com/capoeirasenzala78", label: "Facebook" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/capoeira_senzala_78/", label: "Instagram" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/c/capoeirasenzala78fr", label: "YouTube" }
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
        { name: "Mentions Légales", href: "/legal" }
      ]}
    />
  );
}
