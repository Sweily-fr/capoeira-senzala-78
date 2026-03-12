"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { cn } from "@/lib/utils";
import { ChevronRight, Bell } from "lucide-react";
import { useScroll, motion } from "motion/react";
import Image from "next/image";
import { Menu as MenuIcon, X } from "lucide-react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu";
import { usePathname } from "next/navigation";
import { useNotifications } from "@/context/NotificationContext";

export function HeroSection({
  title = "Escola do Grupo Senzala 78",
  subtitle = "A escola do Grupo Senzala 78 é uma escola de capoeira que promove a prática e a passagem da cultura capoeira para as gerações futuras.",
  showButtons = true,
  showPartners = true,
  heroImage = "/images/hero-section-img/home.jpg",
  customBackground = null,
  partnerLogos = []
}: {
  title?: string;
  subtitle?: string;
  showButtons?: boolean;
  showPartners?: boolean;
  heroImage?: string;
  customBackground?: React.ReactNode;
  partnerLogos?: { src: string; alt: string; filename?: string; invert?: boolean }[];
} = {}) {
  const heroRef = useRef<HTMLElement>(null);
  const [heroHeight, setHeroHeight] = useState<number | null>(null);

  useEffect(() => {
    // Lock the hero height on mount to prevent resize when mobile address bar hides
    if (heroRef.current) {
      setHeroHeight(heroRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <main
        ref={heroRef}
        className="overflow-x-hidden bg-dark-blue flex flex-col"
        style={{ minHeight: heroHeight ? `${heroHeight}px` : '100svh' }}
      >
        <Navbar />
        <section className="relative pt-16 flex-1 min-h-0 sm:min-h-[70vh] md:min-h-screen">
          <div className="absolute inset-0 overflow-hidden m-2 rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/5 lg:rounded-[3rem]">
            <div className="relative w-full h-full">
              {customBackground ? (
                customBackground
              ) : (
                <>
                  <Image
                    src={heroImage}
                    alt="Groupe Senzala 78"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />
                </>
              )}
            </div>
          </div>
          <div className="relative z-10 py-12 sm:py-16 md:pb-24 lg:pb-28 lg:pt-48">
            <div className="mx-auto flex max-w-7xl flex-col px-7 sm:px-6 lg:block lg:px-12">
              <div className="max-w-lg text-left lg:ml-0 lg:max-w-full">
                <motion.h1
                  className="mt-6 sm:mt-8 max-w-2xl text-balance text-4xl sm:text-4xl md:text-5xl lg:text-6xl lg:mt-16 xl:text-7xl text-white font-semibold leading-tight drop-shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {title}
                </motion.h1>
                <motion.p
                  className="mt-4 sm:mt-6 md:mt-8 max-w-2xl text-balance text-sm sm:text-base md:text-lg text-white/90 font-light drop-shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  {subtitle}
                </motion.p>

                {showButtons && (
                  <motion.div
                    className="hidden sm:flex mt-8 md:mt-12 flex-row items-center gap-4 lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="h-11 sm:h-13 rounded-full pl-5 sm:pl-6 pr-3 sm:pr-4 text-darker-blue font-semibold bg-primary-500 hover:bg-primary-400 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base w-auto cursor-pointer"
                    >
                      <Link href="/cours-tarifs">
                        <span className="text-nowrap">Découvrir nos cours</span>
                        <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="h-11 sm:h-13 rounded-full px-5 sm:px-6 text-white border-2 border-primary-500/40 hover:border-primary-500 hover:bg-primary-500/10 backdrop-blur-sm transition-all duration-200 text-sm sm:text-base w-auto cursor-pointer"
                    >
                      <Link href="/cours-tarifs">
                        <span className="text-nowrap">Où pratiquer ?</span>
                      </Link>
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Boutons mobile — positionnés en bas de la section */}
          {showButtons && (
            <motion.div
              className="sm:hidden absolute bottom-6 left-0 right-0 z-10 px-7 flex flex-col items-stretch gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button
                asChild
                size="lg"
                className="h-11 rounded-full pl-5 pr-3 text-darker-blue font-semibold bg-primary-500 hover:bg-primary-400 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-200 text-sm w-full cursor-pointer"
              >
                <Link href="/cours-tarifs">
                  <span className="text-nowrap">Découvrir nos cours</span>
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 rounded-full px-5 text-white border-2 border-primary-500/40 hover:border-primary-500 hover:bg-primary-500/10 backdrop-blur-sm transition-all duration-200 text-sm w-full cursor-pointer"
              >
                <Link href="/cours-tarifs">
                  <span className="text-nowrap">Où pratiquer ?</span>
                </Link>
              </Button>
            </motion.div>
          )}
        </section>
        {showPartners && (
        <section className="bg-dark-blue pb-2 relative z-10">
          <div className="group relative mx-auto max-w-7xl px-7 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6 mb-4 md:mb-0 shrink-0">
                <p className="text-center md:text-end text-xs sm:text-sm text-white">Nos partenaires</p>
              </div>
              <div className="relative py-4 sm:py-6 w-full md:flex-1 overflow-hidden">
                <InfiniteSlider durationOnHover={20} duration={40} gap={56}>
                  {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                    <div key={i} className="flex shrink-0 items-center">
                      <img
                        className={`mx-auto h-6 sm:h-8 w-auto max-w-[100px] sm:max-w-none object-contain rounded ${logo.invert ? "invert" : ""}`}
                        src={logo.src}
                        alt={logo.alt}
                        height="32"
                        width="auto"
                      />
                    </div>
                  ))}
                </InfiniteSlider>

                <div className="bg-linear-to-r from-dark-blue absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-dark-blue absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
        )}
      </main>
    </>
  );
}

const navItems = [
  { name: "Accueil", href: "/" },

  { name: "Cours et Tarifs", href: "/cours-tarifs" },
  { name: "Événements à venir", href: "/evenements" },
  { name: "Tenues & Instruments", href: "/achats" },
  {
    name: "À propos",
    submenu: [
      { name: "L'histoire du groupe", href: "/le-groupe-senzala-78" },
      // { name: "La capoeira", href: "/la-capoeira" },
      { name: "Préstations Pro/Scolaire", href: "/prestations" },
      { name: "Nos partenaires", href: "/partenaires" },
      { name: "Actualités", href: "/actualites" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const { unreadCount, openFromNavbar } = useNotifications();

  React.useEffect(() => {
    // Activer l'effet de flou dès le début du défilement
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    // Vérifier aussi au chargement initial
    handleScroll();

    // Écouter le défilement de la page
    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled ? "backdrop-blur-lg bg-black/30 py-1 sm:py-1" : "py-3 sm:py-2"
      )}
    >
      <div className="max-w-7xl mx-auto px-7 sm:px-6 lg:px-8 py-0">
        <Menu setActive={setActive}>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <Link href="/" className="flex items-center mr-4 sm:mr-6 md:mr-8">
                <Logo />
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => {
                  if (item.submenu) {
                    return (
                      <MenuItem
                        key={item.name}
                        setActive={setActive}
                        active={active}
                        item={item.name}
                      >
                        <div className="grid grid-cols-1 gap-2">
                          {item.submenu.map((subItem) => (
                            <div key={subItem.name} className="hover:bg-primary-500 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02] group">
                              <HoveredLink
                                href={subItem.href}
                                className={`w-full h-full block transition-colors duration-200 ${
                                  pathname === subItem.href 
                                    ? 'text-primary-500 font-semibold' 
                                    : 'group-hover:text-white'
                                }`}
                              >
                                {subItem.name}
                              </HoveredLink>
                            </div>
                          ))}
                        </div>
                      </MenuItem>
                    );
                  }
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`font-normal text-sm transition-colors duration-200 ${
                        pathname === item.href 
                          ? 'text-primary-500' 
                          : 'text-white hover:text-primary-500'
                      }`}
                      onMouseEnter={() => setActive(null)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center">
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={openFromNavbar}
                  className="relative p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <Bell className="w-5 h-5 text-white flex-shrink-0" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                      {unreadCount > 9 ? "9+" : unreadCount}
                    </span>
                  )}
                </button>
                <Button
                  asChild
                  size="default"
                  className="bg-primary-500 text-white hover:bg-primary-600"
                >
                  <Link href="/cours-tarifs">
                    S'inscrire à un cours
                  </Link>
                </Button>
              </div>

              <div className="md:hidden">
                <MenuIcon
                  className="h-6 w-6 cursor-pointer text-white"
                  onClick={() => setMobileOpen(true)}
                />
              </div>
            </div>
          </div>
        </Menu>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-dark-blue flex flex-col h-[100dvh]">
          {/* Header with logo and close */}
          <div className="flex-shrink-0 flex items-center justify-between px-5 py-4 border-b border-white/10">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Logo />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.submenu ? (
                    <div className="mt-3 mb-1">
                      <span className="block px-3 pb-2 text-xs font-semibold text-white/40 uppercase tracking-widest">
                        {item.name}
                      </span>
                      <ul className="space-y-0.5 pl-2 border-l border-white/10 ml-3">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href}
                              onClick={() => setMobileOpen(false)}
                              className={`block px-3 py-2.5 rounded-lg text-[15px] transition-colors duration-200 ${
                                pathname === subItem.href
                                  ? 'bg-primary-500/15 text-primary-500 font-medium'
                                  : 'text-white/70 hover:bg-white/5 hover:text-white'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-3 rounded-lg text-[15px] font-medium transition-colors duration-200 ${
                        pathname === item.href
                          ? 'bg-primary-500/15 text-primary-500'
                          : 'text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom actions */}
          <div className="flex-shrink-0 px-5 py-4 border-t border-white/10 flex items-center gap-3">
            <button
              onClick={() => {
                openFromNavbar();
                setMobileOpen(false);
              }}
              className="relative p-2.5 hover:bg-white/10 rounded-full transition-colors border border-white/10"
            >
              <Bell className="w-5 h-5 text-white flex-shrink-0" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
            </button>
            <Button
              asChild
              size="lg"
              className="flex-1 bg-primary-500 text-darker-blue hover:bg-primary-400 font-semibold rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              <Link href="/cours-tarifs">
                S'inscrire
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/images/logo-capoeirasenzala1.png"
      alt="Logo Capoeira Senzala"
      width={180}
      height={45}
      className={cn("h-8 sm:h-10 md:h-12 w-auto", className)}
    />
  );
};
