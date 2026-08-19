import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=33",
    name: "Carlos Silva",
    userName: "Barbearia do Zé — São Paulo",
    comment:
      "Reduziu 70% das faltas com os lembretes automáticos. Meus clientes elogiam a facilidade de agendar pelo celular.",
  },
  {
    image: "https://i.pravatar.cc/150?img=47",
    name: "Ana Souza",
    userName: "Studio Belle — Rio de Janeiro",
    comment:
      "Agora sei exatamente o que cada cliente gosta e quando veio da última vez. Isso faz toda a diferença no atendimento.",
  },
  {
    image: "https://i.pravatar.cc/150?img=53",
    name: "Pedro Santos",
    userName: "Barber Shop Premium — Minas Gerais",
    comment:
      "O painel financeiro me mostra exatamente quanto cada barbeiro gerou no mês. Controle total sem complicação.",
  },
  {
    image: "https://i.pravatar.cc/150?img=25",
    name: "Maria Oliveira",
    userName: "Clínica Wellness — Bahia",
    comment:
      "Meus pacientes adoram agendar pelo app. Prático, rápido e sem filas. Profissionalizou totalmente meu atendimento.",
  },
  {
    image: "https://i.pravatar.cc/150?img=11",
    name: "Lucas Ferreira",
    userName: "Pet Love — Paraná",
    comment:
      "Transformou a gestão do meu pet shop. Agendamentos e pagamentos no mesmo lugar, tudo organizado.",
  },
  {
    image: "https://i.pravatar.cc/150?img=5",
    name: "Fernanda Costa",
    userName: "Nail Art Studio — Pernambuco",
    comment:
      "Super fácil de usar. Meus clientes elogiam a praticidade. Parece que o sistema foi feito especialmente pra mim.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        O que nossos{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          clientes{" "}
        </span>
        dizem
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8 text-center px-4">
        Mais de 500 negócios já transformaram sua gestão com o Vooz.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt={name}
                    src={image}
                  />
                  <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};