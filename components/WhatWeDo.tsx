"use client"

import { motion } from "framer-motion"

export default function WhatWeDo() {
  const items = [
    {
      title: "Acquire & Invest",
      text: "Acquire and invest in privately held businesses",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Owner Partnerships",
      text: "Partner with owners seeking liquidity, succession, or growth capital",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Broker Collaboration",
      text: "Collaborate with brokers and intermediaries on off-market and proprietary deals",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Patient Capital",
      text: "Deploy patient capital with an operational mindset",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="relative bg-[#141D25] text-white py-32 overflow-hidden">

      {/* Background Glow */}
      {/* <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-red-600/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[160px] rounded-full" /> */}

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            What We Do
          </h2>
          <div className="w-20 h-[2px] bg-red-500 mx-auto rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="grid gap-12 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/40 transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-500" />
              </div>

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative p-12 min-h-[360px] flex flex-col justify-end">

                {/* Number */}
                <span className="text-sm tracking-[0.3em] text-red-400 font-semibold mb-4">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="text-3xl font-semibold mb-5">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  {item.text}
                </p>

                {/* Animated Accent Line */}
                <div className="mt-8 h-[2px] w-0 bg-red-500 group-hover:w-20 transition-all duration-500" />
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-500/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
