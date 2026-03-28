import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  "Preparação de pele para uma base perfeita",
  "Escolher a base e corretivo certos para o teu tom",
  "Contorno e blush para um rosto esculpido",
  "Técnicas de olhos: esfumado, delineado e pestanas",
  "Lábios: contorno e cor que dura o dia todo",
  "Maquilhagem para trabalho, casual e eventos",
  "Dicas especiais para pele madura",
  "Lista de produtos acessíveis em Portugal",
];

const WhatYouLearn = () => (
  <section className="py-20 bg-gradient-hero">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          O que vais aprender 🎓
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Módulos práticos e curtos — aprendes ao teu ritmo, onde quiseres.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-soft"
          >
            <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-4 h-4 text-primary-foreground" />
            </span>
            <span className="text-foreground font-medium">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouLearn;
