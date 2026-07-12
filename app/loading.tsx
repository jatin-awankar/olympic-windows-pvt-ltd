"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen bg-primary-dark flex flex-col items-center justify-center font-sans relative overflow-hidden">
      {/* Decorative Blueprint Background Grid */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Main Loading Block */}
      <div className="relative flex flex-col items-center z-10 space-y-6">
        {/* Animated Architectural Frames/Rings */}
        <div className="relative w-16 h-16">
          {/* Outer Ring - Rotating */}
          <motion.div
            className="absolute inset-0 rounded-full border-t-2 border-r-2 border-accent border-l-2 border-l-transparent border-b-2 border-b-transparent"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "linear"
            }}
          />
          {/* Inner Ring - Rotating opposite */}
          <motion.div
            className="absolute inset-2 rounded-full border-b-2 border-l-2 border-white border-t-2 border-t-transparent border-r-2 border-r-transparent"
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: "linear"
            }}
          />
          {/* Central Pulsing Dot */}
          <motion.div
            className="absolute inset-5 rounded-full bg-accent shadow-[0_0_12px_rgba(201,168,107,0.6)]"
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Animated Brand Typography */}
        <div className="flex flex-col items-center space-y-1.5 font-accent">
          <motion.div 
            className="flex items-center space-x-1 text-sm font-bold tracking-[0.25em] text-text-inverse"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05
                }
              }
            }}
          >
            {["O", "L", "Y", "M", "P", "I", "C"].map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 5 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.3 }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span 
              className="text-accent"
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.3 }}
            >
              &nbsp;
            </motion.span>
            {["W", "I", "N", "D", "O", "W", "S"].map((char, index) => (
              <motion.span
                key={index + 7}
                className="text-accent"
                variants={{
                  hidden: { opacity: 0, y: 5 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.3 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Slogan Fade-in */}
          <motion.span 
            className="text-[9px] uppercase tracking-[0.3em] text-text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Setting New Standards
          </motion.span>
        </div>
      </div>
    </div>
  );
}
