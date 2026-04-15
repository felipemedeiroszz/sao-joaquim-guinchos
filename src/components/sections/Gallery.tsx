"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Camera } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  { id: 1, src: "/guincho1.jpeg", alt: "Guincho em operação" },
  { id: 2, src: "/guincho2.jpeg", alt: "Frota de guinchos" },
  { id: 3, src: "/guincho3.jpeg", alt: "Atendimento na estrada" },
  { id: 4, src: "/guincho4.jpeg", alt: "Equipamentos modernos" },
  { id: 5, src: "/guincho5.jpeg", alt: "Transporte de veículos" },
  { id: 6, src: "/guincho6.jpeg", alt: "Equipe profissional" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Nossa <span className="text-yellow-400">Galeria</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conheça nossa frota e equipamentos de perto. Profissionalismo em cada detalhe.
          </p>
        </motion.div>

        {/* Gallery Grid - Uniform 3x2 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative bg-slate-800 aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Zoom icon */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-8 h-8 text-slate-900" />
                  </div>
                </motion.div>
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-semibold">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Imagem ampliada"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
