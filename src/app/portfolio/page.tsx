// src/app/portfolio/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye } from 'lucide-react';

// Placeholder projects data
// In a real application, this would come from a database or CMS
const projects = Array.from({ length: 9 }).map((_, i) => ({
  id: `project-demo-${i + 1}`,
  name: `Elegant Design Showcase ${i + 1}`,
  category: i % 3 === 0 ? 'Residential' : i % 3 === 1 ? 'Commercial' : 'Architectural',
  location: `Location ${String.fromCharCode(65 + i)}, Dhaka`, // A, B, C...
  imageSrc: `https://picsum.photos/seed/project${i + 1}/800/600`,
  description: 'A beautifully crafted space showcasing modern aesthetics and functional design. This project highlights our commitment to quality and innovation.',
  dataAiHint: i % 3 === 0 ? 'modern home' : i % 3 === 1 ? 'office interior' : 'building design',
}));


export default function PortfolioPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Portfolio</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a curated collection of our finest interior design and architectural projects. Each space tells a unique story of creativity and craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* TODO: Add filtering options here (e.g., by category: Residential, Commercial, Architectural) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white text-lg font-semibold">{project.category}</h3>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-semibold group-hover:text-accent transition-colors">{project.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{project.location}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <Link href={`/portfolio/${project.id}`}>
                      <Eye className="mr-2 h-4 w-4" /> View Project Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Inspired by Our Work?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can bring your vision to life. Contact us for a consultation and let's create your perfect space.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
