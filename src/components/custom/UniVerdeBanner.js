'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, QrCode, Heart } from 'lucide-react';
import { useState } from 'react';

export default function UniVerdeBanner() {
  const [showQR, setShowQR] = useState(false);

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-dark-blue to-dark-blue" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left: Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/15 text-green-400 text-sm font-medium mb-4 border border-green-500/20">
                <Heart className="w-3.5 h-3.5 fill-green-400" />
                Jumelé à l'association humanitaire
              </span>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image
                src="/images/univerde/logo_univerde.png"
                alt="Uni Verde & Co"
                width={60}
                height={60}
                className="rounded-xl"
              />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Uni Verde & Co
              </h2>
            </motion.div>

            <motion.p
              className="text-gray-300 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Le Grupo Senzala 78 est jumelé à Uni Verde & Co, association humanitaire
              engagée dans des actions solidaires et sociales. Adhérez ou participez à leurs initiatives !
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="https://www.helloasso.com/associations/uni-verde-and-co/adhesions/adhesion-uni-verde-and-co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Adhérez ou participez
              </a>
              <button
                onClick={() => setShowQR(!showQR)}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white/10 font-medium rounded-full transition-colors duration-300"
              >
                <QrCode className="w-4 h-4" />
                {showQR ? 'Masquer le QR Code' : 'Voir le QR Code'}
              </button>
            </motion.div>
          </div>

          {/* Right: QR Code */}
          {showQR && (
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl shadow-green-500/10">
                <Image
                  src="/images/univerde/QR CODE ADHESION UNIVERDE AND CO.png"
                  alt="QR Code adhésion Uni Verde & Co"
                  width={200}
                  height={200}
                  className="w-40 h-40 sm:w-48 sm:h-48"
                />
                <p className="text-center text-gray-600 text-xs mt-3 font-medium">
                  Scannez pour adhérer
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
