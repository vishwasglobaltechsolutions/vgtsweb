'use client';

import React from 'react';
import { FaCode, FaServer, FaMobile, FaBrain, FaLaptopCode, FaUsers, FaRegClock, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Page = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Frontend Developer',
      type: 'Full-time',
      location: 'Akola, Maharashtra (Remote)',
      description: 'We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user interfaces using React.js and Next.js.',
      requirements: [
        '3+ years of experience with React.js',
        'Strong knowledge of JavaScript, HTML5, and CSS3',
        'Experience with state management (Redux/Context API)',
        'Familiarity with RESTful APIs',
        'Knowledge of modern frontend build pipelines and tools'
      ]
    },
    {
      id: 2,
      title: 'Backend Developer',
      type: 'Full-time',
      location: 'Akola, Maharashtra (Remote)',
      description: 'Join our backend team to build scalable and efficient server-side applications using Node.js and modern frameworks.',
      requirements: [
        'Experience with Node.js and Express.js',
        'Knowledge of databases (SQL/NoSQL)',
        'Understanding of RESTful API design',
        'Experience with cloud platforms (AWS/Azure/GCP)',
        'Familiarity with Docker and Kubernetes'
      ]
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Akola, Maharashtra (Remote)',
      description: 'We are seeking a creative UI/UX Designer to design amazing user experiences and beautiful interfaces for our digital products.',
      requirements: [
        'Proven UI/UX design experience',
        'Proficiency in design tools (Figma, Adobe XD, or Sketch)',
        'Strong portfolio of design projects',
        'Knowledge of HTML/CSS is a plus',
        'Experience with user research and testing'
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaLaptopCode className="w-8 h-8 text-blue-600" />,
      title: 'Flexible Work Hours',
      description: 'We believe in work-life balance and offer flexible working hours.'
    },
    {
      icon: <FaUsers className="w-8 h-8 text-blue-600" />,
      title: 'Team Activities',
      description: 'Regular team outings and activities to keep the team connected.'
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-blue-600" />,
      title: 'Learning & Development',
      description: 'Budget for courses, books, and conferences to support your growth.'
    },
    {
      icon: <FaRegClock className="w-8 h-8 text-blue-600" />,
      title: 'Paid Time Off',
      description: 'Generous vacation and paid time off policies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Join Our Team
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Be part of a team that's building innovative technology solutions for businesses worldwide.
          </p>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Join VGTS?
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Openings */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Current Openings
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Check out our available positions and find the perfect fit for your skills.
            </p>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <motion.div
                key={job.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="p-6 md:p-8">
                  <div className="md:flex md:items-center md:justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {job.title}
                      </h3>
                      <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <FaCode className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                          {job.type}
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <FaMapMarkerAlt className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex-shrink-0 md:mt-0 md:ml-4">
                          <Link 
                            href={`/applyforjob?position=${encodeURIComponent(job.title)}`}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Apply Now
                          </Link>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600">{job.description}</p>
                    <div className="mt-4">
                      <h4 className="text-lg font-medium text-gray-900">Requirements:</h4>
                      <ul className="mt-2 list-disc list-inside space-y-1 text-gray-600">
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Match Section */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-medium text-gray-900">Don't see a role that fits?</h3>
            <p className="mt-2 text-gray-600">
              We're always looking for talented individuals to join our team. Send us your resume at{' '}
              <a href="mailto:careers@vgts.com" className="text-blue-600 hover:text-blue-800">
              vishwasglobaltechsolutions@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to join our team?</span>
            <span className="block text-blue-200">Start your journey with us today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#job-openings"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;