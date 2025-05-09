// src/components/hero-slider.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from 'react';

const slides = [
  {
    id: 1,
    imageSrc: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Modern Living Room Design",
    headline: "Creating Spaces That Inspire",
    subheadline: "Innovative interior design and architectural solutions for modern living.",
    ctaText: "View Portfolio",
    ctaLink: "/portfolio",
    dataAiHint: "modern living room"
  },
  {
    id: 2,
    imageSrc: "https://images.pexels.com/photos/7303735/pexels-photo-7303735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Elegant Commercial Space",
    headline: "Transforming Visions into Reality",
    subheadline: "Expert design services for residential and commercial properties.",
    ctaText: "Our Services",
    ctaLink: "/services",
    dataAiHint: "office interior"
  },
  {
    id: 3,
    imageSrc: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Luxury Bedroom Interior",
    headline: "Experience the Art of Design",
    subheadline: "Bespoke interiors tailored to your unique style and needs.",
    ctaText: "Get a Consultation",
    ctaLink: "/contact",
    dataAiHint: "luxury bedroom"
  },
];

export default function HeroSlider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="relative w-full h-[calc(100vh-5rem)] bg-secondary animate-pulse flex items-center justify-center">
        <p className="text-foreground text-lg">Loading exquisite designs...</p>
      </div>
    );
  }

  return (
    <section className="relative w-full h-[calc(100vh-5rem)] overflow-hidden">
      <Carousel
        className="w-full h-full"
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full">
              <Card className="w-full h-full border-none rounded-none shadow-none">
                <CardContent className="relative flex flex-col items-center justify-center h-full p-0">
                  <Image
                    src={slide.imageSrc}
                    alt={slide.alt}
                    layout="fill"
                    objectFit="cover"
                    quality={85}
                    priority={slide.id === 1} // Prioritize loading the first image
                    className="brightness-50"
                    data-ai-hint={slide.dataAiHint}
                  />
                  <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text readability */}
                  <div className="relative z-10 text-center text-white p-6 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
                      {slide.headline}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 animate-fade-in-up delay-200">
                      {slide.subheadline}
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground animate-fade-in-up delay-400"
                    >
                      <Link href={slide.ctaLink}>{slide.ctaText}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/30 hover:bg-black/50 border-none" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/30 hover:bg-black/50 border-none" />
      </Carousel>
      <style jsx global>{`
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
}
