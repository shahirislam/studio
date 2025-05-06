// src/app/testimonials/page.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Placeholder testimonials data
const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    title: "Homeowner, Dhaka",
    quote: "Advance Interior transformed our apartment into a dream home. Their attention to detail and creative vision are unparalleled. From the initial consultation to the final reveal, the process was seamless and enjoyable. Highly recommended!",
    avatarSrc: "https://picsum.photos/seed/testi1/100/100",
    avatarFallback: "AK",
    projectType: "Residential",
    dataAiHint: "woman portrait"
  },
  {
    id: 2,
    name: "Rahim Ahmed",
    title: "Business Owner, Gulshan",
    quote: "The team designed our new office space, and it's fantastic. It perfectly reflects our brand and has significantly improved employee morale and productivity. Professional, efficient, and truly understood our needs.",
    avatarSrc: "https://picsum.photos/seed/testi2/100/100",
    avatarFallback: "RA",
    projectType: "Commercial",
    dataAiHint: "man portrait"
  },
  {
    id: 3,
    name: "Fatima Chowdhury",
    title: "Apartment Resident, Banani",
    quote: "Working with Advance Interior was a pleasure. They listened to our needs and delivered a design that exceeded our expectations. The quality of work is exceptional, and their team was always responsive and helpful.",
    avatarSrc: "https://picsum.photos/seed/testi3/100/100",
    avatarFallback: "FC",
    projectType: "Residential",
    dataAiHint: "woman smiling"
  },
  {
    id: 4,
    name: "Imran Hasan",
    title: "Restaurant Owner",
    quote: "They helped us create a unique and inviting atmosphere for our new restaurant. Customers love the design, and it has definitely contributed to our success. Their creative solutions for a challenging space were impressive.",
    avatarSrc: "https://picsum.photos/seed/testi4/100/100",
    avatarFallback: "IH",
    projectType: "Commercial",
    dataAiHint: "man professional"
  },
  {
    id: 5,
    name: "Sultana Kamal",
    title: "Architectural Client",
    quote: "Advance Interior provided excellent architectural services for our new build. Their designs were innovative and practical, and they guided us through the entire process with expertise.",
    avatarSrc: "https://picsum.photos/seed/testi5/100/100",
    avatarFallback: "SK",
    projectType: "Architectural",
    dataAiHint: "professional woman"
  },
  {
    id: 6,
    name: "David Lee",
    title: "Retail Store Owner",
    quote: "Our retail space was completely revitalized by Advance Interior. The new design is modern, customer-friendly, and has boosted our sales. A great investment!",
    avatarSrc: "https://picsum.photos/seed/testi6/100/100",
    avatarFallback: "DL",
    projectType: "Commercial",
    dataAiHint: "store owner"
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Client Testimonials</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what our valued clients have to say about their experience working with Advance Interior. Their satisfaction is our greatest achievement.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-muted/50 p-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16 border-2 border-accent">
                      <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                      <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      <p className="text-xs text-accent font-medium mt-1">{testimonial.projectType} Project</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow relative">
                  <Quote className="absolute top-4 left-4 h-10 w-10 text-accent/20 transform rotate-180 -z-0" />
                  <p className="text-muted-foreground italic leading-relaxed relative z-10">
                    "{testimonial.quote}"
                  </p>
                   <Quote className="absolute bottom-4 right-4 h-10 w-10 text-accent/20 -z-0" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Share Your Experience</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Have we helped you create your dream space? We'd love to hear about your journey with Advance Interior.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact?subject=TestimonialSubmission">Leave a Testimonial</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
