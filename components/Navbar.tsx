// components/Navbar.tsx

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
          <Link href="/">
            <span className="text-black text-3xl font-thin cursor-pointer">
              CanDEV<span className="text-red-500">.com</span>
            </span>
          </Link>
        </div>

        {/* Sağ taraf - Hamburger Menü ve Dropdown Menü */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="bg-white text-black px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-300"
          >
            ☰ {/* Hamburger icon or any other icon for menu */}
          </button>
          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-600 mt-1 rounded-lg shadow-lg">
              <div className="flex flex-col p-4 space-y-2">
                <Link href="/blog">
                  <span
                    onClick={toggleMenu}
                    className="text-black hover:text-gray-800 cursor-pointer"
                  >
                    Blog
                  </span>
                </Link>
                
                <Link href="/projects">
                  <span
                    onClick={toggleMenu}
                    className="text-black hover:text-gray-800 cursor-pointer"
                  >
                    Projects
                  </span>
                </Link>
                <Link href="/about">
                  <span
                    onClick={toggleMenu}
                    className="text-black hover:text-gray-800 cursor-pointer"
                  >
                    About
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Büyük ekranlarda normal menü */}
        <div className="hidden md:flex space-x-4">
          <Link href="/blog">
            <button className="bg-white text-black px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-300">
              Blog
            </button>
          </Link>
          
          <Link href="/projects">
            <button className="bg-white text-black px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-300">
              Projects
            </button>
          </Link>

          <Link href="/about">
            <button className="bg-white text-black px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-300">
              About
            </button>
          </Link>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
