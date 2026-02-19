"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { articles, categories } from '@/data/articles';

export default function ArticlesList() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [visibleArticles, setVisibleArticles] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);

  const filteredArticles = selectedCategory === "Tous" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const displayedArticles = filteredArticles.slice(0, visibleArticles);
  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = displayedArticles.filter(article => !article.featured);
  const hasMore = visibleArticles < filteredArticles.length;

  const loadMoreArticles = useCallback(() => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    setTimeout(() => {
      setVisibleArticles(prev => prev + 3);
      setIsLoading(false);
    }, 300);
  }, [isLoading, hasMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreArticles();
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [loadMoreArticles, hasMore]);

  useEffect(() => {
    setVisibleArticles(3);
  }, [selectedCategory]);

  return (
    <div className="py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Actualités
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Restez informé des dernières nouvelles, événements et actualités du Grupo Senzala 78.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? 'bg-primary-500 text-darker-blue hover:bg-primary-600'
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        {featuredArticle && selectedCategory === "Tous" && (
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-48 sm:h-64 lg:h-auto">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary-500/20 text-primary-500 hover:bg-primary-500/30 border border-primary-500/30">
                    À la une
                  </Badge>
                </div>
                <CardContent className="p-5 sm:p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-primary-500/20 text-primary-500 hover:bg-primary-500/30 border border-primary-500/30">
                      {featuredArticle.category}
                    </Badge>
                    <div className="flex items-center text-gray-400 text-sm gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredArticle.date).toLocaleDateString('fr-FR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-white mb-4">
                    {featuredArticle.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base mb-6">
                    {featuredArticle.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-400">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{featuredArticle.author}</span>
                    </div>
                    <Button asChild className="bg-primary-500 text-darker-blue hover:bg-primary-600">
                      <Link href={`/actualites/${featuredArticle.id}`}>
                        Lire la suite
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Articles Grid */}
        {regularArticles.length === 0 && selectedCategory !== "Tous" ? (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 text-lg">Aucun article dans cette catégorie</p>
          </motion.div>
        ) : (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {regularArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge 
                    className="absolute top-4 left-4 bg-primary-500/20 text-primary-500 hover:bg-primary-500/30 border border-primary-500/30"
                  >
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-gray-400 text-sm gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString('fr-FR')}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white mb-3 line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 mb-4 flex-grow line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                    <div className="flex items-center gap-2 text-gray-400">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{article.author}</span>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="text-primary-500 hover:text-primary-400 hover:bg-primary-500/10">
                      <Link href={`/actualites/${article.id}`}>
                        Lire plus
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        )}

        {/* Infinite Scroll Loader */}
        {hasMore && (
          <div ref={loaderRef} className="flex justify-center py-8">
            {isLoading && (
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                <span>Chargement...</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
