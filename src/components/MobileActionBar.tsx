"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5516992084343";
const PHONE_NUMBER = "+5516992084343";

export default function MobileActionBar() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, type: "spring", stiffness: 100 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 p-3 lg:hidden"
    >
      <div className="flex gap-3 max-w-md mx-auto">
        {/* WhatsApp Button */}
        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-400 text-slate-900 font-bold py-3 px-4 rounded-xl shadow-lg"
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </motion.a>

        {/* Call Button */}
        <motion.a
          href={`tel:${PHONE_NUMBER}`}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg"
          whileTap={{ scale: 0.95 }}
        >
          <Phone className="w-5 h-5" />
          <span>Ligar</span>
        </motion.a>
      </div>
    </motion.div>
  );
}
