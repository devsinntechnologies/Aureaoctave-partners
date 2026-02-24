// @ts-nocheck
"use client";

import React from "react";
import NavBar from "../../components/NavBar";
import { motion } from "framer-motion";
import Link from "next/link";

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// ─── Disclosure Sections ───────────────────────────────────────────────────────
const sections = [
  {
    icon: "⚠️",
    title: "Investment Risks",
    content: (
      <ul className="space-y-3">
        {[
          "All investments involve risk, including the possible loss of principal.",
          "Past performance does not guarantee future results.",
          "Private equity investments are illiquid and may not be suitable for all investors.",
          "Returns are not guaranteed and actual results may differ materially from projections.",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
              style={{ background: "var(--color-primary)", boxShadow: "0 0 6px var(--color-primary)" }}
            />
            <span className="text-gray-400 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: "🏛️",
    title: "Regulatory Information",
    content: (
      <p className="text-gray-400 leading-relaxed">
        Aurea Octave Partners complies with all applicable laws and regulations in the
        jurisdictions in which it operates. This disclosure may be updated periodically
        to reflect regulatory changes, new requirements, or additional disclosures
        deemed necessary by our legal and compliance team.
      </p>
    ),
  },
  {
    icon: "🔒",
    title: "Confidentiality",
    content: (
      <p className="text-gray-400 leading-relaxed">
        All communications and information shared with Aurea Octave Partners are
        treated with strict confidentiality. We do not disclose client information
        to third parties except as required by law or with express written consent.
      </p>
    ),
  },
  {
    icon: "📄",
    title: "No Solicitation",
    content: (
      <p className="text-gray-400 leading-relaxed">
        Nothing on this website constitutes an offer to sell, or a solicitation of an
        offer to buy, any security. Any such offering is made only by means of formal
        offering documents delivered to qualified investors.
      </p>
    ),
  },
  {
    icon: "✉️",
    title: "Contact Us",
    content: (
      <p className="text-gray-400 leading-relaxed">
        If you have questions regarding these disclosures, please reach out to our team
        directly at{" "}
        <a
          href="mailto:contact@aureaoctave.com"
          className="font-semibold hover:underline transition"
          style={{ color: "var(--color-primary)" }}
        >
          contact@aureaoctave.com
        </a>
        . We are happy to provide clarification or additional information.
      </p>
    ),
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────
const Disclosures = () => {
  return (
    <>
      <NavBar />

      <main className="relative min-h-screen bg-[#0E1319] overflow-hidden">
        {/* Ambient background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-10 blur-[120px] pointer-events-none"
          style={{ background: "var(--color-primary)" }}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5 blur-[100px] bg-indigo-600 pointer-events-none" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 py-32">

          {/* Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="text-center mb-20"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] px-4 py-2 rounded-full border mb-8"
              style={{
                color: "var(--color-primary)",
                borderColor: "rgba(58,245,196,0.3)",
                background: "rgba(58,245,196,0.07)",
              }}
            >
              Legal
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-extrabold text-white mb-6"
            >
              Disclosures
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto"
            >
              Important legal, investment, and regulatory information regarding
              our services. Please read carefully before engaging or making
              financial decisions.
            </motion.p>

            {/* Divider */}
            <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-4">
              <div
                className="h-px w-24"
                style={{ background: "linear-gradient(to right, transparent, var(--color-primary))" }}
              />
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--color-primary)" }}
              />
              <div
                className="h-px w-24"
                style={{ background: "linear-gradient(to left, transparent, var(--color-primary))" }}
              />
            </motion.div>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="space-y-5"
          >
            {sections.map(({ icon, title, content }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group relative p-7 rounded-2xl border border-white/10 transition-all duration-300 overflow-hidden"
                style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(58,245,196,0.25)";
                  e.currentTarget.style.background = "rgba(58,245,196,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                {/* Corner hover glow */}
                <div
                  className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                  style={{ background: "var(--color-primary)" }}
                />

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "var(--color-primary)" }}
                />

                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5 flex-shrink-0">{icon}</span>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-white mb-3">{title}</h2>
                    {content}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center space-y-4"
          >
            <p className="text-gray-600 text-sm">
              Last updated: February 2026 · Aurea Octave Partners
            </p>
            <Link href="/contact">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold hover:underline transition cursor-pointer"
                style={{ color: "var(--color-primary)" }}
              >
                Have questions? Contact us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Disclosures;
