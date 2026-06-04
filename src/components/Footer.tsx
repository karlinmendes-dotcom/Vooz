export const Footer = () => {
  return (
    <footer id="footer" className="bg-[hsl(var(--section-bg-7))]">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20">
        <a
          rel="noreferrer noopener"
          href="/"
          className="font-bold text-xl flex items-center gap-2"
        >
          <img
            src="/logo_no_background.png"
            alt="Ansora"
            className="h-8 w-8"
          />
          Ansora
        </a>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2026 Ansora{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/company/ansora-ai/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Ansora
          </a>
        </h3>
      </section>
    </footer>
  );
};
