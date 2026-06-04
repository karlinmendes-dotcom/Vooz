import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import sigalImg from "../assets/sigal.jpg";
import avnerImg from "../assets/avner.jpg";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: sigalImg,
    name: "Sigal Malki",
    position: "Co-Founder and CEO",
    description:
      "Product leader with 10+ years turning real user pain into products people actually use.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/sigal-mendel-malki-156062152/",
      },
    ],
  },
  {
    imageUrl: avnerImg,
    name: "Avner Freiberger",
    position: "Co-Founder and CTO",
    description:
      "Data & AI leader focused on extracting real signal from messy, real-world data.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/avnerfreiberger/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32 bg-[hsl(var(--section-bg-5))]"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Built by people who’ve lived the problem{" "}
        </span>
        
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
      Product and data leaders obsessed with turning real-world pain into real signals.
      
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-10 max-w-4xl mx-auto">
        {teamList.map(
          ({ imageUrl, name, position, description, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>{description}</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
