
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, title }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setLoading(false);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => setIsPlaying(false);

    // Events
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnded);

    // Cleanup
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioRef]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / progressBar.offsetWidth;
    audio.currentTime = percent * audio.duration;
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="audio-player p-4 mb-6">
      <audio ref={audioRef} src={audioUrl} preload="metadata" />

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Button
            onClick={togglePlay}
            className={`rounded-full w-12 h-12 flex items-center justify-center ${
              isPlaying ? 'bg-podcast-primary' : 'bg-podcast-accent'
            }`}
            aria-label={isPlaying ? 'إيقاف' : 'تشغيل'}
            disabled={loading}
          >
            {loading ? (
              <div className="animate-pulse-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
            ) : isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            )}
          </Button>

          <div className="mr-3 rtl:mr-0 rtl:ml-3">
            <p className="font-medium text-podcast-dark dark:text-white text-sm truncate max-w-[200px]">
              {title}
            </p>
            {isPlaying && (
              <div className="playing-animation">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        </div>

        <a 
          href={audioUrl} 
          download 
          className="text-podcast-accent hover:text-podcast-primary transition"
          title="تحميل الحلقة"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </a>
      </div>

      <div className="flex flex-col space-y-1">
        <div 
          className="progress-bar" 
          onClick={handleProgress}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={duration ? (currentTime / duration) * 100 : 0}
        >
          <div className="progress" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
        </div>
        <div className="flex justify-between text-xs text-podcast-secondary">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
