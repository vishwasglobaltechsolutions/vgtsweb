'use client';

import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane, FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });
  const form = useRef();

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });


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


    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const contactInfo = [
    // {
    //   icon: <FaMapMarkerAlt className="text-2xl text-blue-600" />,
    //   title: 'Our Location',
    //   value: 'Plot No.01, 2nd Floor, Near Central Bank, Shivar, Akola-444104'
    // },
    {
      icon: <FaPhoneAlt className="text-2xl text-blue-600" />,
      title: 'Phone Number',
      value: '+91 915-658-9900',
      link: 'tel:+919156589900'
    },
    {
      icon: <FaEnvelope className="text-2xl text-blue-600" />,
      title: 'Email Address',
      value: 'vishwasglobaltechsolutions@gmail.com',
      link: 'mailto:vishwasglobaltechsolutions@gmail.com'
    },
    {
      icon: <FaClock className="text-2xl text-blue-600" />,
      title: 'Working Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-500 py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
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
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Have questions or need to get in touch? Reach out to us using the information below or fill out the contact form.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    {
                      name: 'Facebook',
                      icon: <FaFacebook className="text-xl" />,
                      url: 'https://www.facebook.com/vishwasglobaltechsolutions'
                    },
                    {
                      name: 'Twitter',
                      icon: <FaTwitter className="text-xl" />,
                      url: 'https://twitter.com/vishwasglobaltechsolutions'
                    },
                    {
                      name: 'LinkedIn',
                      icon: <FaLinkedinIn className="text-xl" />,
                      url: 'https://www.linkedin.com/company/vishwas-global-tech-solutions/'
                    },
                    {
                      name: 'Instagram',
                      icon: <FaInstagram className="text-xl" />,
                      url: 'https://www.instagram.com/vishwasglobaltechsolutions/'
                    },
                    {
                      name: 'Whatsapp',
                      icon: <FaWhatsapp className="text-xl" />,
                      url: 'https://wa.me/919156589900'
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 p-3 rounded-full transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <span className="sr-only">{social.name}</span>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="h-96 w-full bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.816471571031!2d77.01944021537725!3d20.043432327041794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6b9d7c1f1c1b5%3A0x1c8b9d9c9d9c9d9c!2sAkola%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;