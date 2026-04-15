"use client";

import { motion } from "framer-motion";
import { Clock, Zap, MapPin, Shield, DollarSign, Star } from "lucide-react";

const features = [
  { icon: Clock, title: "Atendimento 24 Horas", description: "Disponível todos os dias, 24 horas por dia, incluindo feriados" },
  { icon: Zap, title: "Agilidade no Atendimento", description: "Chegamos rápido para resolver seu problema imediatamente" },
  { icon: MapPin, title: "Cobertura Regional", description: "Atendemos São Joaquim da Barra e toda a região" },
  { icon: Shield, title: "Segurança no Transporte", description: "Seu veículo em boas mãos, com total segurança" },
  { icon: DollarSign, title: "Preço Justo", description: "Valores transparentes e competitivos para você" },
];

export default function Trust() {
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
            Por que escolher a{" "}
            <span className="text-yellow-400">São Joaquim Guincho</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Diferenciais que garantem o melhor atendimento da região
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              
              {/* Description */}
              <p className="text-sm text-white/80 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
