import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import { Check, ShieldCheck, Zap } from "lucide-react";

const bonuses = [
  "Guia completo de produtos acessíveis em Portugal",
  "Truques exclusivos para pele madura",
  "Acesso ao grupo privado de alunas",
  "Certificado de conclusão digital",
];

const PricingSection = () => (
  <section id="preco" className="py-20 bg-gradient-hero relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-3xl opacity-30" />

    <div className="container relative z-10">
      {/* Urgency bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-foreground text-primary-foreground rounded-2xl p-6 text-center mb-12 max-w-2xl mx-auto"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Zap className="w-5 h-5 text-gold animate-pulse-urgency" />
          <span className="font-bold text-lg uppercase tracking-wide">Oferta termina em breve!</span>
          <Zap className="w-5 h-5 text-gold animate-pulse-urgency" />
        </div>
        <CountdownTimer />
        <p className="text-primary-foreground/70 text-sm mt-3">
          ⚠️ Restam apenas <strong className="text-gold">17 vagas</strong> com este preço especial
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-card rounded-3xl shadow-elevated max-w-lg mx-auto overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-primary text-primary-foreground p-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest opacity-80">Curso Completo</span>
          <h3 className="font-display text-2xl font-bold mt-2">Automaquiagem — Do Básico ao Brilho</h3>
        </div>

        <div className="p-8">
          {/* Pricing */}
          <div className="text-center mb-8">
            <span className="text-muted-foreground line-through text-lg">De 79,99€</span>
            <div className="flex items-baseline justify-center gap-2 mt-2">
              <span className="font-display text-5xl font-bold text-gradient-primary">27,99€</span>
            </div>
            <span className="inline-block bg-gold-light text-gold text-xs font-bold px-3 py-1 rounded-full mt-3">
              POUPA 65% — Lançamento 🇵🇹
            </span>
          </div>

          {/* Bonuses */}
          <div className="space-y-3 mb-8">
            {bonuses.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{b}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#"
            className="block w-full bg-gradient-primary text-primary-foreground font-bold text-lg py-4 rounded-full text-center shadow-elevated hover:scale-105 transition-transform"
          >
            Garante já a tua vaga! 💄
          </a>

          <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>Garantia de 7 dias — devolução total sem perguntas</span>
          </div>
        </div>
      </motion.div>

      {/* Scarcity */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <p className="text-muted-foreground text-sm">
          🔥 <strong>34 pessoas</strong> estão a ver esta página agora •{" "}
          <strong>83 inscrições</strong> nas últimas 24h
        </p>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
