import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section id="hero" className="container grid lg:grid-cols-[2fr,3fr] items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="block mb-2">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Ansora
            </span>
          </h1>
          <h2 className="block">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              The Strategic Intelligence Engine
            </span>{" "}
            for Technical GTM
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Connecting your company's deepest DNA with the real-world pulse of the market to eliminate generic AI fluff.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button asChild className="w-full md:w-1/3">
            <Link to="/book-a-demo">Book a Demo</Link>
          </Button>
        </div>
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
