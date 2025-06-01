
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import EpisodeCard from '@/components/EpisodeCard';
import { episodes } from '@/data/episodes';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredEpisodes = episodes.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">أحدث الحلقات</h2>
              <p className="text-podcast-secondary max-w-2xl mx-auto">
                استمع إلى أحدث الحلقات من البودكاست العربي، واكتشف محتوى مميز يناقش مواضيع تهمك.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredEpisodes.map((episode) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-podcast-primary">
                <Link to="/episodes">عرض جميع الحلقات</Link>
              </Button>
            </div>
          </div>
        </section>
        
        <section className="bg-podcast-light py-16 dark:bg-podcast-dark/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">عن البودكاست</h2>
                <p className="text-podcast-secondary mb-6">
                  يهدف البيحاني بودكاست إلى تقديم محتوى صوتي هادف وقيم للمجتمع العربي. نناقش مواضيع متنوعة في مجالات التكنولوجيا، والتطوير الشخصي، والريادة، والثقافة، والفن، والأدب وغيرها.
                </p>
                <p className="text-podcast-secondary mb-6">
                  نستضيف خبراء ومختصين في مختلف المجالات للحديث عن تجاربهم وخبراتهم، ونسعى دائمًا لتقديم محتوى عالي الجودة يساهم في إثراء المحتوى العربي.
                </p>
                <Button asChild variant="outline" className="border-podcast-primary text-podcast-primary hover:bg-podcast-primary hover:text-white">
                  <Link to="/contact">تواصل معنا</Link>
                </Button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-podcast-primary to-podcast-accent rounded-lg overflow-hidden shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-12 h-12 mb-4 mx-auto"
                      >
                        <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6v12a6 6 0 0 0 6 6 6 6 0 0 0 6-6V8z" />
                        <path d="M12 18a2 2 0 0 0 2-2v-4a2 2 0 0 0-4 0v4a2 2 0 0 0 2 2z" />
                      </svg>
                      <h3 className="text-xl font-bold">انضم إلينا</h3>
                      <p className="text-sm mt-2 opacity-90">
                        حلقات جديدة كل أسبوع
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">اشترك في نشرتنا البريدية</h2>
            <p className="text-podcast-secondary max-w-2xl mx-auto mb-8">
              احصل على إشعارات بأحدث الحلقات والمواضيع الحصرية عبر البريد الإلكتروني.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="أدخل بريدك الإلكتروني"
                  className="flex-1 p-3 border border-gray-300 rounded-md focus:ring-podcast-accent focus:border-podcast-accent"
                  required
                />
                <Button type="submit" className="bg-podcast-accent hover:bg-podcast-accent/90">
                  اشترك
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
