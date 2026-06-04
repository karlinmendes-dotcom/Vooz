import { useEffect } from "react";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
export const Home = () => {
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (hero) hero.scrollIntoView({ behavior: "instant", block: "start" });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
};
