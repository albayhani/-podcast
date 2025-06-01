
export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  imageUrl: string;
  duration: string;
  publishedDate: string;
  episodeNumber: number;
}

export interface Comment {
  id: string;
  episodeId: string;
  userName: string;
  userImage?: string;
  content: string;
  timestamp: Date;
  likes: number;
}
