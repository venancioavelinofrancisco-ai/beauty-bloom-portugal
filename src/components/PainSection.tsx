import { motion } from "framer-motion";
import { HeartCrack } from "lucide-react";

const pains = [
  { emoji: "💸", title: "Dinheiro desperdiçado", desc: "Já perdeste a conta a produtos que compraste e nunca mais usaste. A gaveta está cheia — e a frustração também." },
  { emoji: "😞", title: "Insegurança ao espelho", desc: "Olhas para o resultado e sentes que algo está errado, mas não sabes o quê. E a confiança vai-se embora." },
  { emoji: "⏰", title: "Manhãs de stress", desc: "Sais a correr, sem tempo para te sentires bonita. E ao longo do dia, a maquilhagem desaparece." },
  { emoji: "🤷‍♀️", title: "Tutoriais que não ajudam", desc: "Vês vídeos no YouTube mas os produtos são caros, não encontras cá, e as técnicas não funcionam no teu rosto." },
  { emoji: "💔", title: "Medo de exagerar", desc: "Tens receio de parecer 'demasiado' ou 'pouco natural'. E acabas por não te maquilhar de todo." },
  { emoji: "😰", title: "Comparação constante", desc: "Vês outras mulheres impecáveis e perguntas-te: 'Porque é que eu não consigo?' — Consegues sim." },
];

const PainSection = () => (
  <section className="py-20 bg-rose-soft relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ivory/40 to-transparent" />
    <div className="absolute top-10 left-10 w-48 h-48 bg-rose/20 rounded-full blur-3xl" />
    <div className="absolute bottom-10 right-10 w-64 h-64 bg-rose-deep/10 rounded-full blur-3xl" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-flex items-center gap-2 bg-urgency/15 text-urgency text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-urgency/30">
          <HeartCrack className="w-3.5 h-3.5" /> Isto toca-te?
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-noir mb-4">
          Sabemos o que <span className="text-gradient-rose">estás a sentir</span>
        </h2>
        <p className="text-noir/60 text-lg max-w-2xl mx-auto">
          Não estás sozinha. Milhares de mulheres em Portugal passam por isto todos os dias — e este curso nasceu para acabar com essa dor.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pains.map((pain, i) => (
          <motion.div
            key={pain.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-ivory rounded-2xl p-6 border border-rose-light/30 hover:shadow-rose hover:border-rose-light/60 transition-all group"
          >
            <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{pain.emoji}</span>
            <h3 className="font-display text-xl font-bold text-noir mb-2">{pain.title}</h3>
            <p className="text-noir/60 text-sm leading-relaxed">{pain.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Emotional CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-noir/70 text-lg mb-4 font-display italic">
          "Chega de te sentires frustrada. Mereces sentir-te linda todos os dias."
        </p>
        <a
          href="https://www.baton.press/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-rose-deep text-ivory font-bold px-8 py-4 rounded-full shadow-elevated hover:scale-105 transition-transform"
        >
          Quero mudar agora — 27,99€ 💄
        </a>
      </motion.div>
    </div>
  </section>
);

export default PainSection;
