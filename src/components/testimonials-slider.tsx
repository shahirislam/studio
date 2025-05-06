// src/components/testimonials-slider.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    title: "Homeowner, Dhaka",
    quote: "Advance Interior transformed our apartment into a dream home. Their attention to detail and creative vision are unparalleled. Highly recommended!",
    avatarSrc: "https://picsum.photos/100/100?random=11",
    avatarFallback: "AK",
    dataAiHint: "woman portrait"
  },
  {
    id: 2,
    name: "Rahim Ahmed",
    title: "Business Owner, Gulshan",
    quote: "The team designed our new office space, and it's fantastic. It perfectly reflects our brand and has improved employee morale. Professional and efficient.",
    avatarSrc: "https://picsum.photos/100/100?random=12",
    avatarFallback: "RA",
    dataAiHint: "man portrait"
  },
  {
    id: 3,
    name: "Fatima Chowdhury",
    title: "Apartment Resident, Banani",
    quote: "Working with Advance Interior was a pleasure. They listened to our needs and delivered a design that exceeded our expectations. The quality of work is exceptional.",
    avatarSrc: "https://picsum.photos/100/100?random=13",
    avatarFallback: "FC",
    dataAiHint: "woman smiling"
  },
  {
    id: 4,
    name: "Imran Hasan",
    title: "Restaurant Owner",
    quote: "They helped us create a unique and inviting atmosphere for our new restaurant. Customers love the design, and it has definitely contributed to our success.",
    avatarSrc: "https://picsum.photos/100/100?random=14",
    avatarFallback: "IH",
    dataAiHint: "man professional"
  }
];

export default function TestimonialsSlider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Simple loading state or skeleton
    return (
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">What Our Clients Say</h2>
          <div className="h-64 bg-muted rounded-lg animate-pulse flex items-center justify-center">
            <p className="text-foreground">Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from satisfied clients who have experienced the Advance Interior difference.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[Autoplay({ delay: 6000, stopOnInteraction: true })]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-lg bg-background">
                    <CardContent className="flex flex-col items-center text-center p-6 pt-12 relative">
                      <Quote className="absolute top-4 left-4 h-8 w-8 text-accent/50 transform rotate-180" />
                      <Avatar className="w-20 h-20 mb-4 border-2 border-accent">
                        <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                        <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                      </Avatar>
                      <p className="text-lg font-semibold text-foreground mb-1">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground mb-4">{testimonial.title}</p>
                      <p className="text-sm text-muted-foreground italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <Quote className="absolute bottom-4 right-4 h-8 w-8 text-accent/50" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-12" />
          <CarouselNext className="hidden sm:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
}
