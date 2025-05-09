/**
 * Represents a YouTube video with its ID and title.
 */
export interface YouTubeVideo {
  /**
   * The ID of the YouTube video.
   */
  id: string;
  /**
   * The title of the YouTube video.
   */
  title: string;
  /**
   * The URL of the thumbnail image for the video.
   */
  thumbnailUrl: string;
  /**
   * AI hint for image generation.
   */
  dataAiHint?: string;
}

// List of video IDs provided by the user
const videoDetails = [
  { id: 'B0Ye6jicK1E', title: 'Advance Interior Project Showcase 1', dataAiHint: 'interior design video' },
  { id: 'UYNFBqs_jzg', title: 'Advance Interior Project Showcase 2', dataAiHint: 'architecture video' },
  { id: 'WrHFKqbgzoU', title: 'Advance Interior Project Showcase 3', dataAiHint: 'design inspiration' },
  { id: '5Mb16CjQrNg', title: 'Advance Interior Project Showcase 4', dataAiHint: 'home decor video' },
  { id: 'warF_Ys8pJ8', title: 'Advance Interior Project Showcase 5', dataAiHint: 'office design video' },
  { id: 'VHu30Idf0EA', title: 'Advance Interior Project Showcase 6', dataAiHint: 'modern interior video' }
];

/**
 * Asynchronously retrieves a list of YouTube videos from a channel.
 *
 * @param channelId The ID of the YouTube channel (currently unused as video IDs are hardcoded).
 * @returns A promise that resolves to an array of YouTubeVideo objects.
 */
export async function getYouTubeVideos(channelId: string): Promise<YouTubeVideo[]> {
  // Using predefined video IDs and constructing standard YouTube thumbnail URLs.
  // The channelId parameter is kept for future API integration but is not used in this placeholder implementation.
  console.warn(`YouTube channelId ${channelId} is not used. Using hardcoded video list with actual YouTube thumbnails.`);

  return videoDetails.map(video => ({
    id: video.id,
    title: video.title,
    // Using high-quality default thumbnail from YouTube.
    // Other options include: mqdefault.jpg (medium), sddefault.jpg (standard), maxresdefault.jpg (max resolution, if available)
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`, 
    dataAiHint: video.dataAiHint,
  }));
}
