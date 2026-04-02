"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
      delay,
    },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100dvh" }}
    >
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt="Интерьер ЦЕХ №2 — неоновая вывеска «Здесь всегда есть что поесть»"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,14,13,0.55) 0%, rgba(15,14,13,0.92) 100%)",
        }}
      />

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        {/* Logo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="relative"
        >
          <Image
            src="/logo.png"
            alt="ЦЕХ №2"
            width={280}
            height={112}
            className="w-[200px] sm:w-[280px] h-auto"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="mt-6 font-inter text-text-muted uppercase tracking-[0.2em] text-[13px] font-light"
        >
          Ждём в гости.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-text-primary"
          style={{ opacity: 0.35 }}
          aria-hidden="true"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3.5V16.5M10 16.5L4.5 11M10 16.5L15.5 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
