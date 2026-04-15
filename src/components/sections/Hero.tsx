"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "5516992084343";
const PHONE_NUMBER = "+5516992084343";

const backgroundImages = [
  "/guincho1.jpeg",
  "/guincho2.jpeg",
  "/guincho3.jpeg",
  "/guincho4.jpeg",
  "/guincho5.jpeg",
  "/guincho6.jpeg",
];

// Scroll to top component
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-24 right-4 lg:bottom-8 lg:right-8 z-50 w-12 h-12 bg-yellow-400 hover:bg-yellow-300 text-slate-900 rounded-full shadow-lg flex items-center justify-center transition-colors"
    >
      <ChevronUp className="w-6 h-6" />
    </motion.button>
  );
}

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // Rotate background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Rotating Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={backgroundImages[currentImage]}
              alt="Guincho em operação"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/85 to-slate-950" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-8 pb-20 min-h-screen flex flex-col">
        {/* Mobile Emergency Bar */}
        <motion.div 
          className="lg:hidden bg-gradient-to-r from-red-600 to-red-500 text-white text-center py-2 px-4 rounded-full mb-4 shadow-2xl font-bold text-xs"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Atendimento 24h - Clique para chamar AGORA
        </motion.div>

        {/* Main Content - Centered */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full">
          
          {/* Logo - Much Bigger */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-yellow-400/20 rounded-3xl blur-3xl scale-150" />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="/logo.png"
                alt="São Joaquim Guincho Auto Socorro"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight text-center"
          >
            Guincho 24h em{" "}
            <span className="text-yellow-400">
              São Joaquim da Barra e região
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl text-center"
          >
            Atendimento imediato para carros, motos e utilitários. 
            <span className="text-yellow-400 font-bold"> Chegamos rápido!</span>
          </motion.p>

          {/* CTA Buttons - Fixed and Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-lg"
          >
            {/* WhatsApp Button - Clean */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-base sm:text-lg px-6 py-4 rounded-xl shadow-xl transition-all flex-1"
            >
              <div className="w-6 h-6 relative shrink-0">
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  fill
                  className="object-contain"
                />
              </div>
              <span>WHATSAPP</span>
            </a>

            {/* Phone Button - Clean */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-base sm:text-lg px-6 py-4 rounded-xl border-2 border-white/30 transition-all flex-1"
            >
              <Phone className="w-5 h-5" />
              <span>(16) 99208-4343</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
