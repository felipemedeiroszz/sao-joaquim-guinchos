"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, AlertTriangle } from "lucide-react";
import Image from "next/image";

const WHATSAPP_NUMBER = "5516992084343";
const PHONE_NUMBER = "+5516992084343";

export default function CTAIntermediate() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" />
      
      {/* Animated glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <AlertTriangle className="w-10 h-10 text-yellow-400" />
          </motion.div>

          {/* Headline - Strong SEO CTA */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Guincho 24h São Joaquim da Barra <span className="text-yellow-400">AGORA</span>!
          </motion.h2>

          {/* Subtitle - SEO Keywords */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto"
          >
            Auto Socorro e Reboque de Veículos 24 Horas em São Joaquim da Barra SP. 
            Atendimento Imediato com os Melhores Preços!
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {[
              "Chegada em 20 min",
              "Preço Justo",
              "Atendimento 24h",
              "+500 Clientes",
            ].map((badge, index) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons - High Conversion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* WhatsApp Button - Primary CTA */}
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-slate-900 font-black text-lg px-8 py-5 rounded-xl shadow-xl shadow-green-500/30 transition-all overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <div className="w-6 h-6 relative shrink-0">
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="relative">WHATSAPP AGORA</span>
            </motion.a>

            {/* Call Button - Secondary CTA */}
            <motion.a
              href={`tel:${PHONE_NUMBER}`}
              className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-5 rounded-xl border-2 border-white/30 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-6 h-6" />
              <span>LIGAR (16) 99208-4343</span>
            </motion.a>
          </motion.div>

          {/* SEO Text - Hidden but indexable */}
          <div className="sr-only">
            <h3>Guincho 24 Horas São Joaquim da Barra SP</h3>
            <p>
              Serviço de auto socorro e reboque de veículos 24h em São Joaquim da Barra. 
              Atendemos carros, motos, caminhonetes e utilitários. 
              Localização: Rua Piauí 1383, Centro, São Joaquim da Barra - SP.
              Telefone/WhatsApp: (16) 99208-4343. 
              Chegamos em até 20 minutos. Preço justo e transparente.
              Mais de 500 atendimentos realizados com sucesso.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
