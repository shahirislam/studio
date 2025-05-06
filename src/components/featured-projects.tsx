// src/components/featured-projects.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'project-1',
    name: 'Modern Villa Haven',
    location: 'Uttara, Dhaka',
    imageSrc: 'https://picsum.photos/800/600?random=7',
    description: 'A stunning transformation of a residential villa, focusing on open spaces and natural light.',
    dataAiHint: 'luxury villa interior'
  },
  {
    id: 'project-2',
    name: 'Chic Corporate Office',
    location: 'Gulshan, Dhaka',
    imageSrc: 'https://picsum.photos/800/600?random=8',
    description: 'An elegant and functional office design that promotes productivity and brand identity.',
    dataAiHint: 'modern office design'
  },
  {
    id: 'project-3',
    name: 'Serene Apartment Retreat',
    location: 'Banani, Dhaka',
    imageSrc: 'https://picsum.photos/800/600?random=9',
    description: 'Creating a peaceful and stylish urban sanctuary within a compact apartment space.',
    dataAiHint: 'apartment living room'
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover a selection of our finest interior design and architectural achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src={project.imageSrc}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={project.dataAiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">{project.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{project.location}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-accent p-0 h-auto hover:text-accent/80">
                  <Link href={`/portfolio/${project.id}`}>
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
