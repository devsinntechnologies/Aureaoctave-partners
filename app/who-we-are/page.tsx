// @ts-nocheck
"use client";

import NavBar from "../../components/NavBar";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function WhoWeAre() {
  return (
    <>
      <NavBar />

      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] flex items-center justify-center text-white overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Investment platform"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="relative text-center max-w-4xl px-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            A Disciplined, Research-Driven Investment Platform
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            We are built on the belief that strong businesses deserve thoughtful
            capital and committed ownership.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="relative py-28 bg-white overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Built on Deep Understanding
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Our firm was established to pursue alternative private equity
              opportunities outside traditional auction-driven processes. We
              focus on understanding businesses deeply — their operations,
              markets, and people — before committing capital.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Our background spans finance, strategy, and operational analysis,
              allowing us to evaluate opportunities from both an investor and
              owner’s perspective.
            </p>
          </motion.div>

          <motion.img
            variants={fadeScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
            alt="Business analysis"
            className="rounded-3xl shadow-2xl hover:shadow-3xl transition duration-500"
          />
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="relative bg-gray-50 py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100 rounded-full blur-3xl opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl font-bold text-center mb-20 text-gray-900"
          >
            Our Approach
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            {[
              {
                text: "Bottom-up analysis driven by fundamentals",
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
              },
              {
                text: "Conservative underwriting and risk management",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
              },
              {
                text: "Flexible transaction structures tailored to each situation",
                image:
                  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
              },
              {
                text: "Active engagement post-investment, without disrupting culture",
                image:
                  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeScale}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                </div>

                <div className="p-10">
                  <span className="text-red-500 font-bold text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-4 text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= WHAT WE LOOK FOR ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.img
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
            alt="Executive leadership"
            className="rounded-3xl shadow-2xl"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-bold mb-10 text-gray-900"
            >
              What We Look For
            </motion.h2>

            <div className="space-y-8">
              {[
                "Established, cash-generating businesses",
                "Defensible market positions",
                "Strong management teams or clear succession pathways",
                "Opportunities for operational or strategic improvement",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex items-start gap-5"
                >
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 shadow-md" />
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="relative bg-gray-900 text-white py-28 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-60" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative max-w-3xl mx-auto px-6"
        >
          <h3 className="text-4xl font-bold mb-6">
            More Than Capital
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            We aim to be more than a source of capital — we aim to be a reliable
            long-term partner.
          </p>
        </motion.div>
      </section>
    </>
  );
}
