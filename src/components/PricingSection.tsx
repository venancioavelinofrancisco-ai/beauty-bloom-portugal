import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import { Check, ShieldCheck, Zap, Flame, AlertTriangle } from "lucide-react";

const bonuses = [
  "Guia completo de produtos acessíveis em Portugal",
  "Truques exclusivos para pele madura",
  "Acesso ao grupo privado de alunas",
  "Certificado de conclusão digital",
];

const PricingSection = () => (
  <section id="preco" className="py-20 bg-background relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ivory to-transparent opacity-60" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-light/20 rounded-full blur-3xl" />

    <div className="container relative z-10">
      {/* Emotional urgency bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-urgency/90 text-ivory rounded-2xl p-6 text-center mb-12 max-w-2xl mx-auto border border-urgency/50"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Flame className="w-5 h-5 text-ivory animate-heartbeat" />
          <span className="font-bold text-lg uppercase tracking-wide">⏳ Esta oferta está a desaparecer!</span>
          <Flame className="w-5 h-5 text-ivory animate-heartbeat" />
        </div>
        <CountdownTimer />
        <p className="text-ivory/80 text-sm mt-4 leading-relaxed">
          <AlertTriangle className="w-4 h-4 inline mr-1 text-ivory" />
          Quando o tempo acabar, o preço volta para <strong className="line-through">79,99€</strong>. 
          Restam apenas <strong className="text-ivory animate-pulse-urgency">17 vagas</strong> — 
          não fiques de fora! 💔
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-ivory rounded-3xl shadow-rose max-w-lg mx-auto overflow-hidden border border-ivory"
      >
        {/* Header */}
        <div className="bg-rose text-ivory p-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest opacity-80">Curso 100% Online</span>
          <h3 className="font-display text-2xl font-bold mt-2">Automaquiagem — Do Básico ao Brilho</h3>
        </div>

        <div className="p-8">
          {/* Pricing */}
          <div className="text-center mb-8">
            <span className="text-noir/50 line-through text-lg">De 79,99€</span>
            <div className="flex items-baseline justify-center gap-2 mt-2">
              <span className="font-display text-5xl font-bold text-gradient-rose">27,99€</span>
            </div>
            <span className="inline-block bg-rose-light text-rose-deep text-xs font-bold px-3 py-1 rounded-full mt-3 border border-rose/20">
              POUPA 65% — Lançamento 🇵🇹
            </span>
          </div>

          {/* Bonuses */}
          <div className="space-y-3 mb-8">
            {bonuses.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-rose flex-shrink-0 mt-0.5" />
                <span className="text-noir text-sm">{b}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://www.baton.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-rose text-ivory font-bold text-lg py-4 rounded-full text-center shadow-rose hover:scale-105 transition-transform"
          >
            Garante já a tua vaga! 💄
          </a>

          <div className="flex items-center justify-center gap-2 mt-4 text-noir/50 text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>Garantia de 7 dias — devolução total sem perguntas</span>
          </div>
        </div>
      </motion.div>

      {/* Emotional scarcity */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-noir/60 text-sm"
        >
          🔥 <strong className="text-rose">34 pessoas</strong> estão a ver esta página agora •{" "}
          <strong className="text-rose">83 inscrições</strong> nas últimas 24h
        </motion.p>
        <p className="text-noir/40 text-xs mt-3">
          💬 "Inscrevi-me ontem e já fiz o meu primeiro look completo!" — Maria T., Lisboa
        </p>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
