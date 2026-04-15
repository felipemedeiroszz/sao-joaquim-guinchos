"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Shield } from "lucide-react";
import Image from "next/image";

const WHATSAPP_NUMBER = "5516992084343";
const PHONE_NUMBER = "+5516992084343";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo.png"
                  alt="São Joaquim Guincho"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">
                  São Joaquim <span className="text-yellow-400">Guincho</span>
                </h3>
                <p className="text-gray-400 text-sm">Auto Socorro 24h</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Atendimento rápido e profissional para carros, motos, caminhonetes e mais. 
              Disponível 24 horas por dia, 7 dias por semana em São Joaquim da Barra e região.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {[
                "Guincho 24h",
                "Carros e Motos",
                "Caminhonetes",
                "Pane Seca",
                "Troca de Pneus",
              ].map((item) => (
                <li key={item} className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  R. Piauí, 1383 - Centro<br />
                  São Joaquim da Barra - SP
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-400 shrink-0" />
                <span className="text-gray-400 text-sm">Atendimento 24h</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-400 shrink-0" />
                <span className="text-gray-400 text-sm">+500 atendimentos</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 pt-8 border-t border-slate-800"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-5 h-5 relative">
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  fill
                  className="object-contain"
                />
              </div>
              <span>WHATSAPP</span>
            </motion.a>
            
            <motion.a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl border-2 border-white/30 transition-all w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              <span>LIGAR (16) 99208-4343</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-900 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} São Joaquim Guincho. Todos os direitos reservados. Desenvolvido por{" "}
            <a 
              href="https://www.instagram.com/lfinfo_sjb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold"
            >
              LFINFO
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
