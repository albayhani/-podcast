
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-podcast-primary text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4"> البيحاني بودكاست</h3>
            <p className="text-sm">
              منصة عربية متخصصة بتقديم محتوى صوتي هادف ومميز للمستمعين العرب حول العالم.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-300 transition">الرئيسية</Link>
              </li>
              <li>
                <Link to="/episodes" className="hover:text-gray-300 transition">الحلقات</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300 transition">تواصل معنا</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تابعنا</h3>
            <div className="flex space-x-4 rtl:space-x-reverse">

  <a href="https://twitter.com/m_albayhani" target="_blank" aria-label="Twitter" className="group">
    <svg class="w-8 h-8 text-white group-hover:text-blue-400 transition duration-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5.5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
    </svg>
  </a>

  <a href="https://www.facebook.com/m.albayhani" target="_blank" aria-label="Facebook" className="group">
  <svg class="w-8 h-8 text-white group-hover:text-blue-600 transition duration-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.49v-9.294H9.847v-3.622h2.968V8.413c0-2.937 1.794-4.538 4.415-4.538 1.255 0 2.335.093 2.649.135v3.07h-1.818c-1.426 0-1.701.678-1.701 1.67v2.188h3.406l-.444 3.622h-2.962V24h5.803C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
  </svg>
</a>

<a href="https://instagram.com/m_albayhani" target="_blank" aria-label="Instagram" className="group">
    <svg class="w-8 h-8 text-white group-hover:text-pink-500 transition duration-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.2c3.2 0 3.6.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.23-.15-4.77-1.67-4.92-4.92C2.21 15.63 2.2 15.25 2.2 12s.01-3.58.07-4.85c.15-3.23 1.67-4.77 4.92-4.92C8.4 2.21 8.8 2.2 12 2.2m0-2.2C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.36-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.36-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0z"/>
      <path d="M12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM18.4 4.7a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
    </svg>
  </a>

  <a href="https://tiktok.com/m_albayhani" target="_blank" aria-label="TikTok" className="group">
    <svg class="w-8 h-8 text-white group-hover:text-black transition duration-300" viewBox="0 0 48 48" fill="currentColor">
      <path d="M33.5 6.3a8.4 8.4 0 0 0 6.3 2.5v6.3c-2.4 0-4.7-.6-6.8-1.8v13.4c0 6.9-5.6 12.5-12.5 12.5S8 33.6 8 26.7s5.6-12.5 12.5-12.5v6.3c-3.4 0-6.3 2.8-6.3 6.3s2.8 6.3 6.3 6.3 6.3-2.8 6.3-6.3V6.3h6.4z"/>
    </svg>
  </a>

  <a href="https://youtube.com/albayhani" target="_blank" aria-label="YouTube" className="group">
    <svg class="w-8 h-8 text-white group-hover:text-red-600 transition duration-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.6 3.2H4.4C2.6 3.2 1.1 4.7 1.1 6.5v11c0 1.8 1.5 3.3 3.3 3.3h15.2c1.8 0 3.3-1.5 3.3-3.3v-11c0-1.8-1.5-3.3-3.3-3.3zm-8 13.7V7.1l6.6 4.9-6.6 4.9z"/>
    </svg>
  </a>

  <a href="https://yourwebsite.com" target="_blank" aria-label="الموقع" className="group">
    <svg class="w-8 h-8 text-white group-hover:text-green-400 transition duration-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.95 8H15.9a8.22 8.22 0 0 0-1.02-3.7 8.04 8.04 0 0 1 2.07 3.7zM12 4c.9 1.1 1.63 2.73 1.93 4H10.07c.3-1.27 1.03-2.9 1.93-4zM8.1 10H7.05a8.04 8.04 0 0 1 2.07-3.7A8.22 8.22 0 0 0 8.1 10zm0 4c.2 1.3.72 2.54 1.45 3.7a8.04 8.04 0 0 1-2.07-3.7H8.1zm1.97 0h3.87c-.3 1.27-1.03 2.9-1.93 4-.9-1.1-1.63-2.73-1.93-4zm5.86 0h1.05a8.04 8.04 0 0 1-2.07 3.7 8.22 8.22 0 0 0 1.02-3.7zM12 20a8.04 8.04 0 0 1-1.93-4h3.87c-.3 1.27-1.03 2.9-1.93 4zm0-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
    </svg>
  </a> 

  
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear}  بودكاست.البيحاني جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
