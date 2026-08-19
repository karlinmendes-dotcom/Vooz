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
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ChatBot } from "./components/ChatBot";
import "./App.css";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
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
      <ChatBot />
      <WhatsAppButton />
    </>
  );
}

function PaymentSuccess() {
  return (
    <div className="container py-20 text-center px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Pagamento Aprovado! ✅</h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-8">
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
    <div className="container py-20 text-center px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Pagamento Não Aprovado ❌</h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-8">
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
    <div className="container py-20 text-center px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Pagamento Pendente ⏳</h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-8">
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