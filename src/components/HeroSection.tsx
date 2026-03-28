import { motion } from "framer-motion";
import heroImg from "@/assets/hero-makeup.jpg";
import { Flame, Clock } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center">
    {/* Decorative gold elements */}
    <div className="absolute top-10 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

    <div className="container relative z-10 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-gold/20 text-gold text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-gold/30">
            🇵🇹 Exclusivo para Portugal
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-gradient-gold">Põe-te bonita</span>
            <br />
            <span className="text-ivory">à tua maneira</span>
          </h1>

          <p className="text-ivory/70 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            Aprende automaquiagem passo a passo, com vídeos curtos e produtos que encontras na{" "}
            <strong className="text-gold">Primor, Wells e Sephora</strong>.
          </p>

          {/* Urgency banner */}
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-urgency/20 border border-urgency/40 rounded-2xl p-3 mb-6 max-w-md"
          >
            <p className="text-ivory text-sm flex items-center gap-2">
              <Flame className="w-4 h-4 text-urgency animate-heartbeat" />
              <strong className="text-urgency">⚠️ ÚLTIMAS 17 VAGAS</strong> — O preço sobe em breve!
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#preco"
              className="bg-gradient-gold text-noir font-bold text-lg px-8 py-4 rounded-full shadow-gold hover:scale-105 transition-transform text-center"
            >
              Garante a tua vaga — 27,99€
            </a>
            <a
              href="#resultados"
              className="border-2 border-gold/50 text-gold font-semibold px-8 py-4 rounded-full hover:bg-gold/10 transition-colors text-center"
            >
              Ver resultados ✨
            </a>
          </div>

          <div className="flex items-center gap-6 mt-8 text-sm text-ivory/50">
            <span>✅ Acesso vitalício</span>
            <span>✅ Certificado incluído</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-gold border border-gold/20">
            <img
              src={heroImg}
              alt="Mulher portuguesa a maquilhar-se ao espelho"
              width={1280}
              height={720}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/40 to-transparent" />
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-4 -left-4 bg-noir border border-gold/30 rounded-2xl shadow-gold p-4"
          >
            <p className="text-sm font-bold text-gold">+2.300 alunas</p>
            <p className="text-xs text-ivory/60">já transformaram o seu look 💄</p>
          </motion.div>

          {/* Live viewers badge */}
          <motion.div
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-4 right-4 bg-urgency/90 text-ivory text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5"
          >
            <span className="w-2 h-2 bg-ivory rounded-full animate-pulse" />
            47 pessoas a ver agora
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
