import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        <div className="sm:col-span-2 md:col-span-1">
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
          <p className="text-muted-foreground mt-4 max-w-xs text-sm">
            Soluções digitais para negócios que trabalham com agendamento.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Produto</h3>
          <div>
            <a href="/#features" className="opacity-60 hover:opacity-100 text-sm">
              Funcionalidades
            </a>
          </div>
          <div>
            <a href="/#pricing" className="opacity-60 hover:opacity-100 text-sm">
              Planos e Preços
            </a>
          </div>
          <div>
            <a href="/#howItWorks" className="opacity-60 hover:opacity-100 text-sm">
              Como Funciona
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Suporte</h3>
          <div>
            <a href="https://wa.me/5527998041197" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 text-sm">
              Chame no WhatsApp
            </a>
          </div>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100 text-sm">
              Central de Ajuda
            </a>
          </div>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100 text-sm">
              Contato
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Redes Sociais</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100 text-sm">
              Instagram
            </a>
          </div>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100 text-sm">
              YouTube
            </a>
          </div>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100 text-sm">
              TikTok
            </a>
          </div>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100 text-sm">
              Facebook
            </a>
          </div>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100 text-sm">
              Grupo Meta
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center px-4">
        <h3 className="text-sm">
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