import { motion } from "framer-motion";

const pains = [
  { emoji: "⏰", title: "Sem tempo", desc: "Nunca tens tempo para te maquilhares de manhã e sais sempre a correr." },
  { emoji: "🤷‍♀️", title: "Produtos errados", desc: "Compras produtos que parecem perfeitos na loja mas que em casa não funcionam." },
  { emoji: "😰", title: "Medo de errar", desc: "Tens receio de exagerar ou de ficar com um look que não te favorece." },
  { emoji: "💧", title: "Não dura o dia", desc: "A maquilhagem 'derrete' ao fim de poucas horas e tens de refazer tudo." },
];

const PainSection = () => (
  <section className="py-20 bg-ivory">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Identificas-te com isto?
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Se alguma destas situações te soa familiar, este curso foi feito a pensar em ti.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pains.map((pain, i) => (
          <motion.div
            key={pain.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background rounded-2xl p-6 border border-gold-light hover:shadow-card hover:border-gold/30 transition-all"
          >
            <span className="text-4xl mb-4 block">{pain.emoji}</span>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">{pain.title}</h3>
            <p className="text-muted-foreground text-sm">{pain.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PainSection;
