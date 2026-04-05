export default function Footer() {
  return (
    <footer
      className="shrink-0 border-t border-white/[0.08] px-5"
      style={{
        paddingTop: "clamp(6px, 1.2vh, 14px)",
        paddingBottom: "max(clamp(6px, 1.2vh, 14px), env(safe-area-inset-bottom))",
      }}
    >
      <p className="text-center font-inter text-text-muted text-[11px] font-normal">
        © 2026 ЦЕХ №2
      </p>
      <div className="mt-1 flex flex-col items-center">
        <p className="text-center font-inter text-text-muted text-[10px] font-normal leading-relaxed">
          ООО «Подходяще» · ОГРН 1241200002955 · ИНН 1200016105
        </p>
        <p className="text-center font-inter text-text-muted text-[10px] font-normal leading-relaxed">
          424033, Республика Марий Эл, г. Йошкар-Ола, Воскресенский пр-кт, д. 17, эт. 2
        </p>
      </div>
    </footer>
  );
}
