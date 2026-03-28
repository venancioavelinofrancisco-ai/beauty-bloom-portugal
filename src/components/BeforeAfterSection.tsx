import { motion } from "framer-motion";
import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.jpg";
import ba3 from "@/assets/before-after-3.jpg";

const testimonials = [
  { img: ba1, name: "Catarina M.", age: "28 anos", quote: "Nunca pensei que conseguisse fazer um esfumado tão bonito sozinha! Agora é a minha rotina diária." },
  { img: ba2, name: "Fernanda S.", age: "52 anos", quote: "As dicas para pele madura foram espetaculares. A maquilhagem já não craquela e sinto-me linda!" },
  { img: ba3, name: "Inês R.", age: "34 anos", quote: "Aprendi a escolher os produtos certos na Primor. Poupei dinheiro e o resultado é profissional." },
];

const BeforeAfterSection = () => (
  <section id="resultados" className="py-20 bg-rose-soft">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-noir mb-4">
          Resultados reais das nossas alunas ✨
        </h2>
        <p className="text-noir/60 text-lg max-w-xl mx-auto">
          Antes e depois — a transformação fala por si.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-ivory rounded-3xl overflow-hidden shadow-card border border-ivory hover:shadow-rose transition-shadow"
          >
            <div className="relative">
              <img
                src={t.img}
                alt={`Antes e depois - ${t.name}`}
                loading="lazy"
                width={640}
                height={640}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-3 left-3 bg-noir/80 text-ivory text-xs font-bold px-3 py-1 rounded-full">
                Antes
              </div>
              <div className="absolute top-3 right-3 bg-ivory text-rose-deep text-xs font-bold px-3 py-1 rounded-full">
                Depois
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-display font-bold text-noir">{t.name}</span>
                <span className="text-noir/50 text-sm">• {t.age}</span>
              </div>
              <p className="text-noir/60 text-sm italic">"{t.quote}"</p>
              <div className="flex mt-3 text-rose">
                {"★★★★★".split("").map((s, j) => (
                  <span key={j}>{s}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
