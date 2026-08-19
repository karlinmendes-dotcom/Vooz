import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "O Vooz é para o meu negócio?",
    answer:
      "Sim! O Vooz foi feito para barbearias, salões de beleza, clínicas de estética, studios, nail designers, lash designers, tatuadores e qualquer profissional que trabalha com agendamento.",
    value: "item-1",
  },
  {
    question: "Preciso saber programar para usar?",
    answer:
      "Não! O Vooz é feito para donos de negócio, não para programadores. Você configura tudo pelo painel de forma simples, ou nós configuramos para você.",
    value: "item-2",
  },
  {
    question: "Como meus clientes vão agendar?",
    answer:
      "Você recebe um link personalizado. Seus clientes acessam pelo celular e escolhem o melhor horário. Simples como reservar uma mesa no restaurante.",
    value: "item-3",
  },
  {
    question: "O que está incluído na implementação?",
    answer:
      "Nós criamos sua página profissional, configuramos seus serviços, horários, dias de funcionamento e personalizamos tudo com a identidade do seu negócio.",
    value: "item-4",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim! Cancele a qualquer momento sem multa ou taxa. Seus dados ficam disponíveis por 30 dias após o cancelamento.",
    value: "item-5",
  },
  {
    question: "Tem aplicativo para celular?",
    answer:
      "Sim! O Vooz funciona como um app no celular. Seus clientes acessam pelo navegador e instalam como um app. Você também gerencia tudo pelo celular.",
    value: "item-6",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Oferecemos suporte humanizado. No plano Essencial o suporte é por email. Nos planos Profissional e Premium, você fala direto com a gente pelo WhatsApp.",
    value: "item-7",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Perguntas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Frequentes
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};