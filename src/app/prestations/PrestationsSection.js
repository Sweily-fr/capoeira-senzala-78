"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, GraduationCap, Calendar, Users, Star, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, School } from 'lucide-react';

// Services scolaires
const servicesScolaires = [
  {
    id: 1,
    title: "Interventions en Écoles Primaires",
    description: "Programmes éducatifs adaptés aux enfants de 6 à 11 ans",
    fullDescription: "Nos interventions en école primaire sont conçues pour éveiller la curiosité des enfants à travers la découverte de la capoeira. Alliant sport, musique et culture brésilienne, nos séances développent la motricité, la coordination et l'esprit d'équipe.",
    icon: GraduationCap,
    category: "Primaire",
    duration: "1-2 heures",
    participants: "15-30 élèves",
    features: [
      "Cours adaptés à l'âge",
      "Jeux et activités ludiques",
      "Initiation aux instruments",
      "Découverte culturelle du Brésil",
      "Support pédagogique fourni"
    ],
    image: "/images/favelas_capoeira_senzala.png",
    popular: true
  },
  {
    id: 2,
    title: "Interventions en Collèges et Lycées",
    description: "Programmes pour adolescents avec approche sportive et culturelle",
    fullDescription: "Pour les collégiens et lycéens, nous proposons des séances plus dynamiques axées sur la pratique sportive tout en abordant l'histoire et la philosophie de la capoeira. Un excellent moyen de canaliser l'énergie et développer la confiance en soi.",
    icon: School,
    category: "Secondaire",
    duration: "1-2 heures",
    participants: "15-35 élèves",
    features: [
      "Approche sportive complète",
      "Histoire et philosophie",
      "Travail en groupe",
      "Développement personnel",
      "Préparation possible au spectacle"
    ],
    image: "/images/hero-2.jpg",
    popular: false
  },
  {
    id: 3,
    title: "Projets Pédagogiques Annuels",
    description: "Accompagnement sur l'année scolaire avec projet de fin d'année",
    fullDescription: "Nous accompagnons les établissements sur des projets à l'année incluant des séances régulières et la préparation d'un spectacle de fin d'année. Une immersion complète dans l'univers de la capoeira pour les élèves.",
    icon: Calendar,
    category: "Projet annuel",
    duration: "Année scolaire",
    participants: "Variable",
    features: [
      "Séances hebdomadaires",
      "Progression pédagogique",
      "Spectacle de fin d'année",
      "Costumes et accessoires",
      "Coordination avec l'équipe éducative"
    ],
    image: "/images/mico_capo_senzala.png",
    popular: false
  }
];

// Services professionnels
const servicesPro = [
  {
    id: 4,
    title: "Animations d'Entreprise",
    description: "Team building et animations pour vos événements d'entreprise",
    fullDescription: "Renforcez vos équipes avec nos animations de capoeira. Favorisez l'esprit d'équipe à travers des exercices ludiques et démonstrations spectaculaires.",
    icon: Building2,
    category: "Entreprise",
    duration: "2-4 heures",
    participants: "10-50 personnes",
    features: [
      "Démonstration de capoeira",
      "Initiation aux mouvements de base",
      "Exercices de team building",
      "Animation musicale",
      "Matériel fourni"
    ],
    image: "/images/hero-2.jpg",
    popular: true
  },
  {
    id: 5,
    title: "Spectacles & Démonstrations",
    description: "Performances artistiques pour vos événements publics",
    fullDescription: "Nos spectacles de capoeira captivent le public par leur dynamisme et leur authenticité. Adaptés à tous types d'événements, ils mettent en valeur la richesse culturelle brésilienne avec des performances de haute qualité.",
    icon: Star,
    category: "Spectacle",
    duration: "30-60 minutes",
    participants: "3-8 artistes",
    features: [
      "Spectacle chorégraphié",
      "Musiciens live",
      "Costumes traditionnels",
      "Interaction avec le public",
      "Son et éclairage"
    ],
    image: "/images/mico_capo_senzala.png",
    popular: false
  },
  {
    id: 6,
    title: "Événements Privés",
    description: "Animations pour mariages, anniversaires et célébrations",
    fullDescription: "Ajoutez une touche d'originalité à vos événements privés avec nos animations de capoeira. Nous créons des moments mémorables qui marquent vos invités par leur authenticité et leur convivialité.",
    icon: Calendar,
    category: "Privé",
    duration: "1-3 heures",
    participants: "Variable",
    features: [
      "Animation personnalisée",
      "Initiation pour invités",
      "Musique live",
      "Photos souvenirs",
      "Ambiance festive"
    ],
    image: "/images/bg-hero.png",
    popular: false
  }
];


export default function PrestationsSection() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('scolaire');

  const currentServices = activeTab === 'scolaire' ? servicesScolaires : servicesPro;

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl lg:text-5xl font-semibold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nos Prestations
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Découvrez nos prestations adaptées aux établissements scolaires et aux professionnels.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex bg-white/5 rounded-lg p-1 w-full max-w-md">
            <button
              onClick={() => setActiveTab('scolaire')}
              className={`flex-1 px-4 md:px-8 py-3 rounded-md font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'scolaire'
                  ? 'bg-primary-500 text-dark-blue'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              Scolaire
            </button>
            <button
              onClick={() => setActiveTab('pro')}
              className={`flex-1 px-4 md:px-8 py-3 rounded-md font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'pro'
                  ? 'bg-primary-500 text-dark-blue'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Building2 className="w-5 h-5" />
              Professionnel
            </button>
          </div>
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {currentServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group h-full relative">
                    {service.popular && (
                      <Badge className="absolute -top-3 left-6 bg-primary-500/20 text-primary-500 hover:bg-primary-500/30 border border-primary-500/30 z-10">
                        <Star className="w-3 h-3 mr-1" />
                        Populaire
                      </Badge>
                    )}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40">
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-primary-500/20 text-primary-500 hover:bg-primary-500/30 border border-primary-500/30">
                          {service.category}
                        </Badge>
                        <span className="text-gray-400 text-sm">{service.duration}</span>
                      </div>
                      <CardTitle className="text-xl text-white mb-3">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 mb-4">
                        {service.description}
                      </CardDescription>
                      <div className="flex items-center mb-4">
                        <span className="text-gray-400 text-sm">{service.participants}</span>
                      </div>
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button
                        onClick={() => setSelectedService(service)}
                        className="w-full bg-primary-500 text-darker-blue hover:bg-primary-600"
                      >
                        En savoir plus
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>


        {/* Contact CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Card className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 border-primary-500/20 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-semibold text-white mb-4">
                Prêt à organiser votre événement ?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Contactez-nous pour discuter de votre projet et recevoir un devis adapté à vos besoins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary-500 text-darker-blue hover:bg-primary-600">
                  <Phone className="w-4 h-4 mr-2" />
                  Nous appeler
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Mail className="w-4 h-4 mr-2" />
                  Demander un devis
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Réponse sous 24h
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Île-de-France et régions
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  15 ans d'expérience
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="bg-dark-blue border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl text-white">{selectedService.title}</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-300 mb-6">{selectedService.fullDescription}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-white font-medium mb-2">Durée</h4>
                  <p className="text-gray-300">{selectedService.duration}</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Participants</h4>
                  <p className="text-gray-300">{selectedService.participants}</p>
                </div>
              </div>
              
              <h4 className="text-white font-medium mb-3">Inclus dans la prestation :</h4>
              <div className="space-y-2 mb-6">
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end">
                <Button className="bg-primary-500 text-darker-blue hover:bg-primary-600">
                  Demander un devis
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
