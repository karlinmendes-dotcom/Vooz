import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center"
          >
            <LogoIcon />
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
              Vooz
            </span>
          </a>
          <p className="text-muted-foreground mt-4 max-w-xs">
            Soluções digitais para negócios que trabalham com agendamento.
            Chega de perder clientes por falta de organização.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Produto</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="/#features"
              className="opacity-60 hover:opacity-100"
            >
              Funcionalidades
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="/#pricing"
              className="opacity-60 hover:opacity-100"
            >
              Planos e Preços
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="/#howItWorks"
              className="opacity-60 hover:opacity-100"
            >
              Como Funciona
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Para quem?</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Barbearias
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Salões de Beleza
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Clínicas de Estética
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Studios
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Suporte</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Central de Ajuda
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://wa.me/5511999999999"
              className="opacity-60 hover:opacity-100"
            >
              WhatsApp
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Contato
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Redes Sociais</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text font-bold">
            Vooz
          </span>
          . Todos os direitos reservados.
        </h3>
      </section>
    </footer>
  );
};