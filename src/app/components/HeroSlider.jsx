'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSlider = ({ slides = [] }) => {
  return (
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
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <div 
            className="absolute inset-0 bg-gradient-to-r opacity-90"
            style={{ 
              background: `linear-gradient(to right, ${slide.gradientFrom}, ${slide.gradientTo})` 
            }}
          ></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto "
              >
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg leading-tight " style={{marginTop: '-10rem'}}>
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100 drop-shadow-md font-medium leading-relaxed">
                  {slide.description}
                </p>
                    <div className="flex flex-nowrap justify-center items-center gap-2 sm:gap-4 w-full px-2 pb-10 overflow-x-auto no-scrollbar">
                        {slide.buttons.map((button, btnIndex) => (
                            <Link
                            key={btnIndex}
                            href={button.href}
                            className={`flex-shrink-0 inline-flex items-center justify-center px-6 py-3 w-40 text-sm sm:text-base rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                                button.isPrimary
                                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                                : 'bg-transparent border-2 border-white text-white hover:bg-white/10'
                            }`}
                            >
                            {button.text}
                            </Link>
                        ))}
                    </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
