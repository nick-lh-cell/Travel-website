import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { allDestinations } from "@/lib/destinations";
import { Button } from "@/components/ui/button";
import { FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const PlannerForm = ({ setItinerary, setIsLoading, isLoading }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      destination: "",
      days: "",
    },
  });

  const onSubmit = async (values) => {
    // Validate destination
    if (!values.destination || values.destination.trim() === "") {
      toast.error("Please select a destination");
      return;
    }

    // Validate days
    const daysNum = parseInt(values.days);
    if (!values.days || isNaN(daysNum) || daysNum < 1 || daysNum > 30) {
      toast.error("Please enter days between 1 and 30");
      return;
    }

    setIsLoading(true);
    try {
      const apiUrl = import.meta.env.BASE_URL;
      const response = await fetch(`${apiUrl}/api/ai`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          destination: values.destination,
          days: daysNum.toString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate itinerary");
      }

      const data = await response.json();
      if (data.itinerary) {
        setItinerary(data.itinerary);
        toast.success("Itinerary generated successfully!");
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.message || "Failed to generate itinerary. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormItem>
        <FormLabel>Destination</FormLabel>
        <Controller
          name="destination"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value || ""}>
              <SelectTrigger>
                <SelectValue placeholder="Select a destination" />
              </SelectTrigger>
              <SelectContent>
                {allDestinations.map((dest) => (
                  <SelectItem
                    key={dest.name}
                    value={`${dest.name}, ${dest.location}`}
                  >
                    {dest.name}, {dest.location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <p className="text-xs text-muted-foreground mt-1">
          Choose from our featured Indian destinations
        </p>
        {errors.destination && (
          <FormMessage>{errors.destination.message}</FormMessage>
        )}
      </FormItem>

      <FormItem>
        <FormLabel>Number of Days</FormLabel>
        <Controller
          name="days"
          control={control}
          render={({ field }) => (
            <Input
              type="number"
              placeholder="e.g., 4"
              min="1"
              max="30"
              {...field}
            />
          )}
        />
        <p className="text-xs text-muted-foreground mt-1">
          How many days do you plan to stay? (1-30 days)
        </p>
        {errors.days && <FormMessage>{errors.days.message}</FormMessage>}
      </FormItem>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Generating..." : "Generate Itinerary"}
      </Button>
    </form>
  );
};

export default PlannerForm;
