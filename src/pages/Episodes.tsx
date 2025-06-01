
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EpisodeCard from '@/components/EpisodeCard';
import { episodes } from '@/data/episodes';

const Episodes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-podcast-primary text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">جميع الحلقات</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              استمع إلى جميع حلقات البودكاست العربي. يمكنك تشغيل الحلقات مباشرة أو تحميلها للاستماع لاحقًا.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {episodes.map((episode) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
            
            {episodes.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-podcast-secondary">لا توجد حلقات متاحة حاليًا</h3>
                <p className="text-podcast-secondary mt-2">
                  يرجى التحقق لاحقًا، سيتم إضافة حلقات جديدة قريبًا.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Episodes;
