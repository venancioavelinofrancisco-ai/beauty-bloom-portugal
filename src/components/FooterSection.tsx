const FooterSection = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container text-center">
      <p className="font-display text-xl font-bold mb-2">Automaquiagem Portugal 💄</p>
      <p className="text-primary-foreground/60 text-sm mb-6">
        Curso desenhado para mulheres portuguesas que querem realçar a sua beleza natural.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {[
          "#automaquiagemportugal", "#maquilhagemparatodas", "#truquesdemaquilhagem",
          "#cursodeautomaquiagem", "#primorportugal", "#dicasdebeleza", "#põetebonita",
        ].map((tag) => (
          <span key={tag} className="bg-primary-foreground/10 text-primary-foreground/70 text-xs px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-primary-foreground/40 text-xs">
        © {new Date().getFullYear()} Automaquiagem PT. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default FooterSection;
