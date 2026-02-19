'use client';

import { useState, useRef } from 'react';
import coursParVille from '@/data/cours';

export default function VillesList() {
  const [activeTab, setActiveTab] = useState('capoeira');
  const [selectedVille, setSelectedVille] = useState(Object.keys(coursParVille).filter(key => key !== 'batucada')[0]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filtrer les villes pour exclure batucada
  const allVilles = Object.entries(coursParVille).filter(([key]) => key !== 'batucada');
  
  // Filtrer les villes selon la recherche
  const villes = allVilles.filter(([key, ville]) => 
    ville.nom.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const batucadaData = coursParVille['batucada'];
  const villeData = activeTab === 'capoeira' ? coursParVille[selectedVille] : batucadaData;
  const contentRef = useRef(null);

  const handleVilleChange = (key) => {
    setSelectedVille(key);
    // Scroll vers le haut de la section de contenu avec offset pour la navbar
    if (contentRef.current) {
      const yOffset = -150; // Offset pour la navbar
      const element = contentRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Scroll vers le haut quand on change d'onglet
    if (contentRef.current) {
      const yOffset = -150;
      const element = contentRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-8 md:mt-12 container mx-auto px-4 max-w-7xl">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center" ref={contentRef}>Nos lieux de cours</h2>
      
      {/* Onglets Capoeira / Batucada */}
      <div className="flex justify-center mb-6 md:mb-8">
        <div className="inline-flex bg-white/5 rounded-lg p-1 w-full max-w-md">
          <button
            onClick={() => handleTabChange('capoeira')}
            className={`flex-1 px-4 md:px-8 py-2 md:py-3 rounded-md font-semibold transition-all text-sm md:text-base ${
              activeTab === 'capoeira'
                ? 'bg-primary-500 text-dark-blue'
                : 'text-white hover:bg-white/10'
            }`}
          >
            Capoeira
          </button>
          <button
            onClick={() => handleTabChange('batucada')}
            className={`flex-1 px-4 md:px-8 py-2 md:py-3 rounded-md font-semibold transition-all text-sm md:text-base ${
              activeTab === 'batucada'
                ? 'bg-primary-500 text-dark-blue'
                : 'text-white hover:bg-white/10'
            }`}
          >
            Batucada
          </button>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 items-start">
        {/* Liste des villes - Sticky (masquée pour Batucada) */}
        {activeTab === 'capoeira' && (
          <aside className="w-full lg:w-72 xl:w-80 shrink-0 lg:sticky lg:top-[130px] lg:self-start">
            <div className="bg-white/5 p-3 md:p-4 rounded-lg">
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Villes</h3>
              
              {/* Champ de recherche */}
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Rechercher une ville..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
              </div>

              <div className="space-y-1 overflow-y-auto pr-2 max-h-[300px] lg:max-h-[calc(100vh-320px)]">
                {villes.length > 0 ? (
                  villes.map(([key, ville]) => (
                    <button
                      key={key}
                      onClick={() => handleVilleChange(key)}
                      className={`w-full text-left px-3 md:px-4 py-2 md:py-3 rounded-md transition-colors text-sm md:text-base ${
                        selectedVille === key 
                          ? 'bg-primary-500 text-dark-blue font-medium' 
                          : 'hover:bg-white/10'
                      }`}
                    >
                      {ville.nom}
                    </button>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm text-center py-4">Aucune ville trouvée</p>
                )}
              </div>
            </div>
          </aside>
        )}

          {/* Détails de la ville sélectionnée - Scrollable */}
          <div className={`flex-1 min-w-0 ${activeTab === 'batucada' ? 'mx-auto max-w-4xl' : ''}`}>
            <div className="bg-white/5 p-4 md:p-6 rounded-lg">
              {villeData && (
                <>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl font-semibold">{villeData.nom}</h3>
                    {villeData.inscriptionHref && (
                      <a 
                        href={villeData.inscriptionHref} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary-500 text-dark-blue font-bold py-2 px-6 rounded hover:bg-primary-400 transition-colors text-sm whitespace-nowrap"
                      >
                        S'inscrire
                      </a>
                    )}
                  </div>

                  {villeData.contact && (
                    <div className="mb-4 md:mb-6 p-3 md:p-4 bg-white/5 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm md:text-base">Contact :</h4>
                      {villeData.contact.nom && villeData.contact.prenom && (
                        <p>{villeData.contact.prenom} {villeData.contact.nom}</p>
                      )}
                      {villeData.contact.email && (
                        <p>
                          <a href={`mailto:${villeData.contact.email}`} className="text-primary-500 hover:underline">
                            {villeData.contact.email}
                          </a>
                        </p>
                      )}
                      {villeData.contact.telephone && (
                        <div>
                          {villeData.contact.telephone.split(/,|<br>|<br\/>/).map((tel, index) => {
                            const cleanTel = tel.trim();
                            return cleanTel ? (
                              <p key={index}>
                                <a href={`tel:${cleanTel.replace(/\s+/g, '')}`} className="hover:underline">
                                  {cleanTel}
                                </a>
                              </p>
                            ) : null;
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Contacts par jour (si nécessaire) */}
                  {villeData.cours.some(jour => jour.contact) && (
                    <div className="mb-4 md:mb-6 space-y-2 md:space-y-3">
                      {villeData.cours.map((jour, index) => (
                        jour.contact && (
                          <div key={index} className="bg-white/5 p-3 md:p-4 rounded-lg">
                            <h4 className="font-semibold text-primary-500 mb-2 text-sm md:text-base">Contact - {jour.jour}</h4>
                            <div className="text-sm">
                              {jour.contact.nom && jour.contact.prenom && (
                                <p>{jour.contact.prenom} {jour.contact.nom}</p>
                              )}
                              {jour.contact.email && (
                                <p>
                                  <a href={`mailto:${jour.contact.email}`} className="text-primary-500 hover:underline">
                                    {jour.contact.email}
                                  </a>
                                </p>
                              )}
                              {jour.contact.telephone && (
                                <div>
                                  {jour.contact.telephone.split(/,|<br>|<br\/>/).map((tel, telIndex) => {
                                    const cleanTel = tel.trim();
                                    return cleanTel ? (
                                      <p key={telIndex}>
                                        <a href={`tel:${cleanTel.replace(/\s+/g, '')}`} className="hover:underline">
                                          {cleanTel}
                                        </a>
                                      </p>
                                    ) : null;
                                  })}
                                </div>
                              )}
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  )}

                  {/* Tableau unique avec tous les cours */}
                  <div className="bg-white/5 rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[480px] sm:min-w-[600px]">
                        <thead>
                          <tr className="text-left text-xs md:text-sm text-gray-300 border-b border-white/10 bg-white/10">
                            <th className="p-2 md:p-3 w-1/5">Jour</th>
                            <th className="p-2 md:p-3 w-1/5">Horaire</th>
                            <th className="p-2 md:p-3 w-1/4">Âge</th>
                            <th className="p-2 md:p-3">Lieu</th>
                          </tr>
                        </thead>
                        <tbody>
                          {villeData.cours.map((jour, jourIndex) => (
                            jour.cours.map((cours, coursIndex) => (
                              <tr 
                                key={`${jourIndex}-${coursIndex}`} 
                                className={`border-b border-white/5 ${(jourIndex + coursIndex) % 2 === 0 ? 'bg-white/5' : 'bg-white/[0.03]'}`}
                              >
                                {coursIndex === 0 && (
                                  <td 
                                    className="p-2 md:p-3 align-top" 
                                    rowSpan={jour.cours.length}
                                  >
                                    <div className="flex flex-col gap-1.5 md:gap-2">
                                      <span className="font-semibold text-primary-500 text-xs md:text-sm">{jour.jour}</span>
                                      {jour.inscriptionHref && (
                                        <a 
                                          href={jour.inscriptionHref} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="bg-primary-500 text-dark-blue font-bold py-1 px-3 md:px-6 rounded hover:bg-primary-400 transition-colors text-xs text-center whitespace-nowrap inline-block w-fit"
                                        >
                                          S'inscrire
                                        </a>
                                      )}
                                    </div>
                                  </td>
                                )}
                                <td className="p-2 md:p-3 font-medium text-xs md:text-sm">{cours.heure}</td>
                                <td className="p-2 md:p-3 text-xs md:text-sm">{cours.age}</td>
                                <td className="p-2 md:p-3 text-xs md:text-sm">{cours.lieu}</td>
                              </tr>
                            ))
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
      </div>
    </div>
  );
}
