// src/components/services-overview.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Home, Building, PenTool } from 'lucide-react'; // Example icons
import Image from 'next/image';

const services = [
  {
    title: 'Residential Interior Design',
    description: 'Crafting beautiful and functional living spaces tailored to your lifestyle. From concept to completion, we bring your dream home to life.',
    icon: Home,
    link: '/services#residential',
    imageSrc: 'https://picsum.photos/600/400?random=4',
    dataAiHint: 'modern kitchen',
  },
  {
    title: 'Commercial Interior Design',
    description: 'Designing inspiring and productive environments for businesses. We create spaces that reflect your brand and enhance customer experience.',
    icon: Building,
    link: '/services#commercial',
    imageSrc: 'https://picsum.photos/600/400?random=5',
    dataAiHint: 'office reception',
  },
  {
    title: 'Architectural Services',
    description: 'Innovative architectural solutions for new constructions and renovations. Our expertise spans planning, design, and project management.',
    icon: PenTool,
    link: '/services#architectural',
    imageSrc: 'https://picsum.photos/600/400?random=6',
    dataAiHint: 'modern building exterior',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advance Interior offers comprehensive design solutions for both residential and commercial clients, along with expert architectural services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative h-48 w-full">
                <Image 
                  src={service.imageSrc} 
                  alt={service.title} 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint={service.dataAiHint}
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center mb-3">
                  <service.icon className="h-8 w-8 text-accent mr-3" />
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm text-muted-foreground mb-6">
                  {service.description}
                </CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
