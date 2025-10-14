import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Jamnik V. G.',
    role: 'Founder & CEO',
    bio: 'Technology enthusiast with over 10 years of experience in software development and IT consulting.',
    image: 'https://res.cloudinary.com/diaba1bf2/image/upload/v1760162990/vjpics_q4vln9.png',
  },
  {
    name: 'Manvar Umesh D.',
    role: 'CFO',
    bio: 'Financial expert with over 12 years of experience in finance and HR.',
    image: 'https://res.cloudinary.com/diaba1bf2/image/upload/c_pad,b_gen_fill,ar_3:4/v1760424975/UmeshPhoto_u0rlht.png',
  },
  // Add more team members as needed
];

const stats = [
  { label: 'Projects Completed', value: '25+' },
  { label: 'Happy Clients', value: '100%' },
  { label: 'Team Members', value: '10+' },  
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[url('https://res.cloudinary.com/diaba1bf2/image/upload/v1760036027/Digital-Transformation-min_jsyzat.png')] bg-cover bg-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-900 opacity-0"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"></h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">

          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
              <div className="mt-6 text-lg text-gray-600 space-y-6">
                <p>
                  Founded in 2022, Vishwa's Global Tech Solutions (VGTS) was born out of a vision to bridge the gap between cutting-edge technology and business growth. What started as a small team of passionate technologists has grown into a trusted partner for businesses worldwide.
                </p>
                <p>
                  Our journey began with a simple mission: to help businesses leverage technology to solve complex challenges and achieve sustainable growth. Over the years, we've had the privilege of working with startups, SMEs, and large enterprises across various industries.
                </p>
                <p>
                  Today, we're proud to be a team of 10+ experts, with a portfolio of 25+ successful projects and 100% satisfied clients. But what truly sets us apart is our commitment to building lasting relationships and delivering exceptional value.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg shadow-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Our team working together"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission & Vision</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-center">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world. We are committed to delivering exceptional value through cutting-edge technology, expert guidance, and unparalleled customer service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-center">
                To be the most trusted technology partner for businesses worldwide, recognized for our innovation, integrity, and commitment to excellence. We aspire to shape the future of technology by delivering transformative solutions that make a meaningful impact on businesses and society.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Core Values</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We embrace change and constantly seek new ways to solve problems and create value for our clients.',
                icon: '💡'
              },
              {
                title: 'Excellence',
                description: 'We are committed to delivering the highest quality solutions and exceeding our clients\' expectations.',
                icon: '🏆'
              },
              {
                title: 'Integrity',
                description: 'We conduct our business with honesty, transparency, and the highest ethical standards.',
                icon: '🤝'
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and work closely with our clients to achieve shared success.',
                icon: '👥'
              },
              {
                title: 'Customer Focus',
                description: 'We put our clients at the center of everything we do, delivering solutions that address their unique needs.',
                icon: '🎯'
              },
              {
                title: 'Continuous Learning',
                description: 'We foster a culture of learning and growth, staying at the forefront of technology and industry trends.',
                icon: '📚'
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet Our Leadership</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals leading our company to success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow w-full max-w-sm">
                <div className="relative h-100 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <p className="mt-3 text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-2 text-lg font-medium text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to grow your business?</span>
                  <span className="block text-blue-100">Get started with us today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-blue-200">
                  Let's discuss how we can help you achieve your business goals with our innovative technology solutions.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue-700 hover:bg-blue-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <div className="relative w-full h-full">
                <Image
                  className="w-full h-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                  alt="App screenshot"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}