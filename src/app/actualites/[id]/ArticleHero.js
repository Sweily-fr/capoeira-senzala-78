"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { cn } from "@/lib/utils";
import { useScroll } from "motion/react";
import { Menu as MenuIcon, X, Bell } from "lucide-react";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { articles } from "@/data/articles";

export default function ArticleHero({ articleId }) {
  const article = articles.find(a => a.id === parseInt(articleId));
  
  // Default values if article not found
  const title = article?.title || "Article";
  const excerpt = article?.excerpt || "Actualités du Grupo Senzala 78";
  const image = article?.image || "/images/header_01.jpg";
  const category = article?.category;
  const author = article?.author;
  const date = article?.date;
  const readTime = article?.readTime;

  return (
    <main className="overflow-x-hidden bg-dark-blue">
      <Navbar />
      <section className="relative pt-16 min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh]">
        <div className="absolute inset-0 overflow-hidden m-2 rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/5 lg:rounded-[3rem]">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover dark:opacity-35"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
          </div>
        </div>
        <div className="relative z-10 py-12 sm:py-16 md:pb-24 lg:pb-28 lg:pt-48">
          <div className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
              {/* Category Badge */}
              {category && (
                <Badge className="bg-primary-500 text-darker-blue hover:bg-primary-600 mb-4">
                  {category}
                </Badge>
              )}
              
              <h1 className="mt-2 max-w-3xl text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight">
                {title}
              </h1>
              <p className="mt-4 sm:mt-6 md:mt-8 max-w-2xl text-balance text-sm sm:text-base md:text-lg text-white/90 font-light px-2 sm:px-0">
                {excerpt}
              </p>

              {/* Article Meta */}
              {article && (
                <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-white/70 text-sm">
                  {author && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{author}</span>
                    </div>
                  )}
                  {date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(date).toLocaleDateString('fr-FR', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                  )}
                  {readTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{readTime} de lecture</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Cours et Tarifs", href: "/cours-tarifs" },
  {
    name: "À propos",
    submenu: [
      { name: "L'histoire du groupe", href: "/le-groupe-senzala-78" },
      { name: "La capoeira", href: "/la-capoeira" },
      { name: "Prestations professionnelles", href: "/prestations" },
      { name: "Nos partenaires", href: "/partenaires" },
      { name: "Actualités", href: "/actualites" },
      { name: "Événements à venir", href: "/evenements" },
    ],
  },
  { name: "Tenues & Instruments", href: "/achats" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
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
                      onMouseEnter={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center">
              <div className="hidden md:block mr-4">
                <Button
                  asChild
                  size="default"
                  className="bg-primary-500 text-darker-blue hover:bg-primary-600"
                >
                  <Link href="/cours-tarifs">S'inscrire à un cours</Link>
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
          <div className="flex-shrink-0 px-5 py-4 border-t border-white/10">
            <Button
              asChild
              size="lg"
              className="w-full bg-primary-500 text-darker-blue hover:bg-primary-400 font-semibold rounded-xl"
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

const Logo = ({ className }) => {
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
