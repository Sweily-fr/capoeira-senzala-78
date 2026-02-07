"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, X, Mail, Check, ChevronRight, ArrowLeft, Loader2 } from "lucide-react";
import { useNotifications } from "@/context/NotificationContext";
import { Email, formatRelativeTime } from "@/data/mockEmails";
import { cn } from "@/lib/utils";

export function FloatingNotifications() {
  const {
    isVisible,
    isPanelOpen,
    emails,
    unreadCount,
    isLoading,
    setIsVisible,
    togglePanel,
    markAsRead,
    markAllAsRead,
  } = useNotifications();

  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  const handleEmailClick = (email: Email) => {
    markAsRead(email.id);
    setSelectedEmail(email);
  };

  const handleCloseModal = () => {
    setSelectedEmail(null);
  };

  return (
    <>
      {/* Modal Email */}
      <AnimatePresence>
        {selectedEmail && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            {/* Modal Container - pour centrer */}
            <div className="fixed inset-0 z-[61] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="w-full max-w-lg max-h-[80vh] bg-dark-blue border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto"
              >
              {/* Header */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10 flex-shrink-0">
                <button
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold truncate">
                    {selectedEmail.subject}
                  </h3>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Email info */}
              <div className="px-4 py-4 border-b border-white/10 flex-shrink-0">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-white font-medium">
                        {selectedEmail.from}
                      </span>
                      <span className="text-xs text-white/50">
                        {formatRelativeTime(selectedEmail.timestamp)}
                      </span>
                    </div>
                    <p className="text-sm text-white/60 mt-0.5">
                      {selectedEmail.fromEmail}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email content */}
              <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap">
                  {selectedEmail.content || selectedEmail.preview}
                </div>
              </div>

            </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Floating notifications */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3"
          >
            {/* Panneau des notifications */}
            <AnimatePresence>
              {isPanelOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="w-80 sm:w-96 bg-dark-blue/95 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                    <h3 className="text-white font-semibold text-sm">
                      Notifications
                    </h3>
                    <div className="flex items-center gap-2">
                      {unreadCount > 0 && (
                        <button
                          onClick={markAllAsRead}
                          className="text-xs text-primary-500 hover:text-primary-400 transition-colors flex items-center gap-1"
                        >
                          <Check className="w-3 h-3" />
                          Tout lu
                        </button>
                      )}
                      <button
                        onClick={() => setIsVisible(false)}
                        className="text-white/60 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Liste des emails */}
                  <div className="max-h-[400px] overflow-y-auto">
                    {isLoading ? (
                      <div className="flex items-center justify-center py-8">
                        <Loader2 className="w-6 h-6 text-primary-500 animate-spin" />
                        <span className="ml-2 text-white/60 text-sm">Chargement...</span>
                      </div>
                    ) : emails.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-8 text-white/60">
                        <Mail className="w-8 h-8 mb-2" />
                        <span className="text-sm">Aucune notification</span>
                      </div>
                    ) : emails.map((email, index) => (
                      <motion.div
                        key={email.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleEmailClick(email)}
                        className={cn(
                          "px-4 py-3 border-b border-white/5 cursor-pointer transition-colors hover:bg-white/5",
                          !email.read && "bg-primary-500/5"
                        )}
                      >
                        <div className="flex gap-3">
                          {/* Avatar / Icône */}
                          <div
                            className={cn(
                              "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                              email.read
                                ? "bg-white/10"
                                : "bg-primary-500/20"
                            )}
                          >
                            <Mail
                              className={cn(
                                "w-5 h-5",
                                email.read
                                  ? "text-white/60"
                                  : "text-primary-500"
                              )}
                            />
                          </div>

                          {/* Contenu */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span
                                className={cn(
                                  "text-sm truncate",
                                  email.read
                                    ? "text-white/70"
                                    : "text-white font-medium"
                                )}
                              >
                                {email.from}
                              </span>
                              <span className="text-xs text-white/50 flex-shrink-0">
                                {formatRelativeTime(email.timestamp)}
                              </span>
                            </div>
                            <p
                              className={cn(
                                "text-sm truncate mt-0.5",
                                email.read
                                  ? "text-white/50"
                                  : "text-white/80"
                              )}
                            >
                              {email.subject}
                            </p>
                            <p className="text-xs text-white/40 truncate mt-1">
                              {email.preview}
                            </p>
                          </div>

                          {/* Indicateur non lu */}
                          {!email.read && (
                            <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 mt-2" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="px-4 py-3 border-t border-white/10">
                    <button className="w-full text-center text-sm text-primary-500 hover:text-primary-400 transition-colors flex items-center justify-center gap-1">
                      Voir toutes les notifications
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bouton flottant */}
            <div className="relative">
              {/* Bouton X pour fermer */}
              <AnimatePresence>
                {!isPanelOpen && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    onClick={() => setIsVisible(false)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-colors z-10"
                  >
                    <X className="w-3 h-3 text-white" />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Bouton principal */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePanel}
                className="w-14 h-14 bg-primary-500 hover:bg-primary-400 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30 transition-colors"
              >
                <Bell className="w-6 h-6 text-darker-blue" />
              </motion.button>

              {/* Badge compteur */}
              {unreadCount > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -left-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
                >
                  <span className="text-xs text-white font-bold">
                    {unreadCount > 9 ? "9+" : unreadCount}
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
