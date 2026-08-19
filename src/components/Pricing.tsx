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
  popular: PopularPlanType;
  monthlyPrice: number;
  implementationPrice: number;
  freeTrial?: string;
  description: string;
  idealFor: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Essencial",
    popular: 0,
    monthlyPrice: 97,
    implementationPrice: 447,
    freeTrial: "30 dias grátis",
    description: "Perfeito para profissionais e pequenos negócios que querem sair do agendamento manual e começar a organizar seus atendimentos de forma profissional.",
    idealFor: "Profissionais e pequenos negócios que querem organizar seus atendimentos",
    buttonText: "Começar Grátis",
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
    popular: 1,
    monthlyPrice: 147,
    implementationPrice: 747,
    description: "Para negócios que querem além de organizar os agendamentos, melhorar o relacionamento com seus clientes e automatizar parte da operação.",
    idealFor: "Negócios que querem melhorar o relacionamento com clientes e automatizar",
    buttonText: "Contratar Profissional",
    benefitList: [
      "Tudo do Plano Essencial",
      "CRM de clientes completo",
      "Histórico de clientes",
      "Organização do relacionamento com clientes",
      "Status dos clientes",
      "Automação de confirmações",
      "Lembretes de agendamento por WhatsApp",
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
    popular: 0,
    monthlyPrice: 197,
    implementationPrice: 997,
    description: "Para negócios que querem uma solução digital completa, com automação, inteligência e maior controle da operação.",
    idealFor: "Negócios que querem solução completa com IA e automação avançada",
    buttonText: "Falar com Consultor",
    benefitList: [
      "Tudo do Plano Profissional",
      "Sistema completo de agendamento",
      "CRM completo e avançado",
      "Histórico e relacionamento com clientes",
      "Automações avançadas",
      "Recursos inteligentes de atendimento",
      "Assistente de IA configurado para o negócio",
      "IA baseada nas informações e regras do negócio",
      "Automação de comunicação",
      "Integração completa com WhatsApp",
      "CRM conectado ao WhatsApp",
      "Mensagens automáticas via WhatsApp",
      "Recursos avançados de retenção de clientes",
      "Relatórios e indicadores avançados",
      "Painel administrativo avançado",
      "Personalização avançada da plataforma",
      "Configurações específicas para o negócio",
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
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto px-4">
          Escolha a solução ideal para transformar seu atendimento em uma experiência mais profissional, organizada e inteligente.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
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
              <CardTitle className="text-2xl">{pricing.title}</CardTitle>

              {/* Free Trial Badge */}
              {pricing.freeTrial && (
                <Badge variant="secondary" className="mx-auto mt-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  {pricing.freeTrial}
                </Badge>
              )}

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
      <div className="text-center mt-12 space-y-2 px-4">
        <p className="text-sm text-muted-foreground">
          <strong>Implementação</strong> = pagamento único &nbsp;|&nbsp;
          <strong>Mensalidade</strong> = pagamento recorrente
        </p>
        <p className="text-sm text-muted-foreground">
          Plano Essencial com <strong>30 dias grátis</strong>. Cancele quando quiser.
        </p>
        <p className="text-sm text-muted-foreground">
          Integrações com WhatsApp e IA disponíveis no Plano Premium.
        </p>
      </div>
    </section>
  );
};