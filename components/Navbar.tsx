import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Sol taraf - Marka Adı */}
        <div className="flex items-center">
          <Link href="/" passHref legacyBehavior>
            <span className="text-black text-3xl font-thin cursor-pointer">
              CanDEV<span className="text-red-500">.com</span>
            </span>
          </Link>
        </div>

        {/* Sağ taraf - Hamburger Menü ve Dropdown Menü */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-black md:hidden bg-white px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-300"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
          {/* isOpen durumuna göre menüyü göster veya gizle */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-600 mt-1 rounded-lg shadow-lg z-10">
              <div className="flex flex-col p-4 space-y-2">
                <Link href="/blog" passHref legacyBehavior>
                  <button
                    onClick={toggleMenu}
                    className="bg-white text-black px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-300 w-full"
                  >
                    Blog
                  </button>
                </Link>
                <Link href="/projects" passHref legacyBehavior>
                  <button
                    onClick={toggleMenu}
                    className="bg-white text-black px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-300 w-full"
                  >
                    Projects
                  </button>
                </Link>
                <Link href="/about" passHref legacyBehavior>
                  <button
                    onClick={toggleMenu}
                    className="bg-white text-black px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-300 w-full"
                  >
                    About
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Büyük ekranlarda normal menü */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/blog"
            passHref
            className="bg-white text-black px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-300">
            
              Blog
            
          </Link>
          
          <Link
            href="/projects"
            passHref
            className="bg-white text-black px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-300">
            
              Projects
            
          </Link>

          <Link
            href="/about"
            passHref
            className="bg-white text-black px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-300">
            
              About
            
          </Link>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;