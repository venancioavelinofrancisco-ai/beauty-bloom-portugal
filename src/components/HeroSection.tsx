import { motion } from "framer-motion";
import heroImg from "@/assets/hero-makeup.jpg";
import { Flame, ShieldCheck, Award, Play } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center">
    {/* Subtle decorative blobs */}
    <div className="absolute top-20 right-20 w-64 h-64 bg-ivory/8 rounded-full blur-3xl" />
    <div className="absolute bottom-20 left-10 w-80 h-80 bg-ivory/5 rounded-full blur-3xl" />

    <div className="container relative z-10 py-12 md:py-20">
      {/* ── Header / Title Block ── */}
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <span className="inline-flex items-center gap-1.5 bg-ivory/20 text-ivory text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-ivory/25">
          🇵🇹 Exclusivo para Portugal
        </span>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-5">
          <span className="text-ivory">Põe-te bonita</span>
          <br />
          <span className="text-noir">à tua maneira</span>
        </h1>

        <p className="text-ivory/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Aprende automaquiagem passo a passo, com vídeos curtos e produtos que encontras na{" "}
          <strong className="text-ivory">Primor, Wells e Sephora</strong>.
        </p>
      </motion.header>

      {/* ── Two-column layout ── */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Pain + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col items-center lg:items-start gap-5"
        >
          {/* Urgency pill */}
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="bg-urgency/15 border border-urgency/30 rounded-xl px-4 py-2.5 max-w-sm"
          >
            <p className="text-noir text-sm flex items-center gap-2">
              <Flame className="w-4 h-4 text-urgency animate-heartbeat" />
              <strong className="text-urgency">⚠️ ÚLTIMAS 17 VAGAS</strong> — O preço sobe em breve!
            </p>
          </motion.div>

          {/* Pain teaser card */}
          <div className="bg-ivory/12 border border-ivory/20 rounded-2xl p-5 max-w-sm backdrop-blur-sm">
            <p className="text-ivory font-display text-base font-semibold mb-3">Sentes que...</p>
            <ul className="space-y-2 text-ivory/75 text-sm">
              <li className="flex items-start gap-2"><span>💔</span> Gastas dinheiro em produtos que não funcionam?</li>
              <li className="flex items-start gap-2"><span>😰</span> Nunca ficas satisfeita com o resultado?</li>
              <li className="flex items-start gap-2"><span>⏰</span> Demoras demasiado e sais frustrada?</li>
            </ul>
            <p className="text-ivory font-bold text-sm mt-3">Este curso resolve tudo isso. 💄</p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
            <a
              href="#preco"
              className="flex-1 bg-ivory text-rose-deep font-bold text-base px-6 py-3.5 rounded-full shadow-elevated hover:scale-105 transition-transform text-center"
            >
              Garante a tua vaga — 27,99€
            </a>
            <a
              href="#resultados"
              className="flex-1 border-2 border-ivory/40 text-ivory font-semibold px-6 py-3.5 rounded-full hover:bg-ivory/10 transition-colors text-center"
            >
              Ver resultados ✨
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-ivory/60 mt-1">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> Acesso vitalício</span>
            <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5" /> Certificado incluído</span>
          </div>
        </motion.div>

        {/* Right: Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-rose border border-ivory/20">
            <img
              src={heroImg}
              alt="Mulher a maquilhar-se"
              width={1280}
              height={720}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/30 to-transparent" />
          </div>

          {/* Social proof badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute -bottom-3 -left-3 bg-ivory border border-rose-light/40 rounded-xl shadow-card p-3"
          >
            <p className="text-sm font-bold text-rose-deep">+2.300 alunas</p>
            <p className="text-xs text-noir/50">já transformaram o seu look 💄</p>
          </motion.div>

          {/* Live viewers */}
          <motion.div
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-3 right-3 bg-urgency/85 text-ivory text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5"
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
