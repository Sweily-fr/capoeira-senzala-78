'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, X } from 'lucide-react';
import { useNotifications } from '@/context/NotificationContext';
import { cn } from '@/lib/utils';

const CALENDAR_ID = '68b536784cf96eb3474387cbdb125a7ee8a764ad0210db025411564dc8f379e8@group.calendar.google.com';

const buildCalendarUrl = (mode) => {
  const params = new URLSearchParams({
    src: CALENDAR_ID,
    ctz: 'Europe/Paris',
    hl: 'fr',
    mode,
    showTitle: '0',
    showPrint: '0',
    showCalendars: '0',
    showTz: '0',
  });
  return `https://calendar.google.com/calendar/embed?${params.toString()}`;
};

export default function EventsCalendar() {
  const { isVisible, isPanelOpen } = useNotifications();
  const [isOpen, setIsOpen] = useState(false);

  // Fermeture avec la touche Échap
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Modal calendrier */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            <div className="fixed inset-0 z-[61] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="w-full max-w-5xl max-h-[90vh] bg-dark-blue border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto"
              >
                <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <CalendarDays className="w-5 h-5 text-primary-500" />
                  </div>
                  <h3 className="flex-1 text-white font-semibold truncate">
                    Calendrier des événements
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Fermer le calendrier"
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                <div className="bg-white">
                  {/* Vue mois sur desktop, vue agenda (liste) sur mobile */}
                  <iframe
                    src={buildCalendarUrl('MONTH')}
                    title="Calendrier des événements Capoeira Senzala 78"
                    className="hidden h-[70vh] w-full border-0 md:block"
                  />
                  <iframe
                    src={buildCalendarUrl('AGENDA')}
                    title="Calendrier des événements Capoeira Senzala 78"
                    className="block h-[70vh] w-full border-0 md:hidden"
                  />
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Bouton flottant, au-dessus de la cloche des notifications */}
      <AnimatePresence>
        {!isPanelOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={() => setIsOpen(true)}
            aria-label="Voir le calendrier des événements"
            title="Calendrier des événements"
            className={cn(
              'fixed right-4 z-50 w-14 h-14 bg-dark-blue border border-primary-500/40 hover:bg-darker-blue rounded-full flex items-center justify-center shadow-lg shadow-black/30 transition-colors',
              isVisible ? 'bottom-[5.5rem]' : 'bottom-4'
            )}
          >
            <CalendarDays className="w-6 h-6 text-primary-500" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
