const FooterSection = () => (
  <footer className="bg-rose-deep text-ivory py-12">
    <div className="container text-center">
      <p className="font-display text-xl font-bold mb-2 text-ivory">Automaquiagem Portugal 💄</p>
      <p className="text-ivory/60 text-sm mb-6">
        Curso desenhado para mulheres portuguesas que querem realçar a sua beleza natural.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {[
          "#automaquiagemportugal", "#maquilhagemparatodas", "#truquesdemaquilhagem",
          "#cursodeautomaquiagem", "#primorportugal", "#dicasdebeleza", "#põetebonita",
        ].map((tag) => (
          <span key={tag} className="bg-ivory/10 text-ivory/70 text-xs px-3 py-1 rounded-full border border-ivory/20">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-ivory/30 text-xs">
        © {new Date().getFullYear()} Automaquiagem PT. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default FooterSection;
