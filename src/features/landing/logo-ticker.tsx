"use client";

import { motion } from "framer-motion";


import { LOGOS_ROW_1, LOGOS_ROW_2 } from "@/data/logos";


// Combine and duplicate for infinite scroll
const ROW_1_ITEMS = [...LOGOS_ROW_1, ...LOGOS_ROW_1, ...LOGOS_ROW_1, ...LOGOS_ROW_1];
const ROW_2_ITEMS = [...LOGOS_ROW_2, ...LOGOS_ROW_2, ...LOGOS_ROW_2, ...LOGOS_ROW_2];

export default function LogoTicker() {
  return (
    <section className="py-24 bg-black text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 w-[92%]">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-medium text-white/90 mb-3 tracking-tight">
            Trusted by developers at leading companies
          </h2>
          <p className="text-sm md:text-base text-white/40 font-light">
            Used by developers at
          </p>
        </div>

        {/* Ticker Container with fade masks on edges */}
        <div className="relative flex flex-col gap-8 md:gap-10 overflow-hidden w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[80px] md:before:w-[150px] before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[80px] md:after:w-[150px] after:bg-gradient-to-l after:from-black after:to-transparent">
          
          {/* Row 1 - scrolling left */}
          <motion.div
            className="flex gap-16 md:gap-24 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {ROW_1_ITEMS.map((logo, i) => {
              const Icon = logo.icon;
              return (
                <div key={`r1-${i}`} className="flex items-center gap-3 shrink-0">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  <span className="text-lg md:text-xl font-semibold text-white tracking-wide">{logo.name}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Row 2 - scrolling left but starting at different offset/ordering */}
          <motion.div
            className="flex gap-16 md:gap-24 w-max ml-12"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 30, // Slightly different speed for organic feel
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {ROW_2_ITEMS.map((logo, i) => {
              const Icon = logo.icon;
              return (
                <div key={`r2-${i}`} className="flex items-center gap-3 shrink-0">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  <span className="text-lg md:text-xl font-semibold text-white tracking-wide">{logo.name}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
