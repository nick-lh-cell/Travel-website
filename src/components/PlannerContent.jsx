import { useState } from "react";
import PlannerForm from "@/components/PlannerForm";
import ItineraryResults from "@/components/ItineraryResults";

const PlannerContent = () => {
  const [itinerary, setItinerary] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Column */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm h-fit">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">
              Generate Your Itinerary
            </h2>
            <PlannerForm
              setItinerary={setItinerary}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
            />
          </div>

          {/* Results Column */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">
              Your Itinerary
            </h2>
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-muted-foreground">
                    Generating your itinerary...
                  </p>
                </div>
              </div>
            ) : itinerary ? (
              <ItineraryResults itinerary={itinerary} />
            ) : (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <p className="text-muted-foreground">
                    Fill in the form to generate your personalized itinerary
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlannerContent;
