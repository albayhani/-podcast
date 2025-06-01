
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AudioPlayer from '@/components/AudioPlayer';
import Comments from '@/components/Comments';
import { episodes } from '@/data/episodes';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const EpisodeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const episode = episodes.find(ep => ep.id === id);

  if (!episode) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center mb-4">الحلقة غير موجودة</h2>
          <p className="text-podcast-secondary text-center mb-6">
            عذراً، الحلقة التي تبحث عنها غير موجودة أو تم إزالتها.
          </p>
          <Button asChild className="bg-podcast-primary">
            <Link to="/episodes">العودة إلى جميع الحلقات</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to="/episodes" className="text-podcast-accent hover:text-podcast-primary flex items-center space-x-2 rtl:space-x-reverse mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
                <span>العودة إلى جميع الحلقات</span>
              </Link>
              
              <div className="aspect-[21/9] overflow-hidden rounded-lg mb-6">
                <img 
                  src={episode.imageUrl} 
                  alt={episode.title} 
                  className="w-full h-full object-cover"
                />
              </div>

             
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{episode.title}</h1>
              
              <AudioPlayer audioUrl={episode.audioUrl} title={episode.title} />
              
              <div className="prose max-w-none dark:prose-invert">
                <p className="text-podcast-secondary text-lg leading-relaxed">{episode.description}</p>
              </div>
            </div>
            
            <Comments episodeId={episode.id} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EpisodeDetails;
