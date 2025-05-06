// src/app/team/page.tsx
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Linkedin, Twitter, Briefcase } from 'lucide-react'; // Placeholder for social/role icons
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Placeholder team members data
const teamMembers = [
  {
    name: "Jannatul Ferdous",
    title: "Lead Architect & Founder",
    bio: "With over 15 years of experience, Jannatul leads our team with a vision for innovative and sustainable design. Her passion lies in creating spaces that tell a story.",
    imageSrc: "https://picsum.photos/seed/team1/400/400",
    social: { linkedin: "#", twitter: "#" },
    dataAiHint: "female architect portrait"
  },
  {
    name: "Rahman Ali",
    title: "Senior Interior Designer",
    bio: "Rahman brings a wealth of creativity and technical expertise to every project. He specializes in residential design, focusing on comfort and elegance.",
    imageSrc: "https://picsum.photos/seed/team2/400/400",
    social: { linkedin: "#" },
    dataAiHint: "male designer portrait"
  },
  {
    name: "Fatima Begum",
    title: "Project Manager",
    bio: "Fatima ensures that every project runs smoothly, on time, and within budget. Her meticulous planning and communication skills are invaluable.",
    imageSrc: "https://picsum.photos/seed/team3/400/400",
    social: { linkedin: "#", twitter: "#" },
    dataAiHint: "female manager professional"
  },
  {
    name: "Salim Khan",
    title: "Architectural Technologist",
    bio: "Salim is our go-to expert for detailed drawings and technical specifications. His precision ensures that our designs are flawlessly executed.",
    imageSrc: "https://picsum.photos/seed/team4/400/400",
    social: { linkedin: "#" },
    dataAiHint: "male technologist working"
  },
   {
    name: "Aisha Siddiqua",
    title: "Junior Interior Designer",
    bio: "Aisha brings fresh perspectives and a keen eye for detail. She assists in developing concepts and creating vibrant mood boards.",
    imageSrc: "https://picsum.photos/seed/team5/400/400",
    social: { linkedin: "#" },
    dataAiHint: "young female designer"
  },
  {
    name: "Kamal Hossain",
    title: "Client Relations Manager",
    bio: "Kamal is dedicated to ensuring our clients have a seamless and positive experience from initial contact through project completion.",
    imageSrc: "https://picsum.photos/seed/team6/400/400",
    social: { linkedin: "#", twitter: "#" },
    dataAiHint: "male client manager"
  }
];

export default function TeamPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Meet Our Team</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            The creative minds and skilled hands behind Advance Interior's success. We are a passionate group of designers, architects, and project managers dedicated to excellence.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col text-center">
                <CardHeader className="items-center pt-8">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-accent shadow-md">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={member.dataAiHint}
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-medium flex items-center justify-center">
                    <Briefcase className="h-4 w-4 mr-2" /> {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow px-6 pb-6">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We are always looking for passionate and talented individuals to join Advance Interior. If you share our commitment to design excellence, we'd love to hear from you.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
            {/* Placeholder: Link to a careers page or contact email */}
            <Link href="/contact?subject=CareerInquiry">Explore Opportunities</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
