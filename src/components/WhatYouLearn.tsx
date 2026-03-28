import { motion } from "framer-motion";
import { Check, Wifi, Clock, RefreshCw, ShieldCheck, Award, Users, Smartphone, Heart } from "lucide-react";

const modules = [
  "Preparação de pele para uma base perfeita",
  "Escolher a base e corretivo certos para o teu tom",
  "Contorno e blush para um rosto esculpido",
  "Técnicas de olhos: esfumado, delineado e pestanas",
  "Lábios: contorno e cor que dura o dia todo",
  "Maquilhagem para trabalho, casual e eventos",
  "Dicas especiais para pele madura",
  "Lista de produtos acessíveis em Portugal",
];

const vantagens = [
  { icon: Wifi, title: "100% Online", desc: "Assiste onde e quando quiseres, no telemóvel ou computador" },
  { icon: Clock, title: "Ao teu ritmo", desc: "Sem horários fixos — adapta-se à tua rotina" },
  { icon: RefreshCw, title: "Acesso vitalício", desc: "Revê as aulas quantas vezes precisares, para sempre" },
  { icon: ShieldCheck, title: "Garantia de 7 dias", desc: "Não gostaste? Devolvemos o dinheiro, sem perguntas" },
  { icon: Award, title: "Certificado incluído", desc: "Recebe um certificado digital ao concluir o curso" },
  { icon: Users, title: "Comunidade exclusiva", desc: "Acesso ao grupo privado de alunas para trocar dicas" },
  { icon: Smartphone, title: "Aulas curtas e práticas", desc: "Vídeos de 5-10 min — aprende sem perder tempo" },
  { icon: Heart, title: "Suporte dedicado", desc: "Tira dúvidas diretamente com a equipa do curso" },
];

const WhatYouLearn = () => (
  <section className="py-20 bg-background">
    <div className="container">
      {/* Vantagens */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block text-sm font-bold uppercase tracking-widest text-rose-deep mb-2">
          Porquê escolher este curso?
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-noir mb-4">
          Vantagens que fazem a diferença ✨
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-20">
        {vantagens.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-ivory rounded-2xl p-5 shadow-soft border border-ivory text-center"
          >
            <div className="w-12 h-12 bg-rose-light rounded-full flex items-center justify-center mx-auto mb-3">
              <v.icon className="w-6 h-6 text-rose-deep" />
            </div>
            <h3 className="font-display font-bold text-noir text-sm mb-1">{v.title}</h3>
            <p className="text-noir/60 text-xs leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* O que vais aprender */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-noir mb-4">
          O que vais aprender 🎓
        </h2>
        <p className="text-noir/60 text-lg max-w-xl mx-auto">
          Módulos práticos e curtos — aprendes ao teu ritmo, onde quiseres.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {modules.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3 bg-ivory rounded-xl p-4 shadow-soft border border-ivory"
          >
            <span className="flex-shrink-0 w-6 h-6 bg-rose rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-4 h-4 text-ivory" />
            </span>
            <span className="text-noir font-medium">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouLearn;
