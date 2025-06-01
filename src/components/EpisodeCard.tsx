
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { PodcastEpisode } from '@/types/podcast';

interface EpisodeCardProps {
  episode: PodcastEpisode;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition">
      <Link to={`/episodes/${episode.id}`}>
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={episode.imageUrl} 
            alt={episode.title} 
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2 text-sm text-podcast-secondary">
          <span>الحلقة {episode.episodeNumber}</span>
          <span>{episode.duration}</span>
        </div>
        <Link to={`/episodes/${episode.id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-podcast-accent transition line-clamp-2">
            {episode.title}
          </h3>
        </Link>
        <p className="text-podcast-secondary text-sm line-clamp-3">
          {episode.description}
        </p>
        <div className="mt-4">
          <Link 
            to={`/episodes/${episode.id}`}
            className="text-podcast-accent hover:text-podcast-primary font-medium transition"
          >
            الاستماع للحلقة
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default EpisodeCard;
