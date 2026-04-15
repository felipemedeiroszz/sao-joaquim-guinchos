"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Star, Quote, MessageCircle } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    name: "João Carlos",
    content: "Chegaram muito rápido, salvaram meu dia! Minha bateria deu problema à noite e em menos de 30 minutos já estavam aqui.",
    rating: 5,
  },
  {
    name: "Maria Silva",
    content: "Atendimento excelente e preço justo. Ficaram com minha moto até eu resolver a documentação. Muito profissionais!",
    rating: 5,
  },
  {
    name: "Pedro Santos",
    content: "Super recomendo, profissionais de verdade! Meu caminhão quebrou na estrada e eles resolveram tudo rapidinho.",
    rating: 5,
  },
];

// 3D Tilt Testimonial Card
const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative"
    >
      {/* Glow border */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-500" />
      
      {/* Card */}
      <div className="relative h-full bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-8 border border-slate-800 group-hover:border-transparent transition-all duration-500">
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(250,204,21,0.05) 50%, transparent 60%)",
          }}
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        />
        
        {/* Quote icon with glow */}
        <motion.div
          className="relative w-12 h-12 mb-4"
          whileHover={{ rotate: 10, scale: 1.1 }}
        >
          <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-lg" />
          <Quote className="w-10 h-10 text-yellow-400 relative z-10" />
        </motion.div>
        
        {/* Stars with animation */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            </motion.div>
          ))}
        </div>
        
        {/* Content */}
        <p className="text-gray-300 mb-6 leading-relaxed italic">
          &ldquo;{testimonial.content}&rdquo;
        </p>
        
        {/* Author */}
        <div className="flex items-center gap-3">
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold relative overflow-hidden"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </motion.div>
          <div>
            <h4 className="font-bold text-white">{testimonial.name}</h4>
            <motion.span 
              className="text-xs text-blue-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Cliente Verificado
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-600/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-400/5 rounded-full blur-[120px]"
        animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10" style={{ perspective: "1000px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            O que nossos{" "}
            <span className="relative">
              <span className="text-yellow-400">Clientes</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
            {" "}dizem
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Histórias reais de quem já usou nossos serviços
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
