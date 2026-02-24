// @ts-nocheck
"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#141D25] text-white border-t border-white/10 overflow-hidden">

      {/* Animated Background Glow */}
      {/* <motion.div
        animate={{ x: ["-20%", "20%", "-20%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-600/10 blur-[180px] rounded-full"
      />
      <motion.div
        animate={{ x: ["20%", "-20%", "20%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[180px] rounded-full"
      /> */}

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-14">

        {/* Main Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-20"
        >

          {/* Left */}
          <motion.div variants={fadeUp} className="flex flex-col gap-8">
            <span className="text-3xl font-semibold tracking-[0.4em] text-[#3AF5C4]">
              Aurea Octave Partners
            </span>

            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              Aurea Octave Partners LLP is authorised and regulated by the
              Financial Conduct Authority (Firm Reference Number 1016286).
            </p>
          </motion.div>

          {/* Center */}
          <motion.div variants={fadeUp}>
            <h4 className="text-xs uppercase tracking-[0.4em] text-white/40 mb-8">
              Legal & Information
            </h4>

            <nav className="flex flex-col gap-5 text-sm font-medium">
              {[
                { label: "Contact", href: "/contact" },
                { label: "Who we are", href: "/who-we-are" },
                { label: "Terms of Use", href: "/terms-and-conditions" },
                { label: "Privacy Notice", href: "/privacy-policy" },
                // { label: "Disclaimers", href: "#" },
                { label: "Disclosures", href: "/disclosures" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-white/60 hover:text-white transition duration-300 group"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#3AF5C4] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Right */}
          <motion.div variants={fadeUp} className="flex flex-col md:items-end gap-10">
            <div>
              <h4 className="text-xs uppercase tracking-[0.4em] text-white/40 mb-8">
                Connect
              </h4>

              <div className="flex gap-8 text-sm text-white/60">
                {["X", "LinkedIn", "YouTube", "Spotify"].map((item, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="hover:text-white transition"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/10 mt-24 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40"
        >
          <p>© 2026 Aureaoctave Partners. All rights reserved.</p>
          <p className="tracking-wide">Built with long-term vision.</p>
        </motion.div>

      </div>
    </footer>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}
