"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import { FaLaptopCode, FaMobileAlt, FaCloud, FaPalette, FaUsers, FaBullhorn, FaTimes, FaBars, FaChevronLeft, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import { FaUsersGear } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

const services = [
  {
    title: "Software Development",
    description: "Custom websites and Mobile applications built with AI Powered modern technologies.",
    icon: <FaLaptopCode className="w-8 h-8 text-blue-600" />
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that enhance user experience.",
    icon: <FaPalette className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Business Automation",
    description: "Automate your business processes with our proven automation techniques.",
    icon: <FaUsersGear className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Digital Marketing",
    description: "Increase your online presence and reach your target audience with our digital marketing services.",
    icon: <FaBullhorn className="w-8 h-8 text-blue-600" />
  },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here

    // Show success toast
    setShowToast(true);
    // Hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  // Add this inside your return statement, right after the form closing tag
  <AnimatePresence>
    {showToast && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
      >
        Message sent successfully!
      </motion.div>
    )}
  </AnimatePresence>

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Slider */}
      <section id="home" className="relative bg-gray-900  text-white overflow-hidden text-shadow-xl" style={{ height: '90vh', marginTop: '-20px' }}>
        <Swiper
          modules={[Autoplay, Navigation, EffectFade, Pagination]}
          effect="fade"
          speed={1000}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            renderBullet: (index, className) => {
              return `<span class="${className} bg-white opacity-50 hover:opacity-100 transition-opacity duration-300"></span>`;
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: 'opacity-30 cursor-not-allowed',
          }}
          className="w-full h-[80vh] min-h-[600px]"
        >
          {/* Slide 1 */}
          <SwiperSlide className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-4xl mx-auto"
                >
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg leading-tight">Innovative IT Solutions for Your Business</h1>
                  <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100 drop-shadow-md font-medium leading-relaxed">Transforming ideas into powerful digital experiences with cutting-edge technology.</p>
                  <div className="flex flex-nowrap gap-2 sm:gap-4 justify-center items-center overflow-x-auto w-full px-2 pb-10 sm:px-0">
                    <Link href="#contact" className="whitespace-nowrap text-center bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Get Started
                    </Link>
                    <Link href="#services" className="whitespace-nowrap text-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Our Services
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-600/70"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-4xl mx-auto"
                >
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg leading-tight">Custom Software Development</h1>
                  <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100 drop-shadow-md font-medium leading-relaxed">Tailored solutions that drive business growth and digital transformation.</p>
                  <div className="flex flex-nowrap gap-2 sm:gap-4 justify-center items-center overflow-x-auto w-full px-2 sm:px-0">
                    <Link href="#contact" className="whitespace-nowrap text-center bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Start Project
                    </Link>
                    <Link href="#services" className="whitespace-nowrap text-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      View Services
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-teal-600/70"></div>
            <div className="absolute inset-0 bg-[url('https://rushford.ch/wp-content/uploads/2023/11/a-HELXLsGGM-transformed-770x400.jpeg')] bg-cover bg-center"></div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-4xl mx-auto"
                >
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg leading-tight">Digital Transformation Experts</h1>
                  <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100 drop-shadow-md font-medium leading-relaxed">Helping businesses thrive in the digital age with innovative solutions.</p>
                  <div className="flex flex-nowrap gap-2 sm:gap-4 justify-center items-center overflow-x-auto w-full px-2 sm:px-0 pb-10">
                    <Link href="#contact" className="whitespace-nowrap text-center bg-cyan-600 hover:bg-cyan-700 text-white px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Contact Us
                    </Link>
                    <Link href="#about" className="whitespace-nowrap text-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Know More
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>

          {/* Navigation Buttons - Minimum
          <div className="absolute left-2 sm:left-4 top-1/2 z-10 -translate-y-1/2">
            <button className="swiper-button-prev w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200">
              <FaChevronLeft className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </button>
          </div>
          <div className="absolute right-2 sm:right-4 top-1/2 z-10 -translate-y-1/2">
            <button className="swiper-button-next w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200">
              <FaChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </button>
          </div> */}

        </Swiper>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-10 md:mb-10 md:pr-10 ">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About VGTS</h2>
              <p className="text-gray-700 mb-4">
                At Vishwa's Global Tech Solutions, we are passionate about delivering innovative technology solutions that drive business growth and digital transformation.
              </p>
              <p className="text-gray-700 mb-6">
                With a team of experienced professionals, we help businesses of all sizes navigate the complex world of technology and achieve their digital goals.
              </p>
              <Link href="about" className="text-blue-600 font-semibold hover:underline">
                Know more about us →
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-300 h-80 rounded-lg  flex items-center justify-center text-gray-500 ">
                <img src="https://res.cloudinary.com/diaba1bf2/image/upload/v1759995199/AIMan_q1wukx.webp" alt="VGTS Logo" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        
          {/* Your existing form fields */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ready to start your next project? Contact us today for a free consultation.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">VGTS</h3>
              <p className="text-gray-400">Innovative IT solutions for the digital age.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#home" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="#services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="#about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link href="#services" className="text-gray-400 hover:text-white">{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="not-italic text-gray-400">
                <p>Plot No.101, 2nd Floor</p>
                <p>Near Central Bank</p>
                <p>Shivar, Akola</p>
                <p className="mt-2">Email: <a href="mailto:vishwasglobaltechsolutions@gmail.com">vishwasglobaltechsolutions@gmail.com</a></p>
                <p>Phone: +91 915-658-9900</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Vishwa's Global Tech Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
