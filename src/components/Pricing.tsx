import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  subtitle: string;
  popular: PopularPlanType;
  monthlyPrice: number;
  implementationPrice: number;
  description: string;
  idealFor: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Essencial",
    subtitle: "PLANO 1",
    popular: 0,
    monthlyPrice: 97,
    implementationPrice: 447,
    description: "Perfeito para profissionais e pequenos negócios que querem sair do agendamento manual e começar a organizar seus atendimentos de forma profissional.",
    idealFor: "Profissionais e pequenos negócios que querem organizar seus atendimentos",
    buttonText: "Contratar Essencial",
    benefitList: [
      "Sistema de agendamento online",
      "Página profissional de agendamento",
      "Cadastro de serviços",
      "Cadastro de horários de atendimento",
      "Configuração dos dias de funcionamento",
      "Bloqueio de horários indisponíveis",
      "Cadastro e gerenciamento de clientes",
      "Painel administrativo básico",
      "Visualização dos agendamentos",
      "Configuração das informações do negócio",
      "Personalização básica da identidade visual",
      "Responsividade para celular",
      "Manutenção técnica",
      "Hospedagem/infraestrutura",
      "Suporte básico",
    ],
  },
  {
    title: "Profissional",
    subtitle: "PLANO 2",
    popular: 1,
    monthlyPrice: 147,
    implementationPrice: 747,
    description: "Para negócios que querem além de organizar os agendamentos, melhorar o relacionamento com seus clientes e automatizar parte da operação.",
    idealFor: "Negócios que querem melhorar o relacionamento com clientes e automatizar",
    buttonText: "Contratar Profissional",
    benefitList: [
      "Tudo do Plano Essencial",
      "CRM de clientes",
      "Histórico de clientes",
      "Organização do relacionamento com clientes",
      "Status dos clientes",
      "Automação de confirmações",
      "Lembretes de agendamento",
      "Gestão mais completa da agenda",
      "Regras personalizadas do estabelecimento",
      "Página profissional mais completa",
      "Personalização visual avançada",
      "Recursos para retenção e retorno de clientes",
      "Relatórios básicos",
      "Recursos adicionais de gestão",
      "Suporte prioritário",
      "Manutenção e atualizações",
    ],
  },
  {
    title: "Premium",
    subtitle: "PLANO 3",
    popular: 0,
    monthlyPrice: 197,
    implementationPrice: 997,
    description: "Para negócios que querem uma solução digital completa, com automação, inteligência e maior controle da operação.",
    idealFor: "Negócios que querem solução completa com IA e automação avançada",
    buttonText: "Contratar Premium",
    benefitList: [
      "Tudo do Plano Profissional",
      "Sistema completo de agendamento",
      "CRM completo",
      "Histórico e relacionamento com clientes",
      "Automações avançadas",
      "Recursos inteligentes de atendimento",
      "Assistente de IA configurado para o negócio",
      "IA baseada nas informações e regras do negócio",
      "Automação de comunicação",
      "Recursos avançados de retenção de clientes",
      "Relatórios e indicadores",
      "Painel administrativo avançado",
      "Personalização avançada da plataforma",
      "Configurações específicas para o negócio",
      "Integrações disponíveis conforme a estrutura",
      "Suporte prioritário",
      "Manutenção contínua",
      "Atualizações da plataforma",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Escolha o{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Plano Ideal
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Escolha a solução ideal para transformar seu atendimento em uma experiência mais profissional, organizada e inteligente.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={`relative flex flex-col ${
              pricing.popular === PopularPlanType.YES
                ? "border-primary shadow-xl shadow-primary/10 scale-[1.02]"
                : ""
            }`}
          >
            {/* Popular Badge */}
            {pricing.popular === PopularPlanType.YES && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1">
                  Mais escolhido
                </Badge>
              </div>
            )}

            <CardHeader className="text-center pt-8">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                {pricing.subtitle}
              </p>
              <CardTitle className="text-2xl mt-2">{pricing.title}</CardTitle>

              {/* Monthly Price */}
              <div className="mt-4">
                <span className="text-4xl font-bold">R${pricing.monthlyPrice}</span>
                <span className="text-muted-foreground">/mês</span>
              </div>

              {/* Implementation Price */}
              <div className="mt-2 text-sm">
                <span className="text-muted-foreground">Implementação: </span>
                <span className="font-semibold">R${pricing.implementationPrice}</span>
                <span className="text-muted-foreground"> (pagamento único)</span>
              </div>

              <p className="text-sm text-muted-foreground mt-4 text-left">
                {pricing.description}
              </p>
            </CardHeader>

            <CardContent className="flex-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Ideal para:
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                {pricing.idealFor}
              </p>

              <Button
                className={`w-full ${
                  pricing.popular === PopularPlanType.YES
                    ? ""
                    : "variant-outline"
                }`}
                variant={pricing.popular === PopularPlanType.YES ? "default" : "outline"}
              >
                {pricing.buttonText}
              </Button>
            </CardContent>

            <hr className="w-4/5 mx-auto mb-4" />

            <CardFooter className="flex flex-col items-start">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                O que está incluído:
              </p>
              <div className="space-y-3 w-full">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex items-start text-sm"
                  >
                    <Check className="text-green-500 h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="ml-2">{benefit}</span>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-12 space-y-2">
        <p className="text-sm text-muted-foreground">
          <strong>Implementação</strong> = pagamento único &nbsp;|&nbsp;
          <strong>Mensalidade</strong> = pagamento recorrente
        </p>
        <p className="text-sm text-muted-foreground">
          Todos os planos incluem hospedagem, manutenção e suporte.
        </p>
        <p className="text-sm text-muted-foreground">
          Integrações e recursos de terceiros sujeitos à disponibilidade e configuração.
        </p>
      </div>
    </section>
  );
};