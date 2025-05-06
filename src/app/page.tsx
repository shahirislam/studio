// src/app/page.tsx
import HeroSlider from '@/components/hero-slider';
import ServicesOverview from '@/components/services-overview';
import FeaturedProjects from '@/components/featured-projects';
import BriefAboutUs from '@/components/brief-about-us';
import TestimonialsSlider from '@/components/testimonials-slider';
import YouTubeVideoSlider from '@/components/youtube-video-slider';
import CTASection from '@/components/cta-section';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ServicesOverview />
      <FeaturedProjects />
      <BriefAboutUs />
      <TestimonialsSlider />
      <YouTubeVideoSlider />
      <CTASection 
        title="Ready to Transform Your Space?"
        description="Let's discuss how Advance Interior can bring your vision to life. Get in touch for a consultation."
        buttonText="Get a Consultation"
        buttonLink="/contact"
      />
    </>
  );
}
