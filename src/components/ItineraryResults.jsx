import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Lightbulb } from "lucide-react";

const ItineraryResults = ({ itinerary }) => {
  if (!itinerary || !itinerary.days || itinerary.days.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No itinerary data available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Accordion
        type="single"
        collapsible
        defaultValue="day-1"
        className="w-full"
      >
        {itinerary.days.map((dayItem, index) => (
          <AccordionItem
            key={index}
            value={`day-${dayItem.day}`}
            className="border-b border-border last:border-b-0"
          >
            <AccordionTrigger className="hover:no-underline hover:text-primary">
              <span className="text-left">
                <span className="font-semibold text-foreground">
                  Day {dayItem.day}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <div className="space-y-4">
                {/* Places Section */}
                {dayItem.places && dayItem.places.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-foreground">
                        Places to Visit
                      </h4>
                    </div>
                    <ul className="space-y-2 pl-7">
                      {dayItem.places.map((place, idx) => (
                        <li
                          key={idx}
                          className="text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1 inline-block">
                            •
                          </span>
                          <span>{place}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tips Section */}
                {dayItem.tips && dayItem.tips.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="h-5 w-5 text-amber-500" />
                      <h4 className="font-semibold text-foreground">
                        Travel Tips
                      </h4>
                    </div>
                    <ul className="space-y-2 pl-7">
                      {dayItem.tips.map((tip, idx) => (
                        <li
                          key={idx}
                          className="text-muted-foreground flex items-start gap-2 text-sm"
                        >
                          <span className="text-amber-500 mt-1 inline-block">
                            →
                          </span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-900">
          <strong>💡 Tip:</strong> Expand each day to see detailed places to
          visit and helpful travel tips for your journey!
        </p>
      </div>
    </div>
  );
};

export default ItineraryResults;
