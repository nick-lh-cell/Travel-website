import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "./ui/button";
import ShinyText from "./ShinyText";
import VariableProximity from "./VariableProximity";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const containerRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Set initial hidden state
    gsap.set(
      [
        headingRef.current,
        containerRef.current,
        subRef.current,
        ctaRef.current,
      ],
      {
        opacity: 0,
      },
    );
    gsap.set(headingRef.current, { y: 60 });
    gsap.set(containerRef.current, { y: -60 });
    gsap.set(subRef.current, { y: 40 });
    gsap.set(ctaRef.current, { y: 30 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(headingRef.current, { y: 0, opacity: 1, duration: 1, delay: 0.3 })
      .to(containerRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
      .to(subRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
      .to(ctaRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4");
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt="Breathtaking landscape of India"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className="relative font-serif text-7xl  tracking-tighter leading-[0.85] antialiased"
          ref={containerRef}
        >
          <VariableProximity
            label={"Discover India's"}
            className={"variable-proximity-demo text-white"}
            fromFontVariationSettings="'wght' 700, 'opsz' 9"
            toFontVariationSettings="'wght' 1200, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
        <h1
          ref={headingRef}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6"
        >
          <ShinyText
            text={"Hidden Wonders"}
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="orange"
            spread={120}
            direction="left"
            yoyo={false}
            className="italic"
            pauseOnHover={false}
            disabled={false}
          />
        </h1>
        <p
          ref={subRef}
          className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
        >
          Journey beyond the ordinary. Explore offbeat trails, ancient villages,
          and untouched landscapes that most travellers never see.
        </p>
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => navigate("/destinations")}
            size="bg"
            className="  font-semibold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Explore Destinations
          </Button>
          <Button
            onClick={() => navigate("/contact")}
            size="bg"
            className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground font-body font-semibold px-8 py-4 rounded-lg text-lg hover:bg-primary-foreground/20 transition-colors"
          >
            Plan My Trip
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
