// src/app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Advance Interior
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering innovative design and architectural solutions for exceptional living and working environments.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Advance Interior was founded with a passion for transforming spaces. We are an Architectural and Interior Design Firm committed to delivering excellence in every project, whether residential or commercial. Our journey began with a simple mission: to provide the best service and create designs that inspire.
              </p>
              <p className="text-muted-foreground">
                Over the years, we have grown into a reputable firm known for our innovative approach, attention to detail, and client-centric philosophy. We believe that great design has the power to enhance lives and create lasting impressions.
              </p>
            </div>
            <div className="relative h-80 md:h-[450px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://picsum.photos/800/650?random=15"
                alt="Advance Interior office or design process"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                data-ai-hint="design studio interior"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Our Philosophy & Approach</h2>
              <p className="text-muted-foreground mb-4">
                At Advance Interior, our design philosophy is rooted in understanding our clients' unique needs and aspirations. We approach each project as a collaborative journey, working closely with you to translate your vision into a tangible reality.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                  <span><strong>Client-Centric Design:</strong> Your needs and preferences are at the heart of our creative process.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                  <span><strong>Innovation & Creativity:</strong> We constantly explore new ideas and materials to deliver cutting-edge designs.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                  <span><strong>Quality & Craftsmanship:</strong> We are committed to the highest standards of quality in both design and execution.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                  <span><strong>Sustainable Practices:</strong> We strive to incorporate eco-friendly materials and sustainable design principles where possible.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <h2 className="text-3xl font-semibold text-foreground mb-6">Mission & Vision</h2>
              <div className="bg-background p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
                <p className="text-muted-foreground mb-4">
                  To create exceptional interior and architectural designs that enhance the quality of life and work, delivering unparalleled value and service to our clients.
                </p>
                <h3 className="text-xl font-semibold text-primary mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be a leading design firm recognized for innovation, quality, and our commitment to transforming spaces into inspiring environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-foreground mb-6">Meet Our Talented Team</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            The driving force behind Advance Interior's success is our team of passionate and skilled professionals.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/team">Discover Our Team</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
