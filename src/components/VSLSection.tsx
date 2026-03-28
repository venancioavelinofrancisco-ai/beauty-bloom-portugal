import { motion } from "framer-motion";
import { Play, Volume2, Sparkles } from "lucide-react";
import { useState } from "react";
import vslMakeup1 from "@/assets/vsl-makeup-1.jpg";
import vslMakeup2 from "@/assets/vsl-makeup-2.jpg";
import vslMakeup3 from "@/assets/vsl-makeup-3.jpg";

const VSLSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ivory to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ivory to-transparent opacity-60" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-rose-light/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-ivory/20 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Centered title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-ivory/40 text-rose-deep text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-ivory/50">
            <Sparkles className="w-3.5 h-3.5" /> Vê com os teus próprios olhos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-noir mb-4 text-center">
            Assiste à <span className="text-gradient-rose">transformação</span> em tempo real
          </h2>
          <p className="text-noir/60 text-lg max-w-2xl mx-auto text-center">
            Descobre como as nossas alunas passam de zero a deslumbrantes em minutos — com produtos que encontras na tua cidade.
          </p>
        </motion.div>

        {/* Image gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14"
        >
          {[
            { src: vslMakeup1, label: "Técnica de contorno" },
            { src: vslMakeup2, label: "Antes & Depois" },
            { src: vslMakeup3, label: "Look completo" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-2xl overflow-hidden shadow-elevated border-2 border-ivory/50 group"
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                width={1920}
                height={1080}
                className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-noir/80 to-transparent p-4">
                <p className="text-ivory font-display font-bold text-sm">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video embed — real makeup tutorial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-rose border-2 border-ivory/50">
            <div className="relative aspect-video bg-noir">
              <iframe
                src="https://www.youtube.com/embed/QnKcGfeS63Q?rel=0&modestbranding=1&showinfo=0"
                title="VSL — Tutorial de Automaquiagem"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />

              {!isPlaying && (
                <div
                  className="absolute inset-0 bg-noir/60 flex flex-col items-center justify-center cursor-pointer group z-10"
                  onClick={() => setIsPlaying(true)}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 rounded-full bg-ivory flex items-center justify-center shadow-rose mb-4 group-hover:scale-110 transition-transform"
                  >
                    <Play className="w-8 h-8 text-rose-deep ml-1" fill="hsl(var(--rose-deep))" />
                  </motion.div>
                  <p className="text-ivory font-display text-xl font-bold">Carrega para assistir</p>
                  <p className="text-ivory/50 text-sm mt-1 flex items-center gap-2">
                    <Volume2 className="w-4 h-4" /> Ativa o som para a experiência completa
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-8 text-noir/50 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="text-rose">▶</span> 12.847 visualizações
            </span>
            <span className="flex items-center gap-2">
              <span className="text-rose">⭐</span> 4.9/5 de avaliação
            </span>
            <span className="flex items-center gap-2">
              <span className="text-rose">💬</span> "Mudou a minha vida!"
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VSLSection;
