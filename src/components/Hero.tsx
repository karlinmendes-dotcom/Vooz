import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 px-4">
      <div className="text-center lg:text-start space-y-6">
        <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
          🚀 Chegamos para transformar pequenos negócios
        </Badge>

        <main className="text-4xl sm:text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
              Transforme
            </span>{" "}
          </h1>
          <h2 className="inline">
            <span className="inline">
              seu atendimento em uma
            </span>{" "}
          </h2>
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              experiência profissional
            </span>{" "}
          </h2>
        </main>

        <p className="text-lg sm:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Chega de perder clientes por falta de organização. Com o Vooz, seus
          clientes agendam pelo celular, recebem lembretes automáticos e você
          gerencia tudo em um só lugar.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-auto px-8">
            Testar Grátis por 30 Dias
          </Button>

          <a
            rel="noreferrer noopener"
            href="/#pricing"
            className={`w-full md:w-auto px-8 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Ver Planos
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          30 dias grátis no plano Essencial · Sem cartão de crédito
        </p>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};