import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import "./App.css";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

function PaymentSuccess() {
  return (
    <div className="container py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Pagamento Aprovado! ✅</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Seu pagamento foi processado com sucesso.
      </p>
      <a href="/" className="text-primary underline">
        Voltar para a página inicial
      </a>
    </div>
  );
}

function PaymentFailure() {
  return (
    <div className="container py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Pagamento Não Aprovado ❌</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Houve um problema com seu pagamento. Por favor, tente novamente.
      </p>
      <a href="/" className="text-primary underline">
        Voltar para a página inicial
      </a>
    </div>
  );
}

function PaymentPending() {
  return (
    <div className="container py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Pagamento Pendente ⏳</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Seu pagamento está sendo processado. Você receberá uma confirmação em breve.
      </p>
      <a href="/" className="text-primary underline">
        Voltar para a página inicial
      </a>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/payment/success" element={<PaymentSuccess />} />
      <Route path="/payment/failure" element={<PaymentFailure />} />
      <Route path="/payment/pending" element={<PaymentPending />} />
    </Routes>
  );
}

export default App;