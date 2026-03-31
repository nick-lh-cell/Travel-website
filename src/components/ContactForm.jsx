import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { allDestinations } from "@/lib/destinations";
import { toast } from "sonner";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const apiBaseUrl = import.meta.env.BASE_URL || "http://localhost:3000";

      const res = await fetch(`${apiBaseUrl}/api/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      toast.success("Inquiry sent successfully!");
      reset();
    } catch (err) {
      console.log("Error in contact page", err);

      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
        Plan Your Trip
      </h2>
      <p className="font-body text-sm text-muted-foreground mb-6">
        Fill in your details and we will connect with a tailored itinerary
        quote.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              className="block font-body text-sm font-medium text-foreground mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <Input
              id="name"
              placeholder="Aarav Sharma"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="font-body text-xs text-destructive mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="block font-body text-sm font-medium text-foreground mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <Input
              id="phone"
              placeholder="+91 98765 43210"
              {...register("phone", {
                required: "Phone is required",
                minLength: { value: 10, message: "Enter a valid phone number" },
              })}
            />
            {errors.phone && (
              <p className="font-body text-xs text-destructive mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            className="block font-body text-sm font-medium text-foreground mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="font-body text-xs text-destructive mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            className="block font-body text-sm font-medium text-foreground mb-2"
            htmlFor="destination"
          >
            Destination of Interest
          </label>
          <Input
            id="destination"
            list="destinations-list"
            placeholder="Spiti Valley, Himachal Pradesh"
            {...register("destination", {
              required: "Destination is required",
            })}
          />
          <datalist id="destinations-list">
            {allDestinations.map((dest) => (
              <option
                key={`${dest.name}-${dest.location}`}
                value={`${dest.name}, ${dest.location}`}
              />
            ))}
          </datalist>
          {errors.destination && (
            <p className="font-body text-xs text-destructive mt-1">
              {errors.destination.message}
            </p>
          )}
        </div>

        <div>
          <label
            className="block font-body text-sm font-medium text-foreground mb-2"
            htmlFor="dates"
          >
            Travel Dates
          </label>
          <Input
            id="dates"
            placeholder="e.g. 12 Jun 2026 - 18 Jun 2026"
            {...register("dates", { required: "Travel dates are required" })}
          />
          {errors.dates && (
            <p className="font-body text-xs text-destructive mt-1">
              {errors.dates.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-11 text-sm font-semibold"
        >
          {isSubmitting ? "Sending your inquiry..." : "Submit Inquiry"}
        </Button>
      </form>
    </div>
  );
}
