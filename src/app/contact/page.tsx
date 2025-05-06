// src/app/contact/page.tsx
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Phone, Mail, Building } from 'lucide-react';
import { useEffect, useState } from "react"


const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not exceed 500 characters.",
  }),
})

export default function ContactPage() {
  const { toast } = useToast();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  // Placeholder for form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(values) // In a real app, you'd send this data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
      variant: "default",
    })
    form.reset();
  }

  const companyInfo = {
    address: "House 19, Road 14, Sector 13, Uttara, Dhaka, Bangladesh",
    phone: "01614-445000",
    email: "info@advanceinteriorbd.com", // Placeholder email, update as needed
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.562607318783!2d90.39065561540781!3d23.86965999003417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4334c142397%3A0x7c5a7e9dfdd09994!2sHouse%2019%2C%20Rd%2014%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
    // IMPORTANT: Replace the above mapsEmbedUrl with the correct one from getGoogleMapsEmbedURL (src/services/google-maps.ts) after implementing it or getting it from the client.
    // The current URL is a generic placeholder for Uttara Sector 13.
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're excited to hear about your project ideas. Contact us today for a consultation or any inquiries.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-semibold text-foreground mb-6">Send Us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Phone Number" {...field} className="bg-background"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Regarding your project..." {...field} className="bg-background"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your project or inquiry..."
                            className="resize-none bg-background"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Our Office</h3>
                      <p>{companyInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Call Us</h3>
                      <a href={`tel:${companyInfo.phone.replace(/-/g, "")}`} className="hover:text-accent transition-colors">{companyInfo.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Email Us</h3>
                      <a href={`mailto:${companyInfo.email}`} className="hover:text-accent transition-colors">{companyInfo.email}</a>
                       {/* Comment: Replace with actual email once provided */}
                    </div>
                  </div>
                   <div className="flex items-start">
                    <Building className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Business Hours</h3>
                      <p>Saturday - Thursday: 10:00 AM - 07:00 PM</p>
                      <p>Friday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {isMounted && (
                <div>
                  <h2 className="text-3xl font-semibold text-foreground mb-6">Find Us On Map</h2>
                  <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl border border-border">
                    <iframe
                      src={companyInfo.mapsEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Advance Interior Location"
                    ></iframe>
                    {/* Comment: The Google Maps embed URL is a placeholder. 
                        It should be updated with the result from src/services/google-maps.ts 
                        once that service is fully implemented with the Google Maps API.
                        The service `getGoogleMapsEmbedURL` takes a `Location` object.
                        The address is: House 19, Road 14, Sector 13, Uttara, Dhaka, Bangladesh.
                        Approximate coordinates: Lat: 23.8696, Lng: 90.3906 (This needs to be verified)
                    */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
