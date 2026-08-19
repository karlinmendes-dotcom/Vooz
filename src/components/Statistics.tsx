export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "500+",
      description: "Negócios",
    },
    {
      quantity: "15K+",
      description: "Agendamentos",
    },
    {
      quantity: "98%",
      description: "Satisfação",
    },
    {
      quantity: "24/7",
      description: "Suporte",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-1 text-center"
          >
            <h2 className="text-2xl sm:text-4xl font-bold">{quantity}</h2>
            <p className="text-sm sm:text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};