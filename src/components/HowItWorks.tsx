import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import hiw_icon1 from "@/assets/hiw_icon1.png";
import hiw_icon2 from "@/assets/hiw_icon2.png";
import hiw_icon3 from "@/assets/hiw_icon3.png";
import hiw_icon4 from "@/assets/hiw_icon4.png";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: hiw_icon1,
    title: "Ingest Reality",
    description:
      "Ansora continuously listens to real practitioners, across forums, Slack, podcasts, and more",
  },
  {
    icon: hiw_icon2,
    title: "Structure the experience",
    description:
      "We map who\u2019s struggling, where it happens, and what keeps coming up",
  },
  {
    icon: hiw_icon3,
    title: "Find what actually hurts",
    description:
      "See the pains people repeat, escalate, and get stuck on\u2014not one-off complaints.",
  },
  {
    icon: hiw_icon4,
    title: "Write like an insider",
    description:
      "Use real language from real moments, the kind that makes people say: \u201cYeah. That\u2019s my day.\u201d",
  },
];

const IDLE_ANIMS = [
  { cls: "hiw-icon-float",  duration: 1700 },
  { cls: "hiw-icon-wobble", duration: 1500 },
  { cls: "hiw-icon-pulse",  duration: 1300 },
  { cls: "hiw-icon-spin",   duration: 1900 },
];

export const HowItWorks = () => {
  const [idleAnim, setIdleAnim] = useState<{ index: number; cls: string } | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scheduleRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clearRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const scheduleNext = () => {
      const delay = 2000 + Math.random() * 2000; // 2–4s gap
      scheduleRef.current = setTimeout(() => {
        const iconIndex = Math.floor(Math.random() * features.length);
        const anim = IDLE_ANIMS[Math.floor(Math.random() * IDLE_ANIMS.length)];
        setIdleAnim({ index: iconIndex, cls: anim.cls });
        clearRef.current = setTimeout(() => {
          setIdleAnim(null);
          scheduleNext();
        }, anim.duration);
      }, delay);
    };

    scheduleNext();
    return () => {
      if (scheduleRef.current) clearTimeout(scheduleRef.current);
      if (clearRef.current) clearTimeout(clearRef.current);
    };
  }, []);

  const getIconClass = (index: number) => {
    if (hoveredIndex === index) return "hiw-icon-pop";
    if (idleAnim?.index === index) return idleAnim.cls;
    return "";
  };

  return (
    <section
      id="howitworks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Ansora{" "}
        </span>
        turns noise into signal
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        From raw conversations to insights you can actually use
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }, index) => (
          <Card
            key={title}
            className="bg-muted/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/40 cursor-default"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                <img
                  src={icon}
                  alt=""
                  aria-hidden
                  className={`w-12 h-12 object-contain ${getIconClass(index)}`}
                />
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
