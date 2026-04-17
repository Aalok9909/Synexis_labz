'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoModal({ videoUrl }: { videoUrl: string }) {
  const [isOpen, setIsOpen] = useState(false);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      {/* Video Thumbnail/Play Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="relative w-full h-full rounded-[24px] overflow-hidden group cursor-pointer focus:outline-none"
      >
        {/* Thumbnail/Placeholder */}
        <div className="w-full h-full bg-gradient-to-br from-[#08101e] to-[#05101a] flex items-center justify-center relative border border-white/10">
          {/* Play Button Icon */}
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="absolute z-10 flex items-center justify-center w-20 h-20 rounded-full bg-electric/90 shadow-glow"
          >
            <svg
              className="w-8 h-8 text-black ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <p className="text-white font-semibold text-lg">Watch Demo Video</p>
            <p className="text-slate-300 text-sm mt-1">Click to play full walkthrough</p>
          </div>
        </div>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition"
                aria-label="Close video"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Video Container */}
              <div className="relative w-full h-full">
                <iframe
                  src={videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="JB Goodwin REALTORS AI Chatbot Demo"
                />
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-40 bg-black/50 backdrop-blur-md rounded-lg px-6 py-3 border border-white/10">
                <div>
                  <p className="text-white font-semibold text-sm">JB Goodwin REALTORS - AI Chatbot Demo</p>
                  <p className="text-slate-300 text-xs mt-1">Lead capture, qualification & booking automation</p>
                </div>
                <p className="text-xs text-slate-400">Press ESC to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
