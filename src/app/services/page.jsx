'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaPalette, FaUsers, FaBullhorn, FaCheckCircle, FaArrowRight, FaCogs, FaRocket, FaHandshake, FaLightbulb, FaChartLine, FaCode, FaMobile, FaPaintBrush, FaRobot, FaEnvelope, FaPhone, FaWhatsapp, FaStar } from 'react-icons/fa';
import { FaUsersGear } from 'react-icons/fa6';
import Footer from '../footer/page';

const services = [
  {
    id: 'software-development',
    icon: <FaLaptopCode className="w-16 h-16" />,
    title: 'Software Development',
    subtitle: 'Custom Solutions for Your Business',
    description: 'We build custom software solutions tailored to your unique business requirements. From web applications to enterprise systems, our expert team delivers scalable, secure, and high-performance software.',
    features: [
      'Custom Web Applications',
      'Enterprise Software Solutions',
      'API Development & Integration',
      'Cloud-Based Solutions',
      'Legacy System Modernization',
      'Maintenance & Support'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Python', 'Java', 'AWS', 'Azure'],
    color: 'from-blue-600 to-blue-800',
    lightColor: 'bg-blue-50'
  },
  {
    id: 'ui-ux-design',
    icon: <FaPalette className="w-16 h-16" />,
    title: 'UI/UX Design',
    subtitle: 'Beautiful & Intuitive Experiences',
    description: 'Our design team creates stunning, user-centered interfaces that not only look great but also provide exceptional user experiences. We focus on usability, accessibility, and conversion optimization.',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Responsive Design',
      'Design Systems',
      'User Testing'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
    color: 'from-purple-600 to-purple-800',
    lightColor: 'bg-purple-50'
  },
  {
    id: 'business-automation',
    icon: <FaUsersGear className="w-16 h-16" />,
    title: 'Business Automation',
    subtitle: 'Streamline Your Operations',
    description: 'Transform your business processes with intelligent automation solutions. We help you eliminate manual tasks, reduce errors, and increase efficiency across your organization.',
    features: [
      'Process Automation',
      'Workflow Optimization',
      'Custom CRM Solutions',
      'Data Integration',
      'Reporting & Analytics',
      'AI-Powered Solutions'
    ],
    technologies: ['Zapier', 'Make', 'Power Automate', 'Python', 'RPA Tools'],
    color: 'from-green-600 to-green-800',
    lightColor: 'bg-green-50'
  },
  {
    id: 'digital-marketing',
    icon: <FaBullhorn className="w-16 h-16" />,
    title: 'Digital Marketing',
    subtitle: 'Grow Your Online Presence',
    description: 'Boost your brand visibility and attract more customers with our comprehensive digital marketing strategies. We combine data-driven insights with creative campaigns to deliver measurable results.',
    features: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Content Marketing',
      'Pay-Per-Click Advertising',
      'Email Marketing',
      'Analytics & Reporting'
    ],
    technologies: ['Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp', 'Meta Ads'],
    color: 'from-orange-600 to-orange-800',
    lightColor: 'bg-orange-50'
  }
];

const processSteps = [
  { icon: <FaLightbulb className="w-8 h-8" />, title: 'Discovery', description: 'We analyze your requirements and understand your business goals.' },
  { icon: <FaRocket className="w-8 h-8" />, title: 'Planning', description: 'We create a detailed roadmap and project timeline.' },
  { icon: <FaCode className="w-8 h-8" />, title: 'Development', description: 'Our team builds your solution using cutting-edge technologies.' },
  { icon: <FaCheckCircle className="w-8 h-8" />, title: 'Testing', description: 'Rigorous testing ensures quality and performance.' },
  { icon: <FaRocket className="w-8 h-8" />, title: 'Launch', description: 'We deploy your solution and ensure a smooth launch.' },
  { icon: <FaHandshake className="w-8 h-8" />, title: 'Support', description: 'Ongoing support and maintenance for long-term success.' }
];

const testimonials = [
  {
    name: 'Mr. Mohan Patil',
    role: 'Director of Divinity Security Services Pvt. Ltd.',    
    content: 'VGTS transformed our business with their custom software solution. The team was professional, responsive, and delivered beyond our expectations.',
    rating: 5
  },
  {
    name: 'Pravin Tarkase',
    role: 'CEO of Manisha Security Services',
    content: 'Their digital marketing expertise helped us increase our online presence by 300%. Highly recommended for any business looking to grow.',
    rating: 5
  },
  {
    name: 'Mr. Dharmendra Shinde',
    role: 'Founder of Sahakar Defence Academy',
    content: 'The UI/UX design they created for our platform is exceptional. User engagement increased by 150% after the redesign.',
    rating: 5
  }
];

const faqs = [
  {
    question: 'How long does it take to complete a project?',
    answer: 'Project timelines vary based on complexity and scope. A simple website may take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during the planning phase.'
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, industry-standard technologies including React, Next.js, Node.js, Python, cloud platforms (AWS, Azure), and various databases. We choose the best technology stack based on your project requirements.'
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer comprehensive support and maintenance packages to ensure your software runs smoothly. This includes bug fixes, updates, security patches, and technical support.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. We provide transparent quotes after understanding your requirements during the discovery phase.'
  },
  {
    question: 'Can you work with our existing team?',
    answer: 'Absolutely! We can work as an extension of your team, collaborate with your in-house developers, or take complete ownership of the project based on your preferences.'
  }
];

const ServiceCard = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
            {React.cloneElement(service.icon, { className: 'w-12 h-12 text-white' })}
          </div>
          <div>
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <p className="text-white/80 text-sm">{service.subtitle}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech, idx) => (
              <span key={idx} className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 transition-colors"
        >
          {isExpanded ? 'Learn Less' : 'Learn More'}
          <FaArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
        </button>
      </div>
    </motion.div>
  );
};

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border border-gray-200 rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800">{faq.question}</span>
        <FaArrowRight className={`w-5 h-5 text-blue-600 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 px-6 py-4"
          >
            <p className="text-gray-600">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-indigo-400/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-blue-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions tailored to meet your business needs and drive digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919156589900?text=I am interested in your services. Can you please provide me more details?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <FaWhatsapp className="mr-2" />
                Get Started
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert services designed to help your business thrive in the digital age
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology to ensure project success
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl mb-4">
                  {React.cloneElement(step.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses across various industries
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-green-700" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your digital goals with our expert services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919156589900?text=I am interested in your services. Can you please provide me more details?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <FaWhatsapp className="mr-2" />
                Start a Project
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
