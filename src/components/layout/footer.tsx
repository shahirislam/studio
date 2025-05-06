// src/components/layout/footer.tsx
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/team', label: 'Team' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/@Advanceinteriorbd/videos', label: 'YouTube' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Advance Interior</h3>
            <p className="text-sm mb-2">House 19, Road 14, Sector 13, Uttara, Dhaka, Bangladesh</p>
            <p className="text-sm mb-2">Phone: <a href="tel:01614445000" className="hover:text-accent transition-colors">01614-445000</a></p>
            <p className="text-sm">Email: <a href="mailto:info@advanceinterior.com" className="hover:text-accent transition-colors">info@advanceinterior.com</a></p> {/* Placeholder email */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#residential" className="text-sm hover:text-accent transition-colors">Residential Design</Link></li>
              <li><Link href="/services#commercial" className="text-sm hover:text-accent transition-colors">Commercial Design</Link></li>
              <li><Link href="/services#architectural" className="text-sm hover:text-accent transition-colors">Architectural Services</Link></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-secondary-foreground hover:text-accent transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Advance Interior. All rights reserved.
            {/* Comment: Add link to privacy policy and terms of service if available */}
          </p>
        </div>
      </div>
    </footer>
  );
}
