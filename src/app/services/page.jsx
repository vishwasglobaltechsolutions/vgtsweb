'use client';

import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaPalette, FaServer, FaChartLine } from 'react-icons/fa';
import { FaUsersGear } from 'react-icons/fa6';
import Footer from '../footer/page';
const services = [
  {
    icon: <FaLaptopCode className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern technologies like React, Next.js, and Node.js for optimal performance and user experience.'
  },
  {
    icon: <FaMobileAlt className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications using React Native and Flutter, delivering native-like performance across iOS and Android platforms.'
  },
  {
    icon: <FaServer className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'Backend Solutions',
    description: 'Robust backend systems with Node.js, Python, and Java, ensuring scalability, security, and high performance for your applications.'
  },
  {
      icon: <FaUsersGear className="w-8 h-8 text-blue-600" />,
      title: "Business Automation",
      description: "Automate your business processes with our proven automation techniques.",
      
  },
  {
    icon: <FaPalette className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality, creating intuitive and engaging user experiences.'
  },
  {
    icon: <FaChartLine className="w-12 h-12 text-blue-600 mb-4" />,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies including SEO, content marketing, and social media to grow your online presence.'
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-blue-600 text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your digital goals with our expert services.
          </p>
          <button onClick={() => window.open('https://wa.me/919156589900?text= I am interested in your services. Can you please provide me more details?')} className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Get a Free Consultation          
          </button>
        </div>  
           
      </div> 
      <div className="mt-20 pb-0">
            <Footer />  
      </div> 
     
       
    </div>
    
  );
};

export default ServicesPage;