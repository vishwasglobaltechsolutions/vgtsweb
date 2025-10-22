import React from 'react'
import Link from 'next/link'
import { FaUsersGear } from 'react-icons/fa6';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaPalette, FaUsers, FaBullhorn, FaTimes, FaBars, FaChevronLeft, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
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

const Footer = () => {
  return (
    <div>
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
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link href="/services" className="text-gray-400 hover:text-white">{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="not-italic text-gray-400">
                {/* <p>Plot No.01, 2nd Floor</p>
                <p>Near Central Bank</p>
                <p>Shivar, Akola</p> */}
                <p className="mt-2">Email: <a href="mailto:vishwasglobaltechsolutions@gmail.com">vishwasglobaltechsolutions@gmail.com</a></p>
                <p>Phone: +91 915-658-9900</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Vishwa's Global Tech-Solution. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;