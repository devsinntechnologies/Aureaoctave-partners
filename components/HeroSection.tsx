"use client"

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Building great companies is a craft.",
    description:
      "We know what it takes to build unicorn companies because we’ve done it ourselves. We’ve assembled a team of senior operators and investors with one goal: to help founders build great companies.",
    image: "/hero1.mp4",
  },
  {
    id: 2,
    title: "Senior operators, winning playbooks.",
    description:
      "We are a team of former founders, operators, and experts. We share winning playbooks and give founders access to senior talent at a stage before they can hire it themselves.",
    image: "/hero2.mp4",
  },
  {
    id: 3,
    title: "Designed by founders for founders.",
    description:
      "We built Craft from the ground up to be the type of venture firm we wish we had when we were founders: low maintenance but high value-add.",
    image: "/hero3.mp4",
  },
  {
    id: 4,
    title: "Leaders in B2B technology investing.",
    description:
      "The Craft team has proven, repeated success at building and scaling technology businesses.",
    image: "/hero4.mp4",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden text-white bg-black">

      {/* Background Media */}
      <AnimatePresence mode="wait">
        {slide.image.endsWith(".mp4") ? (
          <motion.video
            key={slide.image}
            src={slide.image}
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <motion.img
            key={slide.image}
            src={slide.image}
            alt="hero"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </AnimatePresence>

      {/* Futuristic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Subtle Moving Glow */}
      <motion.div
        animate={{ x: ["-20%", "20%", "-20%"] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#0D1319] blur-[160px] rounded-full"
      />

      {/* Content Panel */}
      <div className="relative z-10 h-full flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="ml-10 md:ml-24 w-[90%] md:w-[45%] 
                       bg-white/5 backdrop-blur-xl 
                       border border-white/10 
                       rounded-2xl p-10 md:p-14
                       shadow-2xl"
          >
            {/* Slide Counter */}
            <div className="mb-6 text-sm tracking-[0.3em] text-gray-400">
              <span className="text-red-500 font-semibold text-lg">
                {String(current + 1).padStart(2, "0")}
              </span>{" "}
              / {String(slides.length).padStart(2, "0")}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              {slide.description}
            </p>

            {/* Controls */}
            <div className="flex items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
              >
                ←
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
              >
                →
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1 w-10 rounded-full transition-all duration-500 ${
              i === current
                ? "bg-red-500"
                : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
