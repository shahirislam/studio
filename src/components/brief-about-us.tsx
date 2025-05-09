// src/components/brief-about-us.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function BriefAboutUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Advance Interior
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Advance Interior is an Architectural and Interior Design Firm dedicated to providing the best service for Residential & Commercial projects. We believe in creating spaces that are not only aesthetically pleasing but also functional and reflective of our clients' personalities and needs.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of experienced designers and architects works collaboratively to bring innovative ideas and meticulous execution to every project.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://scontent.fzyl7-1.fna.fbcdn.net/v/t39.30808-6/358687919_582216120746763_115485640079159906_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF-wM4PQWHnyDAo8mUWocvDwDCsmRTluUTAMKyZFOW5RFteYY0P5wWcgK-uM9qNBPujjDR_wH7svvae6cUZjApc&_nc_ohc=dwhw54b7knYQ7kNvwGrraCm&_nc_oc=Adl5ocyHHzTrAPdZvjL7ap4911v5SZ-a-2fOYqYomZD5-iAG8nJ9rwdDrhykXIFSXRk&_nc_zt=23&_nc_ht=scontent.fzyl7-1.fna&_nc_gid=__Or18lTPH3RgETk13QPDg&oh=00_AfJX2o08AWLUMDhU1TILGJwiZ1S8kV7d4WhjUj28rlZN3w&oe=68243A69" // Placeholder image
              alt="Advance Interior Team Working"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
              data-ai-hint="design team collaboration"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
