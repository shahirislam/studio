// src/app/services/page.tsx
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home, Building, PenTool, CheckCircle, Users, Lightbulb, Ruler } from 'lucide-react';

const serviceSections = [
  {
    id: 'residential',
    title: 'Residential Interior Design',
    icon: Home,
    mainImage: 'https://picsum.photos/1200/600?random=16',
    mainImageAlt: 'Luxurious modern living room',
    dataAiHint: 'modern living room',
    description: "Your home is a reflection of you. At Advance Interior, we specialize in creating personalized residential spaces that are both beautiful and functional. Whether it's a single room refresh or a full home renovation, our team works closely with you to understand your lifestyle, preferences, and aspirations. We aim to design interiors that enhance your daily living, provide comfort, and inspire joy.",
    process: [
      { step: 'Consultation & Briefing', details: 'Understanding your vision, requirements, and budget.', icon: Users },
      { step: 'Concept Development', details: 'Creating initial design concepts, mood boards, and layouts.', icon: Lightbulb },
      { step: 'Design & Material Selection', details: 'Finalizing detailed designs, selecting materials, finishes, and furnishings.', icon: Ruler },
      { step: 'Project Execution & Management', details: 'Overseeing the implementation process to ensure quality and timelines.', icon: CheckCircle },
    ],
    gallery: [
      { src: 'https://picsum.photos/400/300?random=17', alt: 'Elegant bedroom design', dataAiHint: 'bedroom interior' },
      { src: 'https://picsum.photos/400/300?random=18', alt: 'Modern kitchen layout', dataAiHint: 'kitchen design' },
      { src: 'https://picsum.photos/400/300?random=19', alt: 'Cozy family living area', dataAiHint: 'family room' },
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Interior Design',
    icon: Building,
    mainImage: 'https://picsum.photos/1200/600?random=20',
    mainImageAlt: 'Modern open-plan office space',
    dataAiHint: 'office space',
    description: "We design commercial interiors that are not only visually stunning but also strategically planned to enhance productivity, brand identity, and customer experience. From corporate offices and retail stores to restaurants and hospitality venues, Advance Interior delivers innovative solutions tailored to your business needs. We focus on creating spaces that are functional, engaging, and leave a lasting positive impression.",
    process: [
      { step: 'Needs Analysis & Space Planning', details: 'Assessing business requirements and optimizing space utilization.', icon: Users },
      { step: 'Brand Integration & Concept Design', details: 'Developing designs that align with your brand and business goals.', icon: Lightbulb },
      { step: 'Detailed Design & FF&E', details: 'Specifying furniture, fixtures, equipment, and technical drawings.', icon: Ruler },
      { step: 'Execution & Handover', details: 'Managing the build-out process and ensuring a seamless handover.', icon: CheckCircle },
    ],
    gallery: [
      { src: 'https://picsum.photos/400/300?random=21', alt: 'Stylish restaurant interior', dataAiHint: 'restaurant design' },
      { src: 'https://picsum.photos/400/300?random=22', alt: 'Modern retail store layout', dataAiHint: 'retail store' },
      { src: 'https://picsum.photos/400/300?random=23', alt: 'Collaborative co-working space', dataAiHint: 'coworking space' },
    ]
  },
  {
    id: 'architectural',
    title: 'Architectural Services',
    icon: PenTool,
    mainImage: 'https://picsum.photos/1200/600?random=24',
    mainImageAlt: 'Contemporary building facade',
    dataAiHint: 'modern architecture',
    description: "Our architectural services encompass the full spectrum of building design, from initial concept to construction documentation. Advance Interior provides innovative and sustainable architectural solutions for new constructions, renovations, and additions. We combine artistic vision with technical expertise to create structures that are not only aesthetically striking but also practical, durable, and environmentally conscious.",
    process: [
      { step: 'Feasibility Study & Site Analysis', details: 'Evaluating project viability and site conditions.', icon: Users },
      { step: 'Schematic Design & 3D Modeling', details: 'Developing architectural concepts and visual representations.', icon: Lightbulb },
      { step: 'Construction Documents & Permitting', details: 'Preparing detailed drawings and assisting with approvals.', icon: Ruler },
      { step: 'Construction Administration', details: 'Providing oversight during the construction phase.', icon: CheckCircle },
    ],
    gallery: [
      { src: 'https://picsum.photos/400/300?random=25', alt: 'Residential building design', dataAiHint: 'house exterior' },
      { src: 'https://picsum.photos/400/300?random=26', alt: 'Commercial complex architecture', dataAiHint: 'commercial building' },
      { src: 'https://picsum.photos/400/300?random=27', alt: 'Sustainable building concept', dataAiHint: 'green building' },
    ]
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive design and architectural solutions tailored to your unique needs, from cozy homes to dynamic commercial spaces.
          </p>
        </div>
      </section>

      {serviceSections.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`relative h-80 md:h-[500px] rounded-lg overflow-hidden shadow-xl ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <Image
                  src={service.mainImage}
                  alt={service.mainImageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                  data-ai-hint={service.dataAiHint}
                />
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <service.icon className="h-10 w-10 text-accent mr-4" />
                  <h2 className="text-3xl md:text-4xl font-semibold text-foreground">{service.title}</h2>
                </div>
                <p className="text-muted-foreground mb-8 text-lg">{service.description}</p>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Process</h3>
                <ul className="space-y-4 mb-8">
                  {service.process.map(p => (
                    <li key={p.step} className="flex items-start">
                      <p.icon className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                      <div>
                        <strong className="block text-foreground">{p.step}</strong>
                        <span className="text-muted-foreground text-sm">{p.details}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                {service.gallery && service.gallery.length > 0 && (
                  <>
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Glimpses of Our Work</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {service.gallery.map((img, idx) => (
                        <div key={idx} className="relative aspect-square rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                          <Image src={img.src} alt={img.alt} layout="fill" objectFit="cover" data-ai-hint={img.dataAiHint} />
                        </div>
                      ))}
                    </div>
                  </>
                )}
                <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">Discuss Your Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}
       <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Design Journey?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you have a clear vision or need inspiration, our team is here to guide you. Let's create something extraordinary together.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
