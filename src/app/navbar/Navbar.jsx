"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaWhatsapp, FaFacebook,FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaPalette, FaUsers, FaBullhorn, FaTimes, FaBars, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
    };

    // Add event listener for route changes
    window.addEventListener('popstate', handleRouteChange);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  return (
    <div>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        {/* Top Bar with Contact Info - Hidden on mobile */}
        <div className="hidden md:block bg-gradient-to-r from-blue-900 to-blue-500 text-white text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center items-center py-2 space-y-2 md:space-y-0">
              <div className="marquee-container w-full">
                <div className="marquee-content">
                  {[...Array(1)].map((_, i) => (
                    <React.Fragment key={i}>
                      <a href="tel:+919156589900" className="inline-flex items-center hover:text-blue-200 transition-colors duration-200 mx-6">
                        <svg className="h-4 w-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>+91 915-658-9900</span>
                      </a>
                      <a href="mailto:vishwasglobaltechsolutions@gmail.com" className="inline-flex items-center hover:text-blue-200 transition-colors duration-200 mx-6">
                        <svg className="h-4 w-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>vishwasglobaltechsolutions@gmail.com</span>
                      </a>
                      <a href="https://wa.me/919156589900" className="inline-flex items-center hover:text-blue-200 transition-colors duration-200 mx-6">
                        <FaWhatsapp className="mr-2" />
                        <span>+91 9156589900</span>
                      </a>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919156589900?text= I am interested in your services. Can you please provide me more details?"
                  className="text-white hover:text-blue-200 transition-colors duration-200"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="h-5 w-5" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61574965181096"
                  className="text-white hover:text-blue-200 transition-colors duration-200"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <FaFacebook className="h-5 w-5" />
                </a>
                

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/your-linkedin"
                  className="text-white hover:text-blue-200 transition-colors duration-200"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <FaLinkedin className="h-5 w-5" />
                </a>
                 <a
                  href="https://www.instagram.com/vishwasglobaltechsolution?igsh=OWtsbGVlb3QwbG9l"
                  className="text-white hover:text-blue-200 transition-colors duration-200"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <FaInstagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <motion.div
                  initial={false}
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Image
                    src="https://res.cloudinary.com/diaba1bf2/image/upload/v1759995728/VGTSLogo_owbt9o.png"
                    alt="VGTS Logo"
                    width={150}
                    height={60}
                    className="h-24 w-auto md:h-24"
                    priority
                  />
                </motion.div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'Products', 'Careers', 'About'].map((item) => {
                const path = item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`;
                const isActive = pathname === path;
                
                return (
                  <Link
                    key={item}
                    href={path}
                    prefetch={true}
                    className={`relative ${
                      isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    } transition-colors duration-200 group`}
                  >
                    {item}
                    <motion.span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      initial={false}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                );
              })}
              <Link
                href="/contact"
                prefetch={true}
                className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-2 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-105 focus:scale-105 shadow-md hover:shadow-lg flex items-center"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <FaTimes className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <FaBars className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-white shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {['Home', 'Services', 'Careers', 'About', 'Contact'].map((item, index) => {
                  const path = item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`;
                  const isActive = pathname === path;
                  
                  return (
                    <motion.div
                      key={item}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={path}
                        className={`relative block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                          isActive ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="relative inline-block">
                          {item}
                          <motion.span
                            className="block h-0.5 bg-blue-600"
                            initial={false}
                            animate={{ width: isActive ? '100%' : 0 }}
                            transition={{ duration: 0.25 }}
                          />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex items-center px-5 space-x-4">
                    <a href="tel:+919876543210" className="flex items-center text-gray-700 hover:text-blue-600">
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+91 915-658-9900</span>
                    </a>
                  </div>
                  <div className="mt-3 flex items-center px-5 space-x-4">
                    <a href="mailto:vishwasglobaltechsolutions@gmail.com" className="flex items-center text-gray-700 hover:text-blue-600">
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>vishwasglobaltechsolutions@gmail.com</span>
                    </a>
                  </div>
                  <div className="mt-4 flex items-center px-5 space-x-4">
                    <a
                      href="https://wa.me/919156589900?text= I visited your website and I am interested in your services. Can you please provide me more details?"
                      className="text-gray-700 hover:text-blue-600"
                      aria-label="WhatsApp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61574965181096"
                      className="text-gray-700 hover:text-blue-600"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com/your-linkedin"
                      className="text-gray-700 hover:text-blue-600"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/vishwasglobaltechsolution?igsh=OWtsbGVlb3QwbG9l"
                      className="text-gray-700 hover:text-blue-600"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}

export default Navbar