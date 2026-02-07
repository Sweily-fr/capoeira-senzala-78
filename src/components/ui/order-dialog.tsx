'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./dialog";
import { Button } from "./button";
import { X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Label } from "./label";

interface OrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOrderSubmit: (data: { ville: string; professeur: string }) => void;
  villes: Array<{
    id: string;
    nom: string;
    professeurs: string[];
  }>;
}

export function OrderDialog({ open, onOpenChange, onOrderSubmit, villes }: OrderDialogProps) {
  const [selectedVille, setSelectedVille] = useState("");
  const [selectedProfesseur, setSelectedProfesseur] = useState("");
  const [professeurs, setProfesseurs] = useState<string[]>([]);

  const handleVilleChange = (value: string) => {
    setSelectedVille(value);
    setSelectedProfesseur("");
    const ville = villes.find(v => v.id === value);
    setProfesseurs(ville?.professeurs || []);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedVille && selectedProfesseur) {
      onOrderSubmit({
        ville: villes.find(v => v.id === selectedVille)?.nom || '',
        professeur: selectedProfesseur
      });
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gray-900 text-white border-0 p-0 flex flex-col h-[80vh] max-h-[600px]">
        <div className="flex flex-col h-full">
          <DialogHeader className="px-6 pt-6 pb-4 border-b border-gray-800">
            <DialogTitle className="text-xl">Finaliser votre commande</DialogTitle>
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto p-6">
            <form id="order-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ville">Ville</Label>
                  <Select value={selectedVille} onValueChange={handleVilleChange}>
                    <SelectTrigger id="ville" className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Sélectionnez une ville" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      {villes.map((ville) => (
                        <SelectItem key={ville.id} value={ville.id} className="hover:bg-gray-700">
                          {ville.nom}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="professeur">Professeur</Label>
                  <Select
                    value={selectedProfesseur}
                    onValueChange={setSelectedProfesseur}
                    disabled={!selectedVille}
                  >
                    <SelectTrigger id="professeur" className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Sélectionnez un professeur" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      {professeurs.length > 0 ? (
                        professeurs.map((prof, index) => (
                          <SelectItem key={index} value={prof} className="hover:bg-gray-700">
                            {prof}
                          </SelectItem>
                        ))
                      ) : (
                        <div className="px-3 py-2 text-sm text-gray-400">
                          Sélectionnez d'abord une ville
                        </div>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message d'avertissement adhérents */}
              {selectedVille && selectedProfesseur && (
                <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                  <p className="text-amber-400 text-sm font-medium mb-1">
                    ⚠️ Réservé aux adhérents
                  </p>
                  <p className="text-amber-200/80 text-sm">
                    La commande est réservée uniquement aux adhérents de l'association Capoeira Senzala 78. Toute commande passée par une personne extérieure à l'association ne sera pas traitée.
                  </p>
                </div>
              )}
            </form>
          </div>

          <DialogFooter className="px-6 py-4 border-t border-gray-800 bg-gray-900/95 backdrop-blur-sm">
            <Button 
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-gray-600 text-white hover:bg-gray-800"
            >
              Continuer mes achats
            </Button>
            <Button 
              type="submit" 
              form="order-form"
              className="bg-primary-500 hover:bg-primary-600 text-white"
              disabled={!selectedVille || !selectedProfesseur}
            >
              Commander maintenant
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
