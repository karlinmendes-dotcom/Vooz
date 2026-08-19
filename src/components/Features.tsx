import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Agendamento Online",
    description:
      "Seus clientes agendam horários pelo celular a qualquer hora, sem precisar ligar ou enviar mensagem. Reduza faltas com lembretes automáticos.",
    image: image4,
  },
  {
    title: "Clientes Organizados",
    description:
      "Tenha o histórico completo de cada cliente: preferências, visitas anteriores e informações importantes. Nunca mais perca um cliente por falta de organização.",
    image: image3,
  },
  {
    title: "Gestão Inteligente",
    description:
      "Saiba exatamente quanto fatura, quais são seus horários mais movimentados e como melhorar seus resultados com relatórios simples.",
    image: image,
  },
];

const featureList: string[] = [
  "Agendamento online",
  "Lembretes automáticos",
  "Gestão de clientes",
  "Controle financeiro",
  "Comissões automáticas",
  "Relatórios simples",
  "App para celular",
  "Suporte humanizado",
  "Identidade visual",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Tudo que seu{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Negócio Precisa
        </span>
      </h2>

      <p className="text-center text-muted-foreground max-w-2xl mx-auto">
        Chega de agendamentos pelo WhatsApp, horários desorganizados e clientes
        esquecendo compromissos. Uma solução completa para seu negócio crescer.
      </p>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt={title}
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};