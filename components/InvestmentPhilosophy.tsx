"use client"

import { motion } from "framer-motion"

export default function InvestmentPhilosophy() {
  const principles = [
    {
      title: "Long-Term Ownership",
      text: "Long-term ownership over short-term financial engineering",
    },
    {
      title: "Fundamental Strength",
      text: "Fundamental business strength over speculation",
    },
    {
      title: "Aligned Incentives",
      text: "Alignment of incentives between investors, operators, and sellers",
    },
  ];

  return (
    <section className="relative bg-[#0E1319] text-white py-32 overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-600/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Investment Philosophy
          </h2>
          <div className="w-24 h-[2px] bg-red-500 mx-auto rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="grid gap-12 md:grid-cols-3">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-xl 
                         border border-white/10 
                         rounded-2xl p-12 
                         hover:border-red-500/40
                         transition-all duration-500"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl" />

              {/* Number */}
              <div className="flex items-center gap-6 mb-10">
                <span className="text-5xl font-bold text-red-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 h-[1px] bg-white/20 group-hover:bg-red-400 transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-6">
                {item.title}
              </h3>

              {/* Text */}
              <p className="text-gray-300 leading-relaxed text-lg">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-28 max-w-4xl mx-auto text-center border-t border-white/10 pt-14"
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            If you are a business owner considering a transition, a broker with
            quality deal flow, or an investor seeking disciplined exposure to
            private markets, we welcome the conversation.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
