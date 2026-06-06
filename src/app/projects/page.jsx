"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaFilter, FaTimes, FaLaptopCode, FaMobileAlt, FaPalette, FaDatabase, FaCloud, FaShoppingCart, FaGraduationCap, FaHeartbeat, FaGamepad, FaUserAstronaut } from 'react-icons/fa';
import { FaTabletScreenButton, FaToolbox } from 'react-icons/fa6';

const projects = [
  {
    id: 1,
    title: 'Educational Mobile App',
    category: 'mobile',
    description: 'Interactive mobile learning application with video lessons, quizzes, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1554469384-e58e1667cd02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    features: ['Video Lessons', 'Interactive Quizzes', 'Progress Tracking', 'Offline Mode'],
    liveUrl: 'https://apps.apple.com/example-education',
    githubUrl: 'https://github.com/vgts/education-app',
    icon: <FaGraduationCap className="w-6 h-6" />   
   
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    category: 'web',
    description: 'Comprehensive healthcare management system for hospitals with patient records, appointments, and billing.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
    features: ['Patient Management', 'Appointment Scheduling', 'Medical Records', 'Billing System'],
    liveUrl: 'https://example-healthcare.com',
    githubUrl: 'https://github.com/vgts/healthcare-system',
    icon: <FaHeartbeat className="w-6 h-6" />
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    category: 'web',
    description: 'A full-featured e-commerce platform with payment integration, inventory management, and real-time analytics.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    features: ['Payment Gateway', 'Admin Dashboard', 'Real-time Analytics', 'Mobile Responsive'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/vgts/ecommerce-platform',
    icon: <FaShoppingCart className="w-6 h-6" />
  },
  {
    id: 4,
    title: 'Gaming Platform',
    category: 'web',
    description: 'Multiplayer gaming platform with real-time gameplay, leaderboards, and social features.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['Unity', 'WebSocket', 'Redis', 'AWS'],
    features: ['Multiplayer Gaming', 'Real-time Chat', 'Leaderboards', 'Tournaments'],
    liveUrl: 'https://example-gaming.com',
    githubUrl: 'https://github.com/vgts/gaming-platform',
    icon: <FaGamepad className="w-6 h-6" />
  },
  {
    id: 5,
    title: 'CRM Dashboard',
    category: 'web',
    description: 'Advanced customer relationship management dashboard with analytics and automation features.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['Angular', 'TypeScript', 'MySQL', 'Express.js'],
    features: ['Customer Management', 'Sales Analytics', 'Email Automation', 'Reporting'],
    liveUrl: 'https://example-crm.com',
    githubUrl: 'https://github.com/vgts/crm-dashboard',
    icon: <FaDatabase className="w-6 h-6" />
  },
  {
    id: 6,
    title: 'Fitness Tracker App',
    category: 'mobile',
    description: 'Personal fitness tracking application with workout plans, nutrition tracking, and social features.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Python'],
    features: ['Workout Plans', 'Nutrition Tracking', 'Social Features', 'Progress Analytics'],
    liveUrl: 'https://play.google.com/example-fitness',
    githubUrl: 'https://github.com/vgts/fitness-tracker',
    icon: <FaMobileAlt className="w-6 h-6" />
  },
  {
    id: 7,
    title: 'Cloud Storage Solution',
    category: 'web',
    description: 'Secure cloud storage platform with file sharing, collaboration tools, and advanced security features.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'AWS S3', 'Node.js', 'PostgreSQL'],
    features: ['File Storage', 'Real-time Collaboration', 'Version Control', 'Advanced Security'],
    liveUrl: 'https://example-cloud.com',
    githubUrl: 'https://github.com/vgts/cloud-storage',
    icon: <FaCloud className="w-6 h-6" />
  },
  {
    id: 8,
    title: 'UI/UX Design System',
    category: 'design',
    description: 'Comprehensive design system with reusable components, style guides, and design tokens.',
    image: 'https://images.unsplash.com/photo-1559028012-c72dfb971a41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['Figma', 'Storybook', 'CSS Variables', 'React'],
    features: ['Component Library', 'Design Tokens', 'Style Guide', 'Documentation'],
    liveUrl: 'https://example-design-system.com',
    githubUrl: 'https://github.com/vgts/design-system',
    icon: <FaPalette className="w-6 h-6" />
  }
];

const categories = [
  { id: 'all', name: 'All Projects', icon: <FaLaptopCode className="w-4 h-4" /> },
  { id: 'web', name: 'Web Development', icon: <FaLaptopCode className="w-4 h-4" /> },
  { id: 'mobile ', name: 'Mobile Apps', icon: <FaMobileAlt className="w-4 h-4" /> },
  { id: 'design', name: 'UI/UX Design', icon: <FaPalette className="w-4 h-4" /> },
   { id: 'testing&automation', name: 'Testing & Automation', icon: <FaUserAstronaut className="w-4 h-4" /> }
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 hover:bg-white transition-colors"
                >
                  <FaExternalLinkAlt className="w-3 h-3" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 hover:bg-white transition-colors"
                >
                  <FaGithub className="w-3 h-3" />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="text-blue-600">
            {project.icon}
          </div>
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {categories.find(cat => cat.id === project.category)?.name}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-1">
            {project.features.slice(0, 3).map((feature, idx) => (
              <span
                key={idx}
                className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
            {project.features.length > 3 && (
              <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
                +{project.features.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filterProjects = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Explore our diverse range of projects showcasing innovation, creativity, and technical excellence across various industries.
            </p>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-400/20 rounded-full blur-xl"></div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FaFilter className="text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => filterProjects(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's collaborate to bring your ideas to life with our expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919156589900?text=I am interested in your services. Can you please provide me more details?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start a Project
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}