
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-podcast-primary text-white py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold font-cairo">
               البيحاني بودكاست
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 rtl:space-x-reverse">
            <Link to="/" className="px-3 py-2 hover:bg-podcast-primary/80 rounded transition">
              الرئيسية
            </Link>
            <Link to="/episodes" className="px-3 py-2 hover:bg-podcast-primary/80 rounded transition">
              الحلقات
            </Link>
            <Link to="/contact" className="px-3 py-2 hover:bg-podcast-primary/80 rounded transition">
              تواصل معنا
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="px-3 py-2 hover:bg-podcast-primary/80 rounded transition text-center"
                onClick={() => setIsOpen(false)}
              >
                الرئيسية
              </Link>
              <Link 
                to="/episodes" 
                className="px-3 py-2 hover:bg-podcast-primary/80 rounded transition text-center"
                onClick={() => setIsOpen(false)}
              >
                الحلقات
              </Link>
              <Link 
                to="/contact" 
                className="px-3 py-2 hover:bg-podcast-primary/80 rounded transition text-center"
                onClick={() => setIsOpen(false)}
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
