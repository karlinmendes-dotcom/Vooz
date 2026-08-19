import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Entre em contato",
    description:
      "Fale conosco pelo WhatsApp ou formulário. Entendemos seu negócio e mostramos como funciona.",
  },
  {
    icon: <MapIcon />,
    title: "Personalizamos para você",
    description:
      "Criamos sua página profissional com a identidade do seu negócio. Serviços, horários e configurações prontos.",
  },
  {
    icon: <PlaneIcon />,
    title: "Seus clientes agendam",
    description:
      "Compartilhe o link e seus clientes começam a agendarem pelo celular. Simples e rápido.",
  },
  {
    icon: <GiftIcon />,
    title: "Você gerencia tudo",
    description:
      "Acompanhe agendamentos, clientes e resultados em um painel fácil. Suporte sempre disponível.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Como{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Funciona{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Em 4 passos simples você está pronto para receber agendamentos
        profissionais.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};