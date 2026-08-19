import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
          <img
            src={pilot}
            alt=""
            className="w-[200px] sm:w-[300px] object-contain rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Por que{" "}
                </span>
                a Vooz?
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground mt-4">
                Chegamos ao mercado com um objetivo claro: <strong>digitalizar
                e organizar os pequenos negócios locais</strong>. Sabemos que
                donos de barbearias, salões e clínicas não têm tempo para
                complicação. Por isso criamos uma plataforma simples,
                profissional e poderosa que faz tudo funcionar enquanto você
                foca no que faz de melhor: atender seus clientes.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};