import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allDestinations } from "@/lib/destinations";

gsap.registerPlugin(ScrollTrigger);

const Destinations = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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
          delay: i * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <section ref={sectionRef} className="py-24 px-6 bg-background mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="section-heading text-center mb-16">
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Explore India
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              All Destinations
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Discover our collection of offbeat and extraordinary destinations
              across India
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDestinations.map((dest, i) => (
              <div
                key={dest.name}
                ref={(el) => {
                  if (el) cardsRef.current[i] = el;
                }}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    width={640}
                    height={512}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="font-body text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    {dest.location}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {dest.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {dest.description}
                  </p>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex justify-between items-center pt-3 border-t border-border">
                      <span className="font-body text-muted-foreground">
                        Best Time
                      </span>
                      <span className="font-semibold text-foreground">
                        {dest.bestTime}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-muted-foreground">
                        Starting Price
                      </span>
                      <span className="font-semibold text-primary">
                        {dest.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Destinations;
