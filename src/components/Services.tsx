import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Agendamento Profissional",
    description:
      "Seus clientes acessam sua página e escolhem o melhor horário. Tudo automático, sem filas, sem mensagens perdidas.",
    icon: <ChartIcon />,
  },
  {
    title: "Gestão Completa",
    description:
      "Controle entradas, saídas, comissões e relatórios. Saiba exatamente quanto seu negócio fatura por dia, semana e mês.",
    icon: <WalletIcon />,
  },
  {
    title: "CRM Inteligente",
    description:
      "Conheça cada cliente pelo nome. Saiba o que ele gosta, quando veio pela última vez e quanto gastou. Retenha mais clientes.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Feito para seu{" "}
            </span>
            Negócio
          </h2>

          <p className="text-muted-foreground text-lg sm:text-xl mt-4 mb-8">
            Soluções personalizadas para barbearias, salões de beleza, clínicas
            de estética, studios e qualquer profissional que trabalha com
            agendamento.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[200px] sm:w-[300px] md:w-[500px] lg:w-[600px] object-contain hidden md:block"
          alt="Soluções Vooz"
        />
      </div>
    </section>
  );
};