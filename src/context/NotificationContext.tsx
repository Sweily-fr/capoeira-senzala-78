"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Email, mockEmails } from "@/data/mockEmails";

interface NotificationContextType {
  isVisible: boolean;
  isPanelOpen: boolean;
  emails: Email[];
  unreadCount: number;
  isLoading: boolean;
  setIsVisible: (visible: boolean) => void;
  setIsPanelOpen: (open: boolean) => void;
  togglePanel: () => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  openFromNavbar: () => void;
  refreshEmails: () => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [emails, setEmails] = useState<Email[]>([]);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const unreadCount = emails.filter((email) => !email.read).length;

  // Fonction pour récupérer les emails depuis l'API
  const fetchEmails = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/emails");
      const data = await response.json();

      if (data.emails && data.emails.length > 0) {
        // Convertir les timestamps en Date
        const emailsWithDates = data.emails.map((email: Email & { timestamp: string }) => ({
          ...email,
          timestamp: new Date(email.timestamp),
        }));
        setEmails(emailsWithDates);
      } else {
        // Fallback sur les données mock si l'API ne retourne rien
        setEmails(mockEmails);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des emails:", error);
      // Fallback sur les données mock en cas d'erreur
      setEmails(mockEmails);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Récupérer les emails au montage
  useEffect(() => {
    fetchEmails();
  }, [fetchEmails]);

  // Gestion du scroll pour afficher/masquer le composant
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Afficher seulement si scroll > 100px et n'a pas été fermé manuellement
      if (scrollY > 100 && !hasBeenDismissed) {
        setIsVisible(true);
      } else if (scrollY <= 100) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasBeenDismissed]);

  const handleSetIsVisible = useCallback((visible: boolean) => {
    setIsVisible(visible);
    if (!visible) {
      setHasBeenDismissed(true);
      setIsPanelOpen(false);
    }
  }, []);

  const togglePanel = useCallback(() => {
    setIsPanelOpen((prev) => !prev);
  }, []);

  const markAsRead = useCallback((id: string) => {
    setEmails((prev) =>
      prev.map((email) =>
        email.id === id ? { ...email, read: true } : email
      )
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setEmails((prev) => prev.map((email) => ({ ...email, read: true })));
  }, []);

  const openFromNavbar = useCallback(() => {
    setHasBeenDismissed(false);
    setIsVisible(true);
    setIsPanelOpen(true);
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        isVisible,
        isPanelOpen,
        emails,
        unreadCount,
        isLoading,
        setIsVisible: handleSetIsVisible,
        setIsPanelOpen,
        togglePanel,
        markAsRead,
        markAllAsRead,
        openFromNavbar,
        refreshEmails: fetchEmails,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useNotifications must be used within a NotificationProvider");
  }
  return context;
}
