"use client";

import { motion } from "framer-motion";
import { MapPin, Search, Navigation, Clock, Shield, Truck } from "lucide-react";

const seoSections = [
  {
    icon: Search,
    title: "Guincho em São Joaquim da Barra",
    content: `A São Joaquim Guincho Auto Socorro é a principal empresa de guincho 24 horas em São Joaquim da Barra e região. Com anos de experiência no mercado, oferecemos atendimento rápido e profissional para todos os tipos de veículos.

    Nossa frota moderna e equipe qualificada garantem o melhor serviço de auto socorro da cidade. Atendemos emergências em toda São Joaquim da Barra, incluindo as principais avenidas, bairros residenciais e áreas industriais.`,
    keywords: ["guincho São Joaquim da Barra", "reboque 24h", "auto socorro SP"],
  },
  {
    icon: Clock,
    title: "Guincho 24 Horas Perto de Mim",
    content: `Procurando por "guincho 24 horas perto de mim"? Nós estamos sempre por perto! Nossa base estratégica em São Joaquim da Barra permite atendimento rápido em toda a região, chegando ao local em poucos minutos.

    Disponibilidade total: 24 horas por dia, 7 dias por semana, incluindo feriados. Seja qual for a hora, estamos prontos para ajudar você com seu veículo.`,
    keywords: ["guincho 24 horas", "guincho perto de mim", "socorro 24h"],
  },
  {
    icon: Truck,
    title: "Auto Socorro Urgente",
    content: `Situações de emergência exigem respostas rápidas. Nosso serviço de auto socorro urgente foi desenvolvido para atender exatamente essa necessidade. Com tempo médio de chegada de 15-20 minutos, somos a escolha certa quando o tempo é crucial.

    Atendemos: pane mecânica, pane elétrica, acidentes de trânsito, pane seca, pneu furado e qualquer outra emergência veicular.`,
    keywords: ["auto socorro urgente", "guincho emergência", "socorro veicular"],
  },
  {
    icon: Shield,
    title: "Segurança e Confiança",
    content: `Todos os nossos serviços são realizados com total segurança. Nossos guinchos possuem equipamentos modernos e nossos motoristas são profissionais certificados e experientes.

    Garantimos o transporte seguro do seu veículo até o destino desejado, seja uma oficina mecânica, concessionária, residência ou qualquer outro local.`,
    keywords: ["guincho seguro", "transporte veicular seguro", "guincho confiável"],
  },
];

export default function SEOLocal() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Atendimento Local
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Guincho em toda São Joaquim da Barra e região
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cobertura completa para atender você onde estiver
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {seoSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-xl shrink-0">
                  <section.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {section.title}
                  </h3>
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line mb-4">
                    {section.content}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {section.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coverage Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
            <Navigation className="w-4 h-4" />
            Atendemos: São Joaquim da Barra e cidades vizinhas
          </div>
        </motion.div>
      </div>
    </section>
  );
}
