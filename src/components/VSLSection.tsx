import { motion } from "framer-motion";
import { Play, Volume2 } from "lucide-react";
import { useState } from "react";

const VSLSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Decorative gold accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-gold/20 text-gold text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-gold/30">
            🎬 Vê com os teus próprios olhos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-4">
            Assiste à <span className="text-gradient-gold">transformação</span> em tempo real
          </h2>
          <p className="text-ivory/60 text-lg max-w-2xl mx-auto">
            Descobre como as nossas alunas passam de zero a deslumbrantes em minutos — com produtos que encontras na tua cidade.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-gold border border-gold/20">
            {/* Video embed placeholder — replace src with your VSL URL */}
            <div className="relative aspect-video bg-noir">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&showinfo=0"
                title="VSL — Curso de Automaquiagem"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />

              {/* Play overlay (hides once user interacts with iframe) */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 bg-noir/60 flex flex-col items-center justify-center cursor-pointer group z-10"
                  onClick={() => setIsPlaying(true)}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold mb-4 group-hover:scale-110 transition-transform"
                  >
                    <Play className="w-8 h-8 text-noir ml-1" fill="hsl(var(--noir))" />
                  </motion.div>
                  <p className="text-ivory font-display text-xl font-bold">Carrega para assistir</p>
                  <p className="text-ivory/50 text-sm mt-1 flex items-center gap-2">
                    <Volume2 className="w-4 h-4" /> Ativa o som para a experiência completa
                  </p>
                </div>
              )}
            </div>

            {/* Gold border glow */}
            <div className="absolute -inset-px rounded-3xl border border-gold/20 pointer-events-none" />
          </div>

          {/* Social proof under video */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-8 text-ivory/50 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="text-gold">▶</span> 12.847 visualizações
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gold">⭐</span> 4.9/5 de avaliação
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gold">💬</span> "Mudou a minha vida!"
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VSLSection;
