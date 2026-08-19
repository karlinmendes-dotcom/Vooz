import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
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

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Organize seus agendamentos, gerencie seus clientes e profissionalize
          seu negócio com uma plataforma feita para quem trabalha com
          horário marcado.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-auto px-8">
            Solicitar Demonstração
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
          Sem cartão de crédito · Sem burocracia · Suporte incluso
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