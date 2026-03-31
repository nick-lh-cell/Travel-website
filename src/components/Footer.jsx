const Footer = () => (
  <footer className="bg-foreground py-12 px-6">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl font-bold text-primary-foreground">
            Wander<span className="text-accent">Trails</span> India
          </p>
          <p className="font-body text-sm text-primary-foreground/60 mt-1">
            Discover the road less travelled.
          </p>
        </div>
        <div className="flex gap-6">
          {["Home", "Destinations", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
        <p className="font-body text-xs text-primary-foreground/40">
          © 2026 WanderTrails India. All rights reserved. This is a fictional
          travel company.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
