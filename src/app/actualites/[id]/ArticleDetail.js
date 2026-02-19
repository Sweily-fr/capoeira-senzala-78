"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import ArticleSuggestions from './ArticleSuggestions';
import { articles } from '@/data/articles';

export default function ArticleDetail({ articleId }) {
  const article = articles.find(a => a.id === parseInt(articleId));

  if (!article) {
    return (
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Article non trouvé</h2>
          <p className="text-gray-300 mb-8">L'article que vous recherchez n'existe pas ou a été supprimé.</p>
          <Button asChild className="bg-primary-500 text-darker-blue hover:bg-primary-600">
            <Link href="/actualites">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux actualités
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Back Button */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button asChild variant="ghost" className="text-white hover:bg-white/10">
            <Link href="/actualites">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux actualités
            </Link>
          </Button>
        </motion.div>

        {/* Tags & Social Actions */}
        <motion.div 
          className="mb-8 flex flex-wrap items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap items-center gap-2">
            {article.tags.map((tag) => (
              <Badge key={tag} className="bg-primary-500/20 text-primary-500 hover:bg-primary-500/30 border border-primary-500/30">
                #{tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: article.title,
                    text: article.excerpt,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Lien copié dans le presse-papier !');
                }
              }}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Partager
            </Button>
          </div>
        </motion.div>


        {/* Article Content */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
              <div
                className="prose prose-sm sm:prose-base md:prose-lg prose-invert max-w-none
                  prose-headings:text-white prose-headings:font-semibold
                  prose-p:text-gray-300 prose-p:leading-relaxed
                  prose-ul:text-gray-300 prose-li:text-gray-300
                  prose-strong:text-white
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:mb-6 prose-ul:mb-6"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Article Suggestions */}
        <ArticleSuggestions currentArticleId={article.id} />
      </div>
    </div>
  );
}
