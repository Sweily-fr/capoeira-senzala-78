"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, Star, ArrowRight, Filter } from 'lucide-react';
import { events, eventCategories as categories } from '@/data/events';

export default function EventsList() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [showPastEvents, setShowPastEvents] = useState(true);

  const today = new Date();
  const filteredEvents = events
    .filter(event => {
      const categoryMatch = selectedCategory === "Tous" || event.category === selectedCategory;
      return categoryMatch;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const isPastEvent = (event) => {
    const eventDate = new Date(event.date);
    return eventDate < today;
  };

  const featuredEvent = events.find(event => event.featured);
  const regularEvents = filteredEvents.filter(event => !event.featured);

  const getEventStatus = (event) => {
    const eventDate = new Date(event.date);
    const today = new Date();
    const daysUntil = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
    
    if (daysUntil < 0) return { text: "Terminé", color: "bg-gray-500" };
    if (daysUntil === 0) return { text: "Aujourd'hui", color: "bg-red-500" };
    if (daysUntil <= 7) return { text: "Cette semaine", color: "bg-orange-500" };
    if (daysUntil <= 30) return { text: "Ce mois-ci", color: "bg-yellow-500" };
    return { text: "À venir", color: "bg-green-500" };
  };

  const getAvailabilityStatus = (event) => {
    if (!event.capacity) return null;
    const percentage = (event.registered / event.capacity) * 100;
    if (percentage >= 100) return { text: "Complet", color: "text-red-400" };
    if (percentage >= 80) return { text: "Presque complet", color: "text-orange-400" };
    return { text: "Places disponibles", color: "text-green-400" };
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Événements à venir
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Rejoignez-nous pour nos prochains événements, stages et célébrations de la capoeira.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Event */}
        {featuredEvent && selectedCategory === "Tous" && !isPastEvent(featuredEvent) && (
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                      <Star className="w-3 h-3 mr-1" />
                      Événement phare
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                      {getEventStatus(featuredEvent).text}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                      {featuredEvent.category}
                    </Badge>
                    <div className="flex items-center text-gray-400 text-sm gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredEvent.date).toLocaleDateString('fr-FR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredEvent.time}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-white mb-4">
                    {featuredEvent.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base mb-4">
                    {featuredEvent.description}
                  </CardDescription>
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {featuredEvent.location}
                    </div>
                    {featuredEvent.capacity && (
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {featuredEvent.registered}/{featuredEvent.capacity}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-yellow-400">
                      {featuredEvent.price}
                    </div>
                    <Button asChild className="bg-yellow-500 text-white hover:bg-yellow-600">
                      <a href={featuredEvent.externalLink} target="_blank" rel="noopener noreferrer">
                        S'inscrire
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Events Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {regularEvents.map((event, index) => {
            const status = getEventStatus(event);
            const availability = getAvailabilityStatus(event);
            const past = isPastEvent(event);
            
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-transparent"
              >
                {event.externalLink && !past ? (
                <a href={event.externalLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 group cursor-pointer">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                      {event.category}
                    </Badge>
                    <Badge className={`${status.color} text-white`}>
                      {status.text}
                    </Badge>
                  </div>
                  
                  {/* Default Content (visible) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-opacity duration-300 group-hover:opacity-0">
                    <CardTitle className="text-xl text-white mb-3 line-clamp-2">
                      {event.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center text-white/80 text-sm gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString('fr-FR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Content (all details) */}
                  <div className="absolute inset-0 bg-black/95 pt-16 px-6 pb-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
                    <div>
                      <CardTitle className="text-xl text-white mb-3">
                        {event.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {event.description}
                      </CardDescription>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-white/80">
                          <Calendar className="w-4 h-4 text-yellow-400" />
                          {new Date(event.date).toLocaleDateString('fr-FR')} à {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-white/80">
                          <MapPin className="w-4 h-4 text-yellow-400" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 text-white/80">
                          <Users className="w-4 h-4 text-yellow-400" />
                          {event.capacity ? `${event.registered}/${event.capacity} inscrits` : 'Ouvert à tous'}
                          {availability && (
                            <span className={`ml-2 ${availability.color}`}>
                              ({availability.text})
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/10 space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Organisateur</span>
                        <span className="text-white">{event.organizer}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-xl font-bold text-yellow-400">
                          {event.price}
                        </div>
                        <Button asChild size="sm" className="bg-yellow-500 text-white hover:bg-yellow-600">
                          <a href={event.externalLink} target="_blank" rel="noopener noreferrer">
                            S'inscrire
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                </a>
                ) : (
                <div className={`relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 ${past ? 'grayscale opacity-50 cursor-not-allowed' : 'group'}`}>
                  <div className="absolute inset-0">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    <Badge className={past ? "bg-gray-400 text-gray-700" : "bg-yellow-100 text-yellow-800"}>{event.category}</Badge>
                    <Badge className={`${status.color} text-white`}>{status.text}</Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <CardTitle className="text-xl text-white mb-3">{event.title}</CardTitle>
                    <div className="flex flex-wrap items-center text-white/80 text-sm gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString('fr-FR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Aucun événement trouvé
            </h3>
            <p className="text-gray-300 mb-8">
              Il n'y a pas d'événements dans cette catégorie pour le moment.
            </p>
            <Button 
              onClick={() => {
                setSelectedCategory("Tous");
                setShowPastEvents(false);
              }}
              className="bg-yellow-500 text-black hover:bg-yellow-600"
            >
              Voir tous les événements
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
