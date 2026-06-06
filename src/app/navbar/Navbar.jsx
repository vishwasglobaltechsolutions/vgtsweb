"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaWhatsapp, FaFacebook,FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaPalette, FaUsers, FaBullhorn, FaTimes, FaBars, FaChevronLeft, FaChevronRight, FaChevronDown, FaGraduationCap } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const dropdownItems = {
    Services: [
      { name: 'Software Development', href: '/services#software-development', icon: <FaLaptopCode className="w-4 h-4" /> },
      { name: 'UI/UX Design', href: '/services#ui-ux-design', icon: <FaPalette className="w-4 h-4" /> },
      { name: 'Business Automation', href: '/services#business-automation', icon: <FaUsers className="w-4 h-4" /> },
      { name: 'Digital Marketing', href: '/services#digital-marketing', icon: <FaBullhorn className="w-4 h-4" /> }
    ],
    Products: [
      { name: 'JobHook', href: 'https://jobhook.in/', icon: <FaLaptopCode className="w-4 h-4" /> },
      { name: 'Educational Institute Management', href: '/products#educational', icon: <FaGraduationCap className="w-4 h-4" /> },
      { name: 'Online Exam Portal', href: '/products#exam-portal', icon: <FaLaptopCode className="w-4 h-4" /> }
    ],
    Projects: [
      { name: 'Web Development', href: '/projects?category=web', icon: <FaLaptopCode className="w-4 h-4" /> },
      { name: 'Mobile Apps', href: '/projects?category=mobile', icon: <FaMobileAlt className="w-4 h-4" /> },
      { name: 'UI/UX Design', href: '/projects?category=design', icon: <FaPalette className="w-4 h-4" /> }
    ]
  };

  const hasDropdown = (item) => ['Services', 'Products'].includes(item);

  const handleDropdownHover = (item, isOpen) => {
    if (hasDropdown(item)) {
      setOpenDropdown(isOpen ? item : null);
    }
  };

  const handleMobileDropdownToggle = (item) => {
    if (hasDropdown(item)) {
      setMobileDropdown(mobileDropdown === item ? null : item);
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
      setMobileDropdown(null);
    };

    // Add event listener for route changes
    window.addEventListener('popstate', handleRouteChange);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
            <div className="hidden md:flex items-center space-x-6">
              {['Home', 'Services', 'Products', 'About'].map((item) => {
                const path = item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`;
                const isActive = pathname === path;
                const isDropdownOpen = openDropdown === item;
                
                if (hasDropdown(item)) {
                  return (
                    <div
                      key={item}
                      className="relative dropdown-container"
                      onMouseEnter={() => handleDropdownHover(item, true)}
                      onMouseLeave={() => handleDropdownHover(item, false)}
                    >
                      <button
                        className={`flex items-center gap-1 relative transition-colors duration-200 group ${
                          isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                        }`}
                      >
                        {item}
                        <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        <motion.span
                          className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all ${
                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                          initial={false}
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
                          >
                            {dropdownItems[item].map((dropdownItem, idx) => (
                              <a
                                key={idx}
                                href={dropdownItem.href}
                                target={dropdownItem.href.startsWith('http') ? '_blank' : undefined}
                                rel={dropdownItem.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                              >
                                <span className="text-blue-600">{dropdownItem.icon}</span>
                                <span className="text-sm font-medium">{dropdownItem.name}</span>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={item}
                    href={path}
                    prefetch={true}
                    className={`relative transition-colors duration-200 group ${
                      isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
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
                  <FaTimes className="block h-4 w-4" aria-hidden="true" />
                ) : (
                  <FaBars className="block h-4 w-4" aria-hidden="true" />
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
                {['Home', 'Services', 'Products', 'About', 'Contact'].map((item, index) => {
                  const path = item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`;
                  const isActive = pathname === path;
                  const isMobileDropdownOpen = mobileDropdown === item;
                  
                  return (
                    <motion.div
                      key={item}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {hasDropdown(item) ? (
                        <div>
                          <button
                            onClick={() => handleMobileDropdownToggle(item)}
                            className={`relative w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors ${
                              isActive ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                            }`}
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
                            <FaChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                          </button>
                          
                          <AnimatePresence>
                            {isMobileDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 pr-2 py-2 space-y-1"
                              >
                                {dropdownItems[item].map((dropdownItem, idx) => (
                                  <a
                                    key={idx}
                                    href={dropdownItem.href}
                                    target={dropdownItem.href.startsWith('http') ? '_blank' : undefined}
                                    rel={dropdownItem.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                  >
                                    <span className="text-blue-600">{dropdownItem.icon}</span>
                                    <span>{dropdownItem.name}</span>
                                  </a>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
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
                      )}
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