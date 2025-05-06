// src/components/youtube-video-slider.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlayCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { YouTubeVideo } from '@/services/youtube';
import { getYouTubeVideos } from '@/services/youtube';
import { useEffect, useState } from 'react';

// Placeholder data, actual data will be fetched
const placeholderVideos: YouTubeVideo[] = [
  { id: 'placeholder1', title: 'Elegant Living Room Tour', thumbnailUrl: 'https://picsum.photos/seed/yt1/480/270', dataAiHint: 'living room showcase' },
  { id: 'placeholder2', title: 'Modern Kitchen Renovation', thumbnailUrl: 'https://picsum.photos/seed/yt2/480/270', dataAiHint: 'kitchen design' },
  { id: 'placeholder3', title: 'Commercial Space Design Ideas', thumbnailUrl: 'https://picsum.photos/seed/yt3/480/270', dataAiHint: 'office tour' },
  { id: 'placeholder4', title: 'Architectural Marvels by Advance Interior', thumbnailUrl: 'https://picsum.photos/seed/yt4/480/270', dataAiHint: 'building architecture' },
  { id: 'placeholder5', title: 'Small Space, Big Impact: Apartment Design', thumbnailUrl: 'https://picsum.photos/seed/yt5/480/270', dataAiHint: 'apartment interior' },
];


export default function YouTubeVideoSlider() {
  const [videos, setVideos] = useState<YouTubeVideo[]>(placeholderVideos);
  const [isLoading, setIsLoading] = useState(true); // Set to true initially

  useEffect(() => {
    // This is a placeholder for fetching actual YouTube videos.
    // The YouTube service needs to be implemented with API calls.
    // For now, we'll use the placeholder videos after a short delay to simulate fetching.
    const fetchVideos = async () => {
      setIsLoading(true);
      try {
        // Replace with actual channel ID when available
        // const fetchedVideos = await getYouTubeVideos("UCxxxxxxxxxxxxxxx"); 
        // setVideos(fetchedVideos.length > 0 ? fetchedVideos : placeholderVideos);
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setVideos(placeholderVideos); // Using placeholders for now
      } catch (error) {
        console.error("Failed to fetch YouTube videos:", error);
        setVideos(placeholderVideos); // Fallback to placeholders on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">From Our Channel</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Loading latest video showcases and design inspirations...
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <Card key={i} className="overflow-hidden animate-pulse">
                <div className="relative aspect-video bg-muted rounded-t-lg"></div>
                <CardContent className="p-4">
                  <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">From Our Channel</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our latest project showcases, design tips, and inspirations from Advance Interior.
            {/* Comment: The YouTube channel ID needs to be configured in src/services/youtube.ts for actual video fetching. */}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: videos.length > 3, // Only loop if there are enough videos for multiple slides
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {videos.map((video) => (
              <CarouselItem key={video.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col">
                    <CardContent className="p-0 flex-grow flex flex-col">
                      <Link 
                        href={`https://www.youtube.com/watch?v=${video.id}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative block aspect-video w-full group"
                        aria-label={`Watch video: ${video.title}`}
                      >
                        <Image
                          src={video.thumbnailUrl}
                          alt={video.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={(video as any).dataAiHint || 'video thumbnail'}
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <PlayCircle className="h-16 w-16 text-white/80" />
                        </div>
                      </Link>
                      <div className="p-4">
                        <h3 className="text-md font-semibold text-foreground mb-1 truncate group-hover:text-accent transition-colors">
                           <Link 
                            href={`https://www.youtube.com/watch?v=${video.id}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:underline"
                           >
                            {video.title}
                           </Link>
                        </h3>
                        {/* Add video description or view count if available from API */}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 hidden sm:flex" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 hidden sm:flex" />
        </Carousel>
         {videos.length === 0 && !isLoading && (
          <p className="text-center text-muted-foreground mt-8">No videos found or YouTube Channel not configured.</p>
        )}
      </div>
    </section>
  );
}
