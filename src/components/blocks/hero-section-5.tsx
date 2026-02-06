"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { cn } from "@/lib/utils";
import { ChevronRight, Bell } from "lucide-react";
import { useScroll, motion } from "motion/react";
import Image from "next/image";
import { Menu as MenuIcon } from "lucide-react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu";
import { usePathname } from "next/navigation";
import { useNotifications } from "@/context/NotificationContext";

export function HeroSection({ 
  title = "Escola do Grupo Senzala 78", 
  subtitle = "A escola do Grupo Senzala 78 é uma escola de capoeira que promove a prática e a passagem da cultura capoeira para as gerações futuras.",
  showButtons = true,
  showPartners = true,
  heroImage = "/images/hero-section-img/home.jpg",
  customBackground = null
}: {
  title?: string;
  subtitle?: string;
  showButtons?: boolean;
  showPartners?: boolean;
  heroImage?: string;
  customBackground?: React.ReactNode;
} = {}) {
  return (
    <>
      <main className="overflow-x-hidden bg-dark-blue">
        <Navbar />
        <section className="relative pt-16 min-h-[60vh] sm:min-h-[70vh] md:min-h-screen">
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
            <div className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:block lg:px-12">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                <motion.h1
                  className="mt-6 sm:mt-8 max-w-2xl text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:mt-16 xl:text-7xl text-white font-semibold leading-tight drop-shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {title}
                </motion.h1>
                <motion.p 
                  className="mt-4 sm:mt-6 md:mt-8 max-w-2xl text-balance text-sm sm:text-base md:text-lg text-white/90 font-light px-2 sm:px-0 drop-shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  {subtitle}
                </motion.p>

                {showButtons && (
                  <motion.div 
                    className="mt-6 sm:mt-8 md:mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                  <Button
                    asChild
                    size="lg"
                    className="h-11 sm:h-13 rounded-full pl-5 sm:pl-6 pr-3 sm:pr-4 text-darker-blue font-semibold bg-primary-500 hover:bg-primary-400 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base w-full sm:w-auto cursor-pointer"
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
                    className="h-11 sm:h-13 rounded-full px-5 sm:px-6 text-white border-2 border-primary-500/40 hover:border-primary-500 hover:bg-primary-500/10 backdrop-blur-sm transition-all duration-200 text-sm sm:text-base w-full sm:w-auto cursor-pointer"
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
        </section>
        {showPartners && (
        <section className="bg-background pb-2 relative z-10">
          <div className="group relative m-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6 mb-4 md:mb-0">
                <p className="text-center md:text-end text-xs sm:text-sm text-white">Nos partenaires</p>
              </div>
              <div className="relative py-4 sm:py-6 w-full md:w-[calc(100%-11rem)]">
                <InfiniteSlider durationOnHover={20} duration={40} gap={112}>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit invert dark:invert"
                      src="https://html.tailus.io/blocks/customers/nvidia.svg"
                      alt="Nvidia Logo"
                      height="20"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit invert dark:invert"
                      src="https://html.tailus.io/blocks/customers/column.svg"
                      alt="Column Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit invert dark:invert"
                      src="https://html.tailus.io/blocks/customers/github.svg"
                      alt="GitHub Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit invert dark:invert"
                      src="https://html.tailus.io/blocks/customers/nike.svg"
                      alt="Nike Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit invert dark:invert"
                      src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                      alt="Lemon Squeezy Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit invert dark:invert"
                      src="https://html.tailus.io/blocks/customers/laravel.svg"
                      alt="Laravel Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit invert dark:invert"
                      src="https://html.tailus.io/blocks/customers/lilly.svg"
                      alt="Lilly Logo"
                      height="28"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-6 w-fit invert dark:invert"
                      src="https://html.tailus.io/blocks/customers/openai.svg"
                      alt="OpenAI Logo"
                      height="24"
                      width="auto"
                    />
                  </div>
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
        scrolled ? "backdrop-blur-lg bg-black/30 py-1" : "py-2"
      )}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-0">
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
              <div className="hidden md:flex items-center gap-3 mr-4">
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
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => setActive(active ? null : "Menu")}
                />
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {active === "Menu" && (
            <div className="md:hidden mt-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div className="mb-2">
                      <div className="px-4 py-2 font-normal text-white">
                        {item.name}
                      </div>
                      <div className="ml-4 mt-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <div key={subItem.name} className="px-4 py-2 hover:bg-gray-200/50 dark:hover:bg-gray-700/70 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02] group">
                            <HoveredLink
                              href={subItem.href}
                              className="w-full h-full block group-hover:text-primary-500 transition-colors duration-200"
                              onClick={() => setActive(null)}
                            >
                              {subItem.name}
                            </HoveredLink>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <HoveredLink
                      href={item.href}
                      className="block px-4 py-2 hover:bg-gray-100/30 dark:hover:bg-gray-800/30 hover:text-primary-500 rounded-lg transition-all duration-200"
                      onClick={() => setActive(null)}
                    >
                      {item.name}
                    </HoveredLink>
                  )}
                </div>
              ))}
              <div className="w-full mt-2 md:hidden flex items-center gap-3 px-4 py-2">
                <button
                  onClick={() => {
                    openFromNavbar();
                    setActive(null);
                  }}
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
                  size="sm"
                  className="flex-1 bg-primary-500 text-white hover:bg-primary-600"
                  onClick={() => setActive(null)}
                >
                  <Link href="/cours-tarifs">
                    S'inscrire
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </Menu>
      </div>
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
