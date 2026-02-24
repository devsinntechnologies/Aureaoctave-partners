// @ts-nocheck
"use client";

import NavBar from "../../components/NavBar";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// ─── Animation Variants ────────────────────────────────────────────────────────
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

// ─── Inquiry Cards Data ────────────────────────────────────────────────────────
const inquiries = [
  {
    num: "01",
    title: "Business Owners",
    desc: "Exploring a sale, partial liquidity, or succession planning.",
    icon: "🏢",
  },
  {
    num: "02",
    title: "Intermediaries",
    desc: "Brokers with proprietary or off-market opportunities.",
    icon: "🤝",
  },
  {
    num: "03",
    title: "Investors",
    desc: "Interested in learning more about our strategy and returns.",
    icon: "📈",
  },
];

// ─── Contact Info ──────────────────────────────────────────────────────────────
const contactDetails = [
  { label: "Email", value: "contact@aureaoctave.com", href: "mailto:contact@aureaoctave.com", icon: "✉️" },
  { label: "Location", value: "Lahore, Pakistan", href: null, icon: "📍" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"" | "success" | "error">("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name: form.name, email: form.email, message: form.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />

      {/* ═══════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-[#0E1319]">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105"
          alt="Business discussion"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1319]/80 via-transparent to-[#0E1319]" />

        {/* Glowing orbs */}
        {/* <div
          className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "var(--color-primary)" }}
        />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[80px] bg-indigo-500" /> */}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="relative text-center max-w-4xl px-6 z-10"
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
            Get in Touch
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white"
          >
            Let's Start the{" "}
            <span style={{ color: "var(--color-primary)" }}>Conversation</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 tracking-wide">
            Confidential. Thoughtful. Long-Term Focused.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            variants={fadeUp}
            className="mt-14 flex justify-center"
          >
            <div
              className="w-px h-16 rounded-full"
              style={{ background: "linear-gradient(to bottom, var(--color-primary), transparent)" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WE WELCOME INQUIRIES
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 bg-[#0E1319] overflow-hidden">
        {/* Ambient glow */}
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "var(--color-primary)" }}>
              Who We Serve
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              We Welcome Inquiries From
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {inquiries.map(({ num, title, desc, icon }) => (
              <motion.div
                key={num}
                variants={fadeScale}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative p-8 rounded-2xl border border-white/10 overflow-hidden cursor-default"
                style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
              >
                {/* Hover teal glow corner */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"
                  style={{ background: "var(--color-primary)" }}
                />

                {/* Number badge */}
                <span
                  className="inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-6 border"
                  style={{
                    color: "var(--color-primary)",
                    borderColor: "rgba(58,245,196,0.25)",
                    background: "rgba(58,245,196,0.08)",
                  }}
                >
                  {num}
                </span>

                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{desc}</p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "var(--color-primary)" }}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-14 text-gray-500 text-sm tracking-wide flex items-center justify-center gap-2"
          >
            <span style={{ color: "var(--color-primary)" }}>🔒</span>
            All discussions are treated with strict confidentiality.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CONTACT FORM + INFO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 bg-[#0E1319] overflow-hidden">
        {/* Background decorations */}
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px]"
          style={{ background: "var(--color-primary)" }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-5 blur-[80px] bg-indigo-600" />

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          {/* ── Left: Info Panel ─────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="sticky top-32"
          >
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              Reach Us
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Get in Touch
            </h2>
            <p className="text-gray-400 leading-relaxed mb-12 max-w-sm">
              Please include a brief description of your inquiry so we can respond appropriately and connect you with the right team member.
            </p>

            {/* Contact detail cards */}
            <div className="space-y-4">
              {contactDetails.map(({ label, value, href, icon }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-5 rounded-xl border border-white/10"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <span className="text-xl mt-0.5">{icon}</span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-base font-semibold hover:underline transition"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider with tagline */}
            <div className="mt-12 flex items-center gap-4">
              <div
                className="h-px flex-1"
                style={{ background: "linear-gradient(to right, var(--color-primary), transparent)" }}
              />
              <span className="text-xs text-gray-500 uppercase tracking-widest">Aurea Octave Partners</span>
            </div>
          </motion.div>

          {/* ── Right: Contact Form ──────────────────────────────── */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeScale}
            onSubmit={handleSubmit}
            className="relative p-10 rounded-2xl border border-white/10 space-y-5"
            style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(16px)" }}
          >
            {/* Corner glow */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: "var(--color-primary)" }}
            />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full opacity-10 blur-2xl pointer-events-none bg-indigo-500" />

            <h3 className="text-2xl font-bold text-white mb-2">Send Your Inquiry</h3>
            <p className="text-gray-500 text-sm mb-6">We typically respond within 1–2 business days.</p>

            {/* Name */}
            <div className="relative group">
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Smith"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none transition-all duration-300"
                style={{
                  caretColor: "var(--color-primary)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(58,245,196,0.5)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none transition-all duration-300"
                style={{ caretColor: "var(--color-primary)" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(58,245,196,0.5)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
              <textarea
                rows={6}
                name="message"
                placeholder="Briefly describe your inquiry..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none transition-all duration-300 resize-none"
                style={{ caretColor: "var(--color-primary)" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(58,245,196,0.5)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading || !form.name || !form.email || !form.message}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full py-4 rounded-xl font-bold text-[#0E1319] overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: "var(--color-primary)" }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </span>
            </motion.button>

            {/* Status feedback */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: "rgba(58,245,196,0.1)", border: "1px solid rgba(58,245,196,0.25)" }}
              >
                <span style={{ color: "var(--color-primary)" }}>✓</span>
                <p className="text-sm font-medium" style={{ color: "var(--color-primary)" }}>
                  Message sent successfully! We'll be in touch soon.
                </p>
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/25"
              >
                <span className="text-red-400">✗</span>
                <p className="text-sm font-medium text-red-400">
                  Failed to send. Please try again or email us directly.
                </p>
              </motion.div>
            )}
          </motion.form>
        </div>
      </section>
    </>
  );
}