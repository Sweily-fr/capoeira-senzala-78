"use client";
import React from 'react';
import { events } from '@/data/events';

const EventCard = ({ event }) => {
  return (
    <div className="flex-shrink-0 w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 rounded-xl overflow-hidden border border-white/10 bg-dark-blue/50 backdrop-blur-sm">
      <div className="relative w-full h-full">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-white text-xs font-medium line-clamp-2">{event.title}</p>
          <p className="text-white/60 text-xs mt-1">
            {new Date(event.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
          </p>
        </div>
      </div>
    </div>
  );
};

const ScrollingRow = ({ events: rowEvents, direction = 'left', speed = 30 }) => {
  const duplicatedEvents = [...rowEvents, ...rowEvents, ...rowEvents, ...rowEvents, ...rowEvents, ...rowEvents];
  
  return (
    <div className="flex overflow-hidden">
      <div 
        className="flex gap-4"
        style={{
          animation: direction === 'left' 
            ? `scrollLeft ${speed}s linear infinite`
            : `scrollRight ${speed}s linear infinite`,
        }}
      >
        {duplicatedEvents.map((event, index) => (
          <EventCard key={`${event.id}-${index}`} event={event} />
        ))}
        {duplicatedEvents.map((event, index) => (
          <EventCard key={`${event.id}-${index}-dup`} event={event} />
        ))}
      </div>
    </div>
  );
};

export default function EventsHeroBackground() {
  const row1Events = events.slice(0, 6);
  const row2Events = events.slice(3, 9);
  const row3Events = events.slice(0, 6).reverse();
  const row4Events = events.slice(2, 8);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute inset-0 flex flex-col justify-center gap-4 -rotate-12 scale-125 origin-center"
        style={{ transform: 'rotate(-12deg) scale(1.4) translateY(-5%)' }}
      >
        <ScrollingRow events={row1Events} direction="left" speed={320} />
        <ScrollingRow events={row2Events} direction="right" speed={280} />
        <ScrollingRow events={row3Events} direction="left" speed={360} />
        <ScrollingRow events={row4Events} direction="right" speed={300} />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/60" />
    </div>
  );
}
