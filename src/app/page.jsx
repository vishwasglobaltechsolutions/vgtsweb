"use client";

import React from 'react';
import Link from "next/link";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaPalette, FaUsers, FaBullhorn, FaTimes, FaBars, FaChevronLeft, FaChevronRight, FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaCheckCircle, FaArrowRight, FaRocket, FaShieldAlt, FaHeadset, FaClock, FaAward, FaStar, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaUsersGear } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import VideoCard3D from './components/VideoCard3D';

const services = [
  {
    title: "Software Development",
    description: "Custom websites and Mobile applications built with AI Powered modern technologies.",
    icon: <FaLaptopCode className="w-8 h-8" />,
    color: "from-blue-500 to-blue-700",
    features: ["Custom Solutions", "Scalable Architecture", "Modern Tech Stack"]
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that enhance user experience.",
    icon: <FaPalette className="w-8 h-8" />,
    color: "from-purple-500 to-purple-700",
    features: ["User-Centered", "Responsive Design", "Brand Identity"]
  },
  {
    title: "Business Automation",
    description: "Automate your business processes with our proven automation techniques.",
    icon: <FaUsersGear className="w-8 h-8" />,
    color: "from-green-500 to-green-700",
    features: ["Process Optimization", "Cost Reduction", "Efficiency Boost"]
  },
  {
    title: "Digital Marketing",
    description: "Increase your online presence and reach your target audience with our digital marketing services.",
    icon: <FaBullhorn className="w-8 h-8" />,
    color: "from-orange-500 to-orange-700",
    features: ["SEO Optimization", "Social Media", "Content Strategy"]
  },
];

const stats = [
  { value: "25+", label: "Projects Completed", icon: <FaCheckCircle /> },
  { value: "100%", label: "Happy Clients", icon: <FaUsers /> },
  { value: "30+", label: "Years of Experienced Team", icon: <FaAward /> },
  { value: "24/7", label: "Support Available", icon: <FaHeadset /> }
];

const features = [
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: "Fast Delivery",
    description: "We deliver projects on time with our efficient development process."
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Secure Solutions",
    description: "Security is our priority. We build secure and reliable applications."
  },
  {
    icon: <FaClock className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Round-the-clock support to ensure your business runs smoothly."
  }
];

const headlines = [
  "Innovative IT Solutions for Your Business",
  "Custom Software Development",
  "Digital Transformation Experts"
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
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

      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS configuration is incomplete. Please check your environment variables.');
      }

      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

      const formData = new FormData(form.current);
      const templateParams = Object.fromEntries(formData.entries());

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

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('EmailJS Config:', {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? 'Set' : 'Missing',
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ? 'Set' : 'Missing',
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'Set (first 5 chars): ' + process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.substring(0, 5) + '...' : 'Missing'
      });
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with 3D Video Card */}
      <section
        id="home"
        className="relative bg-slate-950 text-white overflow-hidden py-16 md:py-24 lg:py-0 lg:h-[90vh] flex items-center"
      >
        {/* Tech Grid / Dot Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 z-0" />

        {/* Soft decorative background glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-blue-900/20 blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-indigo-900/20 blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 md:space-y-8">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-white text-xs sm:text-sm font-semibold tracking-wide"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Vishwa's Global Tech Solution
              </motion.div>

              {/* Rotating Title */}
              <div className="relative min-h-[110px] sm:min-h-[130px] md:min-h-[160px] lg:min-h-[190px] w-full flex items-center">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={headlineIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-0 right-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 py-3"
                  >
                    {headlines[headlineIndex]}
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
              >
                Transforming ideas into powerful, scaleable digital experiences with AI-powered technologies, custom software, and responsive design systems.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap sm:flex-nowrap gap-4 w-full"
              >
                <Link
                  href="https://wa.me/919156589900?text=I am interested in your services. Can you please provide me more details?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.03]"
                >
                  <FaWhatsapp className="w-5 h-5 mr-2" />
                  Get Started
                </Link>
                <a
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm sm:text-base font-semibold text-slate-200 border-2 border-slate-700 hover:border-slate-500 hover:bg-slate-800/40 transition-all duration-300 hover:scale-[1.03]"
                >
                  Our Services
                </a>
              </motion.div>

              {/* Mini tech stack badges to highlight skills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-800/80"
              >
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Expertise:</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800/60 border border-slate-700 text-slate-300 font-medium">Web Development</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800/60 border border-slate-700 text-slate-300 font-medium">Mobile App Development</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800/60 border border-slate-700 text-slate-300 font-medium">SEO & Analytics</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800/60 border border-slate-700 text-slate-300 font-medium">Firebase & Azure</span>

              </motion.div>

            </div>

            {/* Right Video Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 w-full flex items-center justify-center"
            >
              <VideoCard3D videoUrl="https://res.cloudinary.com/diaba1bf2/video/upload/v1780813167/vgtsIntro_pgupad.mp4" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-100 text-blue-600 rounded-full mb-3 md:mb-4">
                  {React.cloneElement(stat.icon, { className: 'w-6 h-6 md:w-8 md:h-8' })}
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to meet your business needs
            </p>
            <div className="w-16 md:w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${service.color} text-white rounded-2xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {React.cloneElement(service.icon, { className: 'w-7 h-7 md:w-8 md:h-8' })}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                        <FaCheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8 md:mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              Explore All Services
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver excellence through innovation, quality, and dedication
            </p>
            <div className="w-16 md:w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 md:p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl mb-4 md:mb-6">
                  {React.cloneElement(feature.icon, { className: 'w-8 h-8 md:w-10 md:h-10' })}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-48 h-48 md:w-72 md:h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                <img
                  src="https://res.cloudinary.com/diaba1bf2/image/upload/v1759995199/AIMan_q1wukx.webp"
                  alt="VGTS Team"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About VGTS</h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                At Vishwa's Global Tech Solution, we are passionate about delivering innovative technology solutions that drive business growth and digital transformation.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                With a team of experienced professionals, we help businesses of all sizes navigate the complex world of technology and achieve their digital goals.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-blue-600">
                  <FaCheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-medium text-sm md:text-base">Expert Team</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <FaCheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-medium text-sm md:text-base">Quality Solutions</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <FaCheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-medium text-sm md:text-base">24/7 Support</span>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                Know More About Us
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? Contact us today for a free consultation.
            </p>
            <div className="w-16 md:w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-slate-950 to-blue-800 text-white p-6 md:p-8 rounded-2xl"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg flex-shrink-0">
                    <FaPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href="tel:+919156589900" className="text-blue-100 hover:text-white transition-colors">
                      +91 915-658-9900
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg flex-shrink-0">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:vishwasglobaltechsolutions@gmail.com" className="text-blue-100 hover:text-white transition-colors break-all">
                      vishwasglobaltechsolutions@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg flex-shrink-0">
                    <FaWhatsapp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/919156589900"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      +91 915-658-9900
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <form className="space-y-4 md:space-y-6" ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="from_name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="from_email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="from_mobile"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-base"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-base"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center px-6 py-4 border border-transparent rounded-lg text-base font-medium text-white transition-all duration-300 ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-900 hover:bg-blue-800 hover:shadow-lg'
                    }`}
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
                {submitStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-slate-950 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-2 md:px-0"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">Ready to Transform Your Business?</h2>
            <p className="text-sm md:text-base lg:text-xl text-blue-100 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can help you achieve your digital goals with our expert services
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full">
              <a
                href="https://wa.me/919156589900?text=I am interested in your services. Please schedule a meeting?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 md:px-8 py-3 md:py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm md:text-base w-full sm:w-auto"
              >
                <FaWhatsapp className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                Schedule a Meeting
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 md:px-8 py-3 md:py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors text-sm md:text-base w-full sm:w-auto"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">VGTS</h3>
              <p className="text-gray-400 mb-6 text-sm md:text-base">Innovative IT solutions for the digital age.</p>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/919156589900?text= I am interested in your services. Can you please provide me more details?"
                  className="text-white hover:text-blue-200 transition-colors duration-200"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61574965181096"
                  className="text-white hover:text-blue-200 transition-colors duration-200"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>

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
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 md:space-y-3">
                <li><Link href="#home" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Home</Link></li>
                <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Services</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">About Us</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 md:space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Contact Us</h4>
              <address className="not-italic text-gray-400 space-y-2 md:space-y-3">
                <p className="flex items-center gap-2">
                  <FaEnvelope className="w-4 h-4" />
                  <a href="mailto:vishwasglobaltechsolutions@gmail.com" className="hover:text-white transition-colors text-xs md:text-base break-all">
                    vishwasglobaltechsolutions<br />@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="w-4 h-4" />
                  <a href="tel:+919156589900" className="hover:text-white transition-colors text-sm md:text-base">
                    +91 915-658-9900
                  </a>
                </p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400">
            <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Vishwa's Global Tech Solution. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
