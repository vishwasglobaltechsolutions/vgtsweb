"use client";

import React from 'react';
import Link from "next/link";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { FaLaptopCode, FaMobileAlt, FaCloud, FaPalette, FaUsers, FaBullhorn, FaTimes, FaBars, FaChevronLeft, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import { FaUsersGear } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import HeroSlider from './components/HeroSlider';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    try {
      if (!form.current) {
        throw new Error('Form reference is not available');
      }

      // Check if environment variables are set
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS configuration is incomplete. Please check your environment variables.');
      }

      // Initialize EmailJS
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

      // Create form data object
      const formData = new FormData(form.current);
      const templateParams = Object.fromEntries(formData.entries());

      // Use a promise to handle the email sending
      const result = await new Promise((resolve, reject) => {
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
          .then(resolve)
          .catch(reject);
      });

      console.log('Email sent successfully!', result);
      setSubmitStatus({
        success: true,
        message: 'Message sent successfully! We\'ll get back to you soon.'
      });
      form.current.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus({
        success: false,
        message: `Failed to send message: ${error.message || 'Please try again later.'}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  // Add a useEffect to log environment variables in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('EmailJS Config:', {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? 'Set' : 'Missing',
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ? 'Set' : 'Missing',
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'Set (first 5 chars): ' + process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.substring(0, 5) + '...' : 'Missing'
      });
    }
  }, []);


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
      <section id="home" className="relative bg-gray-900 text-white overflow-hidden text-shadow-xl" style={{ height: '80vh' }}>
        <HeroSlider
          slides={[
            {
              title: 'Innovative IT Solutions for Your Business',
              description: 'Transforming ideas into powerful digital experiences with cutting-edge technology.',
              image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
              gradientFrom: 'rgba(30, 58, 138, 0.9)', // blue-900/90
              gradientTo: 'rgba(37, 99, 235, 0.7)',   // blue-600/70
              buttons: [
                { text: 'Get Started', href: 'https://wa.me/919156589900?text= I am interested in your services. Can you please provide me more details?', isPrimary: true },
                { text: 'Our Services', href: '#services', isPrimary: false }
              ]
            },
            {
              title: 'Custom Software Development',
              description: 'Tailored solutions that drive business growth and digital transformation.',
              image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
              gradientFrom: 'rgba(76, 29, 149, 0.9)',  // purple-900/90
              gradientTo: 'rgba(79, 70, 229, 0.7)',    // indigo-600/70
              buttons: [
                { text: 'Start Project', href: 'https://wa.me/919156589900?text= I want to make my Software (Website or Mobile App). Can you please provide me more details?', isPrimary: true },
                { text: 'View Services', href: '#services', isPrimary: false }
              ]
            },
            {
              title: 'Digital Transformation Experts',
              description: 'Helping businesses thrive in the digital age with innovative solutions.',
              image: 'https://rushford.ch/wp-content/uploads/2023/11/a-HELXLsGGM-transformed-770x400.jpeg',
              gradientFrom: 'rgba(14, 78, 103, 0.9)',  // cyan-900/90
              gradientTo: 'rgba(13, 148, 136, 0.7)',   // teal-600/70
              buttons: [
                { text: 'Contact Us', href: 'https://wa.me/919156589900?text= I am interested in your services. Can you please provide me more details?', isPrimary: true },
                { text: 'Know More', href: '#about', isPrimary: false }
              ]
            }
          ]}
        />
      </section>

      {/* Services Section */}
      <section id="services" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-2">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-10 md:mb-10 md:pr-10 ">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">About VGTS</h2>
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
            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
             <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input
                  type="number"
                  id="mobile"
                  name="from_mobile"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
              {submitStatus.message && (
                <div className={`p-3 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                  {submitStatus.message}
                </div>
              )}
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
