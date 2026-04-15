"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

// Google Maps embed for R. Piauí, 1383 - Centro, São Joaquim da Barra - SP
const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.455012403027!2d-47.5867!3d-20.5833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0b13e1b6f1f1f%3A0x0!2sR.+Piau%C3%AD%2C+1383+-+Centro%2C+S%C3%A3o+Joaquim+da+Barra+-+SP%2C+14600-260!5e0!3m2!1spt-BR!2sbr!4v1704067200000!5m2!1spt-BR!2sbr";

export default function Map() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Nossa <span className="text-blue-400">Localização</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Estamos estrategicamente localizados no centro de São Joaquim da Barra para atender toda a região com máxima rapidez.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Map */}
            <div className="aspect-[16/9] w-full relative bg-gray-100">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Localização São Joaquim Guincho"
              />
            </div>
            
            {/* Address Bar */}
            <div className="p-6 md:p-8 bg-gradient-to-r from-blue-50 to-white">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Navigation className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Endereço</h3>
                    <p className="text-gray-300 text-lg">
                      R. Piauí, 1383 - Centro<br />
                      São Joaquim da Barra - SP, 14600-000
                    </p>
                  </div>
                </div>
                
                <motion.a
                  href="https://www.google.com/maps/place/R.+Piau%C3%AD,+1383+-+Centro,+S%C3%A3o+Joaquim+da+Barra+-+SP,+14600-000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Ver no Google Maps</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
