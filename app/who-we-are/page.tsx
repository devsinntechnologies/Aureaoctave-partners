// @ts-nocheck
"use client";

import NavBar from "../../components/NavBar";
import { motion } from "framer-motion";
import Link from "next/link";

// ─── Animation Variants ────────────────────────────────────────────────────────
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

// ─── Data ──────────────────────────────────────────────────────────────────────
const approachItems = [
  {
    num: "01",
    text: "Bottom-up analysis driven by fundamentals",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "02",
    text: "Conservative underwriting and risk management",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "03",
    text: "Flexible transaction structures tailored to each situation",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "04",
    text: "Active engagement post-investment, without disrupting culture",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
  },
];

const lookForItems = [
  "Established, cash-generating businesses",
  "Defensible market positions",
  "Strong management teams or clear succession pathways",
  "Opportunities for operational or strategic improvement",
];

// ─── Component ─────────────────────────────────────────────────────────────────
export default function WhoWeAre() {
  return (
    <>
      <NavBar />

      {/* ═══════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#0E1319]">
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 7, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          alt="Investment platform"
        />

        {/* Gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1319]/60 via-transparent to-[#0E1319]" />

        {/* Ambient orbs */}
        {/* <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-15 blur-[120px]"
          style={{ background: "var(--color-primary)" }}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[80px] bg-indigo-600" /> */}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="relative text-center max-w-5xl px-6 z-10"
        >
          {/* Eyebrow */}
          <motion.span
            variants={fadeUp}
            className="inline-block text-xs font-semibold uppercase tracking-[0.25em] px-4 py-2 rounded-full border mb-8"
            style={{
              color: "var(--color-primary)",
              borderColor: "rgba(58,245,196,0.3)",
              background: "rgba(58,245,196,0.07)",
            }}
          >
            Who We Are
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight"
          >
            A Disciplined,{" "}
            <span
              className="relative"
              style={{ color: "var(--color-primary)" }}
            >
              Research-Driven
            </span>{" "}
            Investment Platform
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Built on the belief that strong businesses deserve thoughtful capital
            and committed ownership.
          </motion.p>

          {/* Scroll cue */}
          <motion.div variants={fadeUp} className="mt-14 flex justify-center">
            <div
              className="w-px h-16 rounded-full"
              style={{ background: "linear-gradient(to bottom, var(--color-primary), transparent)" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ABOUT — BUILT ON DEEP UNDERSTANDING
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-36 bg-[#0E1319] overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px]"
          style={{ background: "var(--color-primary)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          {/* Text side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-5"
              style={{ color: "var(--color-primary)" }}
            >
              Our Foundation
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              Built on Deep Understanding
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              Our firm was established to pursue alternative private equity
              opportunities outside traditional auction-driven processes. We
              focus on understanding businesses deeply — their operations,
              markets, and people — before committing capital.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Our background spans finance, strategy, and operational analysis,
              allowing us to evaluate opportunities from both an investor and
              owner's perspective.
            </p>

            {/* Inline stats */}
            <div className="mt-12 flex gap-10">
              {[
                { value: "10+", label: "Years Combined Experience" },
                { value: "100%", label: "Confidential Process" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-3xl font-extrabold" style={{ color: "var(--color-primary)" }}>
                    {value}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            variants={fadeScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
              alt="Business analysis"
              className="rounded-2xl w-full object-cover shadow-2xl"
              style={{ maxHeight: "480px" }}
            />
            {/* Glowing border effect */}
            <div
              className="absolute -inset-[1px] rounded-2xl -z-10 opacity-40 blur-sm"
              style={{ background: "linear-gradient(to bottom right, var(--color-primary), transparent, indigo)" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          OUR APPROACH
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-36 bg-[#0B0E13] overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-5 blur-[120px]"
          style={{ background: "var(--color-primary)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              How We Work
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Our Approach
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {approachItems.map(({ num, text, image }) => (
              <motion.div
                key={num}
                variants={fadeScale}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="group relative rounded-2xl overflow-hidden border border-white/10"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={image}
                    alt={text}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0E1319]" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <span
                    className="inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-5 border"
                    style={{
                      color: "var(--color-primary)",
                      borderColor: "rgba(58,245,196,0.25)",
                      background: "rgba(58,245,196,0.08)",
                    }}
                  >
                    {num}
                  </span>
                  <p className="text-white text-lg leading-relaxed font-medium">{text}</p>
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "var(--color-primary)" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHAT WE LOOK FOR
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-36 bg-[#0E1319] overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full opacity-8 blur-[90px] bg-indigo-700" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
              alt="Executive leadership"
              className="rounded-2xl w-full object-cover shadow-2xl"
              style={{ maxHeight: "500px" }}
            />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl border border-white/10 shadow-2xl"
              style={{
                background: "rgba(14,19,25,0.9)",
                backdropFilter: "blur(16px)",
              }}
            >
              <p className="text-3xl font-extrabold" style={{ color: "var(--color-primary)" }}>4</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Core Criteria</p>
            </motion.div>
          </motion.div>

          {/* List */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-5"
              style={{ color: "var(--color-primary)" }}
            >
              Our Criteria
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold text-white mb-12 leading-tight"
            >
              What We Look For
            </motion.h2>

            <div className="space-y-5">
              {lookForItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="group flex items-start gap-5 p-5 rounded-xl border border-white/10 transition-all duration-300 cursor-default"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(58,245,196,0.3)";
                    e.currentTarget.style.background = "rgba(58,245,196,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  {/* Teal dot */}
                  <div
                    className="w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"
                    style={{ background: "var(--color-primary)", boxShadow: "0 0 8px var(--color-primary)" }}
                  />
                  <p className="text-gray-300 text-lg leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CLOSING CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-36 overflow-hidden bg-[#0B0E13]">
        {/* Central glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-[100px]"
          style={{ background: "var(--color-primary)" }}
        />

        {/* Decorative grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative max-w-4xl mx-auto px-6 text-center z-10"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.25em] px-4 py-2 rounded-full border mb-10"
            style={{
              color: "var(--color-primary)",
              borderColor: "rgba(58,245,196,0.3)",
              background: "rgba(58,245,196,0.07)",
            }}
          >
            Long-Term Partnership
          </span>

          <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            More Than Capital
          </h3>

          <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            We aim to be more than a source of capital — we aim to be a reliable,
            committed long-term partner for the businesses we back.
          </p>

          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-[#0E1319] cursor-pointer transition-all duration-300"
              style={{ background: "var(--color-primary)" }}
            >
              Start a Conversation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
