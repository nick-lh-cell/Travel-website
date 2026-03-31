import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Shield, Heart, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Compass,
    title: "Offbeat Trails",
    desc: "We go where guidebooks don't — hidden gems handpicked by local explorers.",
  },
  {
    icon: Shield,
    title: "Safe & Trusted",
    desc: "Verified stays, experienced guides, and 24/7 on-trip support.",
  },
  {
    icon: Heart,
    title: "Responsible Travel",
    desc: "We partner with local communities to make every trip sustainable.",
  },
  {
    icon: MapPin,
    title: "Custom Itineraries",
    desc: "No cookie-cutter plans. Every trip is crafted around your interests.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-5xl text-center">
        <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">
          Why WanderTrails
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-16">
          Travel Different
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="feature-card flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mb-5">
                <f.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {f.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
