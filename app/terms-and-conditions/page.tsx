// @ts-nocheck
"use client";
import React from "react";

const Card = ({ title, children }) => (
  <div className="relative group rounded-2xl p-[1px] bg-[#0A1014]">
    <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-6 shadow-lg transition duration-300 group-hover:shadow-2xl group-hover:bg-white/90 dark:group-hover:bg-slate-900/90">
      <h2 className="text-xl font-semibold mb-3 bg-[#E11D48] bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="text-slate-600 dark:text-slate-300 leading-relaxed">
        {children}
        
      </div>
    </div>
  </div>
);

const TermsAndConditions = () => {
  return (
    <main className="relative overflow-hidden py-20 px-6">
      
      {/* Ambient futuristic background */}
      {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]" /> */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="max-w-3xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 text-center bg-white bg-clip-text text-transparent">
          Terms & Conditions
        </h1>

        <p className="text-center text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
          These Terms and Conditions govern your use of our website and services.
          By accessing our platform, you agree to comply with these terms.
        </p>

        {/* Sections */}
        <div className="space-y-6">

          <Card title="Use of Site">
            <ul className="list-disc ml-5 space-y-2">
              <li>You must be at least 18 years old to use this site.</li>
              <li>You agree not to misuse the site or attempt to exploit its content or services.</li>
            </ul>
          </Card>

          <Card title="Intellectual Property">
            <p>
              All content, trademarks, and materials on this site are the property
              of the company and are protected under applicable copyright and
              intellectual property laws.
            </p>
          </Card>

          <Card title="Contact Us">
            <p>
              If you have any questions regarding these Terms and Conditions,
              please contact our support team for clarification.
            </p>
          </Card>

        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;
