import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center px-4">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            Sua dor de cabeça com{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              agendamentos{" "}
            </span>
            acabou
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Chega de perder tempo respondendo no WhatsApp, organizando agenda
            no caderno e esquecendo de confirmar horários. O Vooz faz tudo
            isso por você enquanto você foca no que faz de melhor: atender
            seus clientes.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">
            Começar com 30 Dias Grátis
          </Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            Ver Demonstração
          </Button>
        </div>
      </div>
    </section>
  );
};