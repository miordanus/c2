"use client";

import { motion } from "framer-motion";

const rowVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
      delay: i * 0.08,
    },
  }),
};

export default function InfoSection() {
  return (
    <section className="w-full px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-[600px]">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-bebas text-[44px] leading-none text-brand-orange mb-10"
        >
          Как нас найти
        </motion.h2>

        {/* Row 1 — Адрес */}
        <motion.div
          custom={0}
          variants={rowVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col sm:flex-row sm:items-start border-t border-border-subtle py-[19px] gap-1 sm:gap-0"
        >
          <span className="w-full sm:w-[180px] shrink-0 uppercase text-[11px] tracking-widest text-text-muted font-inter font-normal pt-[1px]">
            Адрес
          </span>
          <span className="text-text-primary font-inter text-[15px] leading-relaxed">
            ул. Якова Эшпая, 150
            <br />
            Йошкар-Ола
          </span>
        </motion.div>

        {/* Row 2 — Режим работы */}
        <motion.div
          custom={1}
          variants={rowVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col sm:flex-row sm:items-start border-t border-border-subtle py-[19px] gap-1 sm:gap-0"
        >
          <span className="w-full sm:w-[180px] shrink-0 uppercase text-[11px] tracking-widest text-text-muted font-inter font-normal pt-[1px]">
            Режим работы
          </span>
          <div className="flex flex-col gap-[6px] font-inter text-[15px]">
            <div className="flex items-baseline gap-3">
              <span className="text-text-muted w-[64px] shrink-0">Вс – Чт</span>
              <span className="text-text-primary">12:00 – 23:00</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-text-muted w-[64px] shrink-0">Пт – Сб</span>
              <span className="text-text-primary">12:00 – 01:00</span>
            </div>
          </div>
        </motion.div>

        {/* Row 3 — Телефон */}
        <motion.div
          custom={2}
          variants={rowVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col sm:flex-row sm:items-start border-t border-border-subtle py-[19px] gap-1 sm:gap-0"
        >
          <span className="w-full sm:w-[180px] shrink-0 uppercase text-[11px] tracking-widest text-text-muted font-inter font-normal pt-[1px]">
            Телефон
          </span>
          <a
            href="tel:+79677550150"
            className="text-text-primary font-inter text-[15px] transition-colors duration-200 hover:text-brand-orange"
          >
            +7 967 755-01-50
          </a>
        </motion.div>

        {/* Row 4 — Написать управляющей */}
        <motion.div
          custom={3}
          variants={rowVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col sm:flex-row sm:items-start border-t border-border-subtle py-[19px] gap-1 sm:gap-0"
        >
          <span className="w-full sm:w-[180px] shrink-0 uppercase text-[11px] tracking-widest text-text-muted font-inter font-normal pt-[1px]">
            Написать управляющей
          </span>
          <div className="flex flex-col gap-[2px] font-inter text-[15px]">
            <span className="text-text-muted">Мария</span>
            <a
              href="mailto:brigadir@tseh2.ru"
              className="text-text-primary transition-colors duration-200 hover:text-brand-orange break-all"
            >
              brigadir@tseh2.ru
            </a>
          </div>
        </motion.div>

        {/* Row 5 — На карте */}
        <motion.div
          custom={4}
          variants={rowVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col sm:flex-row sm:items-start border-t border-border-subtle py-[19px] gap-3 sm:gap-0"
        >
          <span className="w-full sm:w-[180px] shrink-0 uppercase text-[11px] tracking-widest text-text-muted font-inter font-normal pt-[1px]">
            На карте
          </span>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://2gis.ru/yoshkarola/firm/70000001110338386?m=47.882863%2C56.639735%2F16"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Открыть ЦЕХ №2 в 2ГИС"
              className="inline-flex items-center px-4 py-2 rounded-sm border border-border-subtle text-text-primary font-inter text-[13px] transition-colors duration-200 hover:border-brand-orange hover:text-brand-orange"
            >
              2ГИС
            </a>
            <a
              href="https://yandex.ru/maps/org/tsekh_2/225450224234/?ll=47.882962%2C56.639981&z=16.74"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Открыть ЦЕХ №2 в Яндекс Картах"
              className="inline-flex items-center px-4 py-2 rounded-sm border border-border-subtle text-text-primary font-inter text-[13px] transition-colors duration-200 hover:border-brand-orange hover:text-brand-orange"
            >
              Яндекс Карты
            </a>
          </div>
        </motion.div>

        {/* Bottom border closing the last row */}
        <div className="border-t border-border-subtle" />
      </div>
    </section>
  );
}
