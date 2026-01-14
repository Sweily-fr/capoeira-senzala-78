"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { articles } from '@/data/articles';

export default function ArticleSuggestions({ currentArticleId }) {
  // Get suggested articles (exclude current article and limit to 3)
  const suggestedArticles = articles
    .filter(article => article.id !== parseInt(currentArticleId))
    .slice(0, 3);

  return (
    <motion.div 
      className="mt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">
          Articles suggérés
        </h3>
        <p className="text-gray-300">
          Découvrez d'autres articles qui pourraient vous intéresser
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {suggestedArticles.map((article, index) => (
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
                  variant="outline" 
                  className="absolute top-4 left-4 border-yellow-500 text-yellow-400 bg-black/50 backdrop-blur-sm"
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
                  <Button asChild variant="ghost" size="sm" className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10">
                    <Link href={`/actualites/${article.id}`}>
                      Lire
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Back to Articles Button */}
      <div className="text-center mt-12">
        <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-600">
          <Link href="/actualites">
            Voir tous les articles
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}
