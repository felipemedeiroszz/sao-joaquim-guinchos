"use client";

import { motion } from "framer-motion";
import { Car, Bike, Truck, Wrench, Battery, CircleDot, Settings, Check } from "lucide-react";

const services = [
  { icon: Car, title: "Carros", description: "Guincho para todos os modelos de carros de passeio" },
  { icon: Bike, title: "Motos", description: "Transporte seguro para motocicletas de todas as cilindradas" },
  { icon: Truck, title: "Caminhonetes", description: "Guincho especializado para caminhonetes e SUVs" },
  { icon: Settings, title: "Equipamentos", description: "Transporte de maquinários e equipamentos diversos" },
  { icon: Car, title: "Vans", description: "Guincho para vans de passageiros e cargas" },
  { icon: Truck, title: "Pequenos Caminhões", description: "Atendimento para caminhões leves e médios" },
  { icon: Battery, title: "Recarga de Bateria", description: "Serviço rápido de recarga e auxílio de bateria" },
  { icon: CircleDot, title: "Troca de Pneus", description: "Troca de pneus furados e auxílio mecânico" },
];

export default function Services() {
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
            Atendemos <span className="text-yellow-400">todos os tipos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Atendemos todos os tipos de veículos com equipamentos modernos e equipe especializada
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-yellow-400/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              {/* Learn more link */}
              <div className="flex items-center gap-2 text-yellow-400 font-semibold text-sm">
                <span>Saiba mais</span>
                <Check className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
