export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8 px-5">
      <p className="text-center font-inter text-text-muted text-sm font-normal">
        © 2026 ЦЕХ №2
      </p>
      <div className="mt-3 flex flex-col items-center gap-0.5">
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
