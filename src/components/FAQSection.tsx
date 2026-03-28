import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Para quem é este curso?",
    a: "Para qualquer mulher que queira aprender a maquilhar-se sozinha — seja iniciante ou já com alguma prática. O conteúdo é adaptado ao dia a dia e usa produtos acessíveis em Portugal.",
  },
  {
    q: "Preciso de ter produtos caros?",
    a: "Não! Ensinamos técnicas com produtos que encontras facilmente na Primor, Wells e Sephora. Tens sugestões para todos os orçamentos.",
  },
  {
    q: "Durante quanto tempo tenho acesso?",
    a: "O acesso é vitalício. Podes ver e rever as aulas quantas vezes quiseres, ao teu ritmo.",
  },
  {
    q: "E se não gostar do curso?",
    a: "Tens 7 dias de garantia total. Se não ficares satisfeita, devolvemos o teu dinheiro sem perguntas.",
  },
  {
    q: "Recebo certificado?",
    a: "Sim! Ao concluíres todas as aulas recebes um certificado digital de conclusão.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "O pagamento é seguro, por Multibanco, MB Way ou cartão de crédito/débito. Recebes o acesso imediatamente após a confirmação.",
  },
];

const FAQSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <span className="text-sm font-bold uppercase tracking-widest text-rose-deep mb-2 block">
          Dúvidas?
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Perguntas Frequentes
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-2xl px-5 overflow-hidden"
            >
              <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground py-4 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
