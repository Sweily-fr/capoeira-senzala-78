"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, ArrowLeft, Share2, Heart, Phone, Mail, Euro, Star, CheckCircle } from 'lucide-react';

// Sample events data (same as in EventsList)
const events = [
  {
    id: 1,
    title: "Batizado & Troca de Cordas 2024",
    description: "Cérémonie traditionnelle de graduation et célébration de la capoeira avec des mestres invités du Brésil.",
    fullDescription: "Notre événement annuel le plus important réunit la communauté capoeira pour célébrer les progressions et accueillir les nouveaux membres. Cette année, nous accueillons Mestre Camisa et Mestre Suassuna directement de Salvador, Bahia.",
    date: "2024-03-15",
    time: "10:00",
    endTime: "18:00",
    location: "Gymnase Municipal de Versailles",
    address: "12 Avenue de Paris, 78000 Versailles",
    category: "Cérémonie",
    price: "Gratuit",
    capacity: 200,
    registered: 145,
    image: "/images/favelas_capoeira_senzala.png",
    featured: true,
    tags: ["batizado", "graduation", "mestres", "communauté"],
    organizer: "Grupo Senzala 78",
    contact: {
      email: "contact@senzala78.fr",
      phone: "+33 1 23 45 67 89"
    },
    program: [
      { time: "10:00", activity: "Accueil et échauffement collectif" },
      { time: "10:30", activity: "Ateliers techniques avec les mestres" },
      { time: "12:30", activity: "Pause déjeuner (repas brésilien offert)" },
      { time: "14:00", activity: "Roda ouverte et démonstrations" },
      { time: "16:00", activity: "Cérémonie de graduation" },
      { time: "17:30", activity: "Roda finale et célébration" }
    ]
  },
  {
    id: 2,
    title: "Stage de Capoeira Angola",
    description: "Stage intensif de capoeira angola avec Mestre Cobra Mansa, focus sur les traditions et la philosophie ancestrale.",
    fullDescription: "Un weekend exceptionnel pour approfondir la capoeira angola traditionnelle. Mestre Cobra Mansa partagera son savoir sur les fondements historiques et spirituels de cet art.",
    date: "2024-02-20",
    time: "09:00",
    endTime: "17:00",
    location: "Dojo Senzala",
    address: "45 Rue de la République, 78000 Versailles",
    category: "Stage",
    price: "45€",
    capacity: 30,
    registered: 18,
    image: "/images/mico_capo_senzala.png",
    featured: false,
    tags: ["angola", "tradition", "mestre", "stage"],
    organizer: "Grupo Senzala 78",
    contact: {
      email: "stages@senzala78.fr",
      phone: "+33 1 23 45 67 89"
    },
    program: [
      { time: "09:00", activity: "Accueil et présentation" },
      { time: "09:30", activity: "Histoire de la Capoeira Angola" },
      { time: "11:00", activity: "Techniques de base et ginga" },
      { time: "14:00", activity: "Musicalité et chants traditionnels" },
      { time: "16:00", activity: "Roda finale" }
    ]
  }
];

export default function EventDetail({ eventId }) {
  const [isRegistered, setIsRegistered] = useState(false);
  const event = events.find(e => e.id === parseInt(eventId));

  if (!event) {
    return (
      <div className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Événement non trouvé</h2>
          <p className="text-gray-300 mb-8">L'événement que vous recherchez n'existe pas ou a été supprimé.</p>
          <Button asChild className="bg-yellow-500 text-black hover:bg-yellow-600">
            <Link href="/evenements">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux événements
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const getEventStatus = () => {
    const eventDate = new Date(event.date);
    const today = new Date();
    const daysUntil = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
    
    if (daysUntil < 0) return { text: "Terminé", color: "bg-gray-500" };
    if (daysUntil === 0) return { text: "Aujourd'hui", color: "bg-red-500" };
    if (daysUntil <= 7) return { text: "Cette semaine", color: "bg-orange-500" };
    return { text: "À venir", color: "bg-green-500" };
  };

  const getAvailabilityStatus = () => {
    if (!event.capacity) return null;
    const percentage = (event.registered / event.capacity) * 100;
    if (percentage >= 100) return { text: "Complet", color: "text-red-400", canRegister: false };
    if (percentage >= 80) return { text: "Presque complet", color: "text-orange-400", canRegister: true };
    return { text: "Places disponibles", color: "text-green-400", canRegister: true };
  };

  const status = getEventStatus();
  const availability = getAvailabilityStatus();

  const handleRegistration = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Back Button */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button asChild variant="ghost" className="text-white hover:bg-white/10">
            <Link href="/evenements">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux événements
            </Link>
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            
            {/* Event Header */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                  {status.text}
                </Badge>
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                  {event.category}
                </Badge>
                {event.featured && (
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                    <Star className="w-3 h-3 mr-1" />
                    Événement phare
                  </Badge>
                )}
                {event.tags.map((tag) => (
                  <Badge key={tag} className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                    #{tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {event.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                {event.description}
              </p>

              {/* Social Actions */}
              <div className="flex items-center gap-4 mb-8">
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  <Heart className="w-4 h-4 mr-2" />
                  Intéressé
                </Button>
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  <Share2 className="w-4 h-4 mr-2" />
                  Partager
                </Button>
              </div>
            </motion.div>

            {/* Event Image */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Event Description */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">À propos de cet événement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {event.fullDescription}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Program */}
            {event.program && (
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Programme de la journée</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {event.program.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                          <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 text-black font-bold rounded-lg">
                            {item.time}
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-medium">{item.activity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              className="sticky top-8 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              
              {/* Registration Card */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-yellow-400">{event.price}</CardTitle>
                    {availability && (
                      <span className={`text-sm ${availability.color}`}>
                        {availability.text}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {event.capacity && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Participants</span>
                      <span className="text-white">{event.registered}/{event.capacity}</span>
                    </div>
                  )}
                  
                  <Button 
                    onClick={handleRegistration}
                    className={`w-full ${
                      isRegistered 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-yellow-500 hover:bg-yellow-600'
                    } text-black font-medium`}
                    disabled={availability && !availability.canRegister}
                  >
                    {isRegistered ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Inscrit
                      </>
                    ) : availability && !availability.canRegister ? (
                      'Complet'
                    ) : (
                      'S\'inscrire'
                    )}
                  </Button>
                  
                  <p className="text-xs text-gray-400 text-center">
                    Inscription gratuite - Confirmation par email
                  </p>
                </CardContent>
              </Card>

              {/* Event Details */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Détails de l'événement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">
                        {new Date(event.date).toLocaleDateString('fr-FR', { 
                          weekday: 'long',
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {event.time} - {event.endTime}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">{event.location}</p>
                      <p className="text-gray-400 text-sm">{event.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">Organisé par</p>
                      <p className="text-gray-400 text-sm">{event.organizer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-yellow-400" />
                    <a href={`mailto:${event.contact.email}`} className="text-gray-300 hover:text-yellow-400 transition-colors">
                      {event.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-yellow-400" />
                    <a href={`tel:${event.contact.phone}`} className="text-gray-300 hover:text-yellow-400 transition-colors">
                      {event.contact.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
