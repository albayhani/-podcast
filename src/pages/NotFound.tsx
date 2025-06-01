
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="container px-4 text-center">
          <h1 className="text-6xl font-bold mb-4 text-podcast-primary">404</h1>
          <h2 className="text-3xl font-semibold mb-6">الصفحة غير موجودة</h2>
          <p className="text-podcast-secondary text-lg max-w-md mx-auto mb-8">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو إزالتها.
          </p>
          <Button asChild size="lg" className="bg-podcast-primary">
            <Link to="/">العودة للصفحة الرئيسية</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
