import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string | React.ReactNode;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is this another AI copy tool?",
    answer: "No. Ansora doesn’t invent. It translates reality. It works only with what practitioners already say when work breaks.",    value: "item-1",
  },
  {
    question: "Where does the data come from?",    answer:
    "From real environments: technical forums, blogs, podacasts and YouTube channels.",  value: "item-2",
  },
  {
    question:
    "What makes this different from “customer research”?",
    answer:
    "Research asks questions. Ansora listens to what people say when no one is asking.",    value: "item-3",
  },
  {
    question:
      "Can I use this on existing copy?",
    answer:
      "Yes. Drop any text in and see, line by line, where it aligns with the market, and where it drifts.",
    value: "item-4",
  },
  {
    question: "How do we get started with Ansora?",
    answer: (
      <>
        <Link to="/book-a-demo" className="text-primary font-medium underline underline-offset-4 hover:no-underline">
          Book a short demo
        </Link>{" "}
        to align on your market and audience. Onboarding takes minutes. You then get a full month to explore Ansora hands-on, free. By the end of the month, it’s very clear whether Ansora reflects your market’s reality or not.
      </>
    ),
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32 bg-[hsl(var(--section-bg-6))]"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
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

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
