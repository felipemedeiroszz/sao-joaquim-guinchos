"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Send, Check } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "5516992084343";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 4000);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-24 lg:bottom-8 right-4 lg:right-8 z-40 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs relative border border-gray-100 mb-2"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0 relative">
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Atendimento imediato</p>
                <p className="text-xs text-gray-500 mt-1">Resposta em 2 minutos</p>
              </div>
            </div>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-100" />
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden w-[340px] mb-3"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center relative">
                    <Image
                      src="/whatsapp.png"
                      alt="WhatsApp"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Guincho 24h</h4>
                    <p className="text-green-100 text-sm flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                      Online agora
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="bg-gray-50 p-4 min-h-[200px] space-y-3">
              <div className="text-center">
                <span className="text-xs text-gray-400 bg-gray-200 px-3 py-1 rounded-full">Hoje</span>
              </div>
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">Olá! Precisa de guincho urgente?</p>
                  <p className="text-[10px] text-gray-400 mt-1">Agora</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">Estamos disponível 24h em São Joaquim da Barra!</p>
                  <p className="text-[10px] text-gray-400 mt-1">Agora</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 bg-white border-t border-gray-100">
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Preciso de guincho urgente.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Iniciar Conversa
                <Check className="w-4 h-4" />
              </motion.a>
              <p className="text-center text-xs text-gray-400 mt-2 flex items-center justify-center gap-1">
                <Clock className="w-3 h-3" />
                Resposta em menos de 2 minutos
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button with WhatsApp Logo */}
      <div className="relative">
        {/* Pulse rings */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500"
          animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500"
          animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => !isOpen && setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: 90 }}
              >
                <X className="w-7 h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: -90 }}
                className="relative w-9 h-9"
              >
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  fill
                  className="object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
