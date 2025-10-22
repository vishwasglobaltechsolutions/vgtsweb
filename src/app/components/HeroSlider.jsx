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
      className="w-full h-[70vh] sm:h-[80vh] min-h-[480px] sm:min-h-[600px]"
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
                className="max-w-4xl mx-auto mt-4 sm:mt-0 md:-mt-6 pb-8 sm:pb-12"
              >
                <div className="inline-block max-w-[92vw] sm:max-w-3xl bg-black/40 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-6 sm:py-5 shadow-2xl">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 sm:mb-4 text-white drop-shadow-xl leading-tight tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-2xl max-w-none sm:max-w-3xl text-white drop-shadow-lg font-medium leading-relaxed">
                    {slide.description}
                  </p>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-2 sm:gap-4 w-full px-2 pb-6 mt-5 sm:pb-10 overflow-x-auto no-scrollbar">
                  {slide.buttons.map((button, btnIndex) => (
                    <Link
                      key={btnIndex}
                      href={button.href}
                      className={`flex-shrink-0 inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 w-36 sm:w-40 text-sm sm:text-base rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                        button.isPrimary
                        ? 'bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
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
