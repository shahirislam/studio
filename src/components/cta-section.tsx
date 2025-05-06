// src/components/cta-section.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({ title, description, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          {description}
        </p>
        <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
}
