import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.set(navRef.current, { y: -80, opacity: 0 });
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="font-display text-2xl font-bold text-foreground tracking-tight"
        >
          Wander<span className="text-primary">Trails</span>{" "}
          <span className="text-sm font-body font-normal text-muted-foreground">
            India
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Destinations", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <Button
            onClick={() => {}}
            size="md"
            className="cursor-pointer text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Plan My Trip
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-4">
          {["Home", "Destinations", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block font-body text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {item}
            </a>
          ))}
          <Button
            variant="outline"
            size="bg"
            className="block w-fit gradient-primary  font-body text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
          >
            Plan My Trip
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
