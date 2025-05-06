// src/app/portfolio/[projectId]/page.tsx
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, MapPin, Layers } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';


// Placeholder function to fetch project details by ID
// In a real app, this would fetch data from a database or CMS
async function getProjectDetails(projectId: string) {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 200));

  // Placeholder data - you'd replace this with actual data fetching
  const mockProject = {
    id: projectId,
    name: `Elegant Design Showcase - ${projectId.split('-').pop()}`,
    location: `Location ${String.fromCharCode(64 + parseInt(projectId.split('-').pop() || '1'))}, Dhaka`,
    category: parseInt(projectId.split('-').pop() || '1') % 3 === 1 ? 'Residential' : parseInt(projectId.split('-').pop() || '1') % 3 === 2 ? 'Commercial' : 'Architectural',
    description: `This project, ${projectId}, exemplifies our commitment to creating spaces that are both aesthetically pleasing and highly functional. We focused on maximizing natural light and incorporating sustainable materials. The design seamlessly blends modern elements with timeless elegance, resulting in a harmonious and inviting environment. Key features include custom millwork, state-of-the-art fixtures, and a carefully curated color palette.`,
    servicesProvided: [
      'Full Interior Design Package',
      'Space Planning & Layout Optimization',
      'Custom Furniture Design',
      'Lighting Design',
      'Material Selection & Procurement',
      'Project Management',
    ],
    images: Array.from({ length: 5 }).map((_, i) => ({
      src: `https://picsum.photos/seed/${projectId}-img${i + 1}/1200/800`,
      alt: `View ${i + 1} of project ${projectId}`,
      dataAiHint: `interior view ${i+1}`
    })),
    mainImageAIHint: `project ${projectId.split('-').pop()} main`,
  };

  if (!mockProject.name.includes(projectId.split('-').pop() || '')) { // Basic check if project exists
    return null;
  }
  return mockProject;
}

export default async function ProjectDetailPage({ params }: { params: { projectId: string } }) {
  const project = await getProjectDetails(params.projectId);

  if (!project) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The project you are looking for does not exist or has been moved.</p>
        <Button asChild>
          <Link href="/portfolio">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="outline" className="mb-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/portfolio">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{project.name}</h1>
          <div className="flex items-center text-muted-foreground mb-4">
            <MapPin className="h-5 w-5 mr-2 text-accent" />
            <span>{project.location}</span>
            <span className="mx-2">|</span>
            <Layers className="h-5 w-5 mr-2 text-accent" />
            <span>{project.category}</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {project.images && project.images.length > 0 && (
            <Carousel className="w-full mb-12 shadow-xl rounded-lg overflow-hidden" opts={{ loop: true }}>
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-none rounded-none">
                      <CardContent className="relative aspect-[16/10] p-0">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          layout="fill"
                          objectFit="cover"
                          priority={index === 0}
                          data-ai-hint={image.dataAiHint}
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
            </Carousel>
          )}

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-semibold text-foreground mb-6">Project Description</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Services Provided</h2>
              <ul className="space-y-2">
                {project.servicesProvided.map((service, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <Layers className="h-4 w-4 mr-3 text-accent flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Similar Project in Mind?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We'd love to hear about your ideas. Let Advance Interior help you create your next exceptional space.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

// This function is needed for Next.js to know which dynamic routes to pre-render at build time.
// For a small number of projects, you can generate them like this.
// For a large number, consider fallback: 'blocking' or true.
export async function generateStaticParams() {
  const projectsData = Array.from({ length: 9 }).map((_, i) => ({
    id: `project-demo-${i + 1}`,
  }));

  return projectsData.map((project) => ({
    projectId: project.id,
  }));
}
