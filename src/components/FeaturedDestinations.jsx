import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allDestinations } from "@/lib/destinations";
import { Button } from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

const destinations = allDestinations.slice(0, 4);

const FeaturedDestinations = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
      });

      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.15,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="section-heading text-center mb-16">
          <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Handpicked For You
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Featured Destinations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <div
              key={dest.name}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="font-body text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  {dest.location}
                </p>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {dest.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => navigate("/destinations")}
            size="bg"
            className="cursor-pointer font-body font-semibold px-8 py-3.5 rounded-lg inline-block hover:opacity-90 transition-opacity"
          >
            View All Destinations →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
