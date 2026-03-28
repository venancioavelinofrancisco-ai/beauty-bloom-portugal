import { motion } from "framer-motion";
import heroImg from "@/assets/hero-makeup.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center">
    {/* Decorative blobs */}
    <div className="absolute top-10 right-10 w-72 h-72 bg-accent rounded-full blur-3xl opacity-60" />
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-40" />

    <div className="container relative z-10 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            🇵🇹 Exclusivo para Portugal
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-gradient-primary">Põe-te bonita</span>
            <br />
            <span className="text-foreground">à tua maneira</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            Aprende automaquiagem passo a passo, com vídeos curtos e produtos que encontras na{" "}
            <strong className="text-secondary-foreground">Primor, Wells e Sephora</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#preco"
              className="bg-gradient-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-full shadow-elevated hover:scale-105 transition-transform text-center"
            >
              Garante a tua vaga — 27,99€
            </a>
            <a
              href="#resultados"
              className="border-2 border-primary text-primary font-semibold px-8 py-4 rounded-full hover:bg-accent transition-colors text-center"
            >
              Ver resultados ✨
            </a>
          </div>

          <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
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
          <div className="relative rounded-3xl overflow-hidden shadow-elevated">
            <img
              src={heroImg}
              alt="Mulher portuguesa a maquilhar-se ao espelho"
              width={1280}
              height={720}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-card p-4"
          >
            <p className="text-sm font-bold text-secondary-foreground">+2.300 alunas</p>
            <p className="text-xs text-muted-foreground">já transformaram o seu look 💄</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
