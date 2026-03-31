import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Clock3, Mail, PhoneCall } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-6 bg-gradient-to-b from-background via-secondary/40 to-background min-h-screen">
        <section className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              WanderTrails India
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">
              Let Us Plan Your Next Escape
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Share your travel details and our team will get back with a custom
              offbeat India itinerary.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
            <aside className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Why Inquire With Us?
              </h2>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                We specialize in hidden gems, curated stays, local experiences,
                and practical travel advice designed around your timeline and
                budget.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock3 className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-body font-semibold text-foreground">
                      Fast Response
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      Replies within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneCall className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-body font-semibold text-foreground">
                      Travel Consultation
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      Personalized planning support
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-body font-semibold text-foreground">
                      Clear Itinerary Summary
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      Day-wise recommendation with pricing
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
