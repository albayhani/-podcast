
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { featuredEpisode } from '@/data/episodes';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-podcast-primary to-podcast-primary/90 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse">
          <div className="md:w-1/2 text-center md:text-right">
            <h1 className="font-cairo text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
               البيحاني بودكاست
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-90 max-w-xl mx-auto md:mx-0 md:ml-auto rtl:mr-0 rtl:ml-auto">
              استمع إلى محتوى عربي صوتي هادف ومميز، في أي وقت وأي مكان. نناقش مواضيع متنوعة تهم المجتمع العربي بأسلوب شيق وممتع.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-4">
              <Button
                asChild
                size="lg" 
                className="bg-podcast-accent hover:bg-podcast-accent/90 font-bold text-white"
              >
                <Link to="/episodes">
                  تصفح الحلقات
                </Link>
              </Button>
              <Button
                asChild
                size="lg" 
                variant="outline" 
                className="bg-transparent text-white hover:bg-white hover:text-podcast-primary border-white"
              >
                <Link to={`/episodes/${featuredEpisode.id}`}>
                  أحدث حلقة
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-podcast-accent rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 bg-podcast-accent/30 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                
                <img
  src="/٢٠٢٣٠٦٠٩_٠٠٢٢٤٣.png" // ← عدّل المسار حسب الصورة
  alt="شعار البيحاني بودكاست"
  className="w-35 h-35"
/>
                <div className="absolute bottom-0 left-0 right-0 text-center mb-4">
                  <span className="text-xl font-bold shadow-sm">
                    
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
