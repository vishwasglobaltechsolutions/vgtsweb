'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

export default function VideoCard3D({ videoUrl }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tracking cursor relative to center of the card (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation transforms
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { damping: 25, stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { damping: 25, stiffness: 150 });

  // Subtle translational movement for parallax layers
  const translateX = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { damping: 25, stiffness: 150 });
  const translateY = useSpring(useTransform(y, [-0.5, 0.5], [-8, 8]), { damping: 25, stiffness: 150 });

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Calculate distance from center (scaled from -0.5 to 0.5)
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(err => console.log('Autoplay play error:', err));
      setIsPlaying(true);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Sync state if video element properties change externally
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleVolumeChange = () => {
      setIsMuted(video.muted || video.volume === 0);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('volumechange', handleVolumeChange);

    // Attempt autoplay
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay prevented, ensure UI shows paused state if necessary
        setIsPlaying(false);
      });
    }

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('volumechange', handleVolumeChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-2xl mx-auto cursor-pointer"
      style={{ perspective: 1000 }}
      onClick={togglePlay}
    >
      {/* 3D Floating Ambient Glow Background */}
      <motion.div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-600 to-cyan-500 opacity-30 blur-2xl transition-opacity duration-300"
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          scale: isHovered ? 1.05 : 1.0,
        }}
      />

      {/* Main Video Card */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.02 : 1.0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="relative z-10 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-video flex items-center justify-center transition-all duration-300"
      >
        {/* Holographic scanner effect line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-1/2 w-full animate-pulse pointer-events-none z-20" />

        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover z-0"
        />

        {/* Glossy overlay layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none z-10" />

        {/* Tech Corner Accents (Shows premium style) */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400 z-20 pointer-events-none opacity-80" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400 z-20 pointer-events-none opacity-80" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400 z-20 pointer-events-none opacity-80" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400 z-20 pointer-events-none opacity-80" />

        {/* Video Custom Control Overlay Bar */}
        <div
          className={`absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between px-4 py-2.5 rounded-xl bg-black/65 backdrop-blur-md border border-white/10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0 lg:opacity-0'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="text-white hover:text-cyan-400 transition-colors p-1.5 hover:bg-white/10 rounded-lg"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <FaPause className="w-4 h-4" /> : <FaPlay className="w-4 h-4" />}
            </button>
            <span className="text-xs font-semibold tracking-wider text-cyan-400/90 uppercase select-none">
              {isPlaying ? 'Live Demo' : 'Paused'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleMute}
              className="text-white hover:text-cyan-400 transition-colors p-1.5 hover:bg-white/10 rounded-lg"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <FaVolumeMute className="w-4 h-4" /> : <FaVolumeUp className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Hover/Play Hint overlay on mobile/idle */}
        {!isPlaying && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 pointer-events-none">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-16 h-16 rounded-full bg-cyan-500/80 hover:bg-cyan-500 flex items-center justify-center text-white shadow-lg pointer-events-auto cursor-pointer"
              onClick={togglePlay}
            >
              <FaPlay className="w-6 h-6 ml-1" />
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
