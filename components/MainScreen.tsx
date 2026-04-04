"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function MainScreen() {
  return (
    <section
      className="relative w-full flex flex-col md:block overflow-hidden"
      style={{ height: "100dvh" }}
    >
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt="ЦЕХ №2 — интерьер кафе-бара"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Flat dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(15,14,13,0.80)" }}
      />

      {/* Content — flex-1 ensures footer always stays at bottom */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-8 overflow-y-auto min-h-0 md:absolute md:inset-0 md:flex md:overflow-hidden">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay: 0 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/logo.png"
            alt="ЦЕХ №2"
            width={220}
            height={88}
            className="w-[170px] sm:w-[220px] h-auto"
            priority
          />
          <p className="font-inter text-brand-orange text-[11px] font-bold tracking-widest uppercase mt-3">
            Кафе-бар · Йошкар-Ола
          </p>
          <div className="flex flex-col mt-3 gap-1.5">
            <p className="font-inter bg-brand-orange text-text-primary text-[13px] font-bold leading-none px-3 py-1.5 text-center">
              Бургеры, чебуреки, пельмени, супы, и салаты.
            </p>
            <p className="font-inter bg-brand-orange text-text-primary text-[13px] font-bold leading-none px-3 py-1.5 text-center">
              11 видов пенного на кране и холодильник крафта.
            </p>
          </div>
        </motion.div>

        {/* Info block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          className="mt-8 flex flex-col items-center text-center"
        >
          {/* Address */}
          <p className="font-inter text-brand-orange text-[17px] font-bold leading-snug">
            ул. Якова Эшпая, 150
          </p>

          {/* Hours */}
          <p className="font-inter text-brand-orange text-[17px] font-bold leading-snug mt-1">
            Вс–Чт · 12:00–23:00
          </p>
          <p className="font-inter text-brand-orange text-[17px] font-bold leading-snug mt-0.5">
            Пт–Сб · 12:00–01:00
          </p>

          {/* Phone */}
          <a
            href="tel:+79677550150"
            className="mt-6 font-inter bg-brand-orange text-text-primary text-[22px] sm:text-[24px] font-bold leading-none tracking-tight px-5 py-2.5 hover:opacity-80 transition-opacity duration-200"
          >
            +7 967 755-01-50
          </a>

          {/* Map buttons */}
          <div className="mt-6 flex flex-row gap-3">
            <a
              href="https://2gis.ru/yoshkarola/firm/70000001110338386?m=47.882863%2C56.639735%2F16"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Открыть ЦЕХ №2 в 2ГИС"
              className="font-inter text-brand-orange text-[13px] font-normal border border-brand-orange rounded-sm px-4 py-2 leading-none hover:bg-brand-orange hover:text-bg-base transition-colors duration-200"
            >
              2ГИС
            </a>
            <a
              href="https://yandex.ru/maps/org/tsekh_2/225450224234/?ll=47.882962%2C56.639981&z=16.74"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Открыть ЦЕХ №2 в Яндекс Картах"
              className="font-inter text-brand-orange text-[13px] font-normal border border-brand-orange rounded-sm px-4 py-2 leading-none hover:bg-brand-orange hover:text-bg-base transition-colors duration-200"
            >
              Яндекс Карты
            </a>
          </div>

          {/* Email — secondary */}
          <a
            href="mailto:brigadir@tseh2.ru"
            className="mt-5 font-inter text-brand-orange text-[12px] font-bold hover:text-text-primary transition-colors duration-200"
          >
            brigadir@tseh2.ru
          </a>
        </motion.div>
      </div>

      {/* Footer — natural flow, always at bottom */}
      <div className="relative z-10 shrink-0 md:absolute md:bottom-0 md:left-0 md:right-0">
        <Footer />
      </div>
    </section>
  );
}
