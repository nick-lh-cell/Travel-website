const PlannerHero = () => {
  return (
    <section className="min-h-[50vh] flex items-center justify-center py-24 px-6 bg-gradient-to-br from-blue-50 via-background to-purple-50">
      <div className="text-center">
        <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">
          AI-Powered Travel Planning
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
          Plan Your Perfect Itinerary
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
          Tell us your destination and number of days. Our AI will craft a
          detailed day-by-day itinerary with the best places to visit and
          helpful travel tips.
        </p>
      </div>
    </section>
  );
};

export default PlannerHero;
