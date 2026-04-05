"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function MainScreen() {
  return (
    <section className="relative h-[100dvh] overflow-hidden">

      {/* 1. Background image — absolute fill layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="ЦЕХ №2 — интерьер кафе-бара"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* 2. Single gradient overlay — photo visible throughout, darker at bottom for footer readability */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.52)_55%,rgba(0,0,0,0.7)_100%)]" />

      {/* 4. Content layer — h-full flex column, all in one screen */}
      <div className="relative z-10 h-full flex flex-col">

        {/* Main content — vertically centered, pb shifts it above optical center */}
        <div
          className="flex-1 flex flex-col items-center justify-center px-6 overflow-hidden"
          style={{ paddingBottom: "clamp(24px, 5vh, 64px)" }}
        >
          {/* Logo block */}
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
              className="h-auto"
              style={{ width: "clamp(130px, 18vh, 220px)" }}
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
            className="flex flex-col items-center text-center"
            style={{ marginTop: "clamp(12px, 3vh, 32px)" }}
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
              className="font-inter bg-brand-orange text-text-primary text-[22px] sm:text-[24px] font-bold leading-none tracking-tight px-5 py-2.5 hover:opacity-80 transition-opacity duration-200"
              style={{ marginTop: "clamp(10px, 2.5vh, 24px)" }}
            >
              +7 967 755-01-50
            </a>

            {/* Map buttons */}
            <div
              className="flex flex-row gap-3"
              style={{ marginTop: "clamp(10px, 2.5vh, 24px)" }}
            >
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

            {/* Email */}
            <a
              href="mailto:brigadir@tseh2.ru"
              className="font-inter text-brand-orange text-[12px] font-bold hover:text-text-primary transition-colors duration-200"
              style={{ marginTop: "clamp(6px, 1.5vh, 14px)" }}
            >
              brigadir@tseh2.ru
            </a>
          </motion.div>
        </div>

        {/* Footer — shrink-0 keeps it compact at the bottom of the same screen */}
        <Footer />
      </div>
    </section>
  );
}
