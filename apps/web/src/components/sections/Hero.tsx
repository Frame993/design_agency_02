import { useT } from "../../i18n";
import { BtnLink } from "../ui/Btn";

export function Hero() {
  const { t, data } = useT();

  return (
    <section className="min-h-dvh flex flex-col justify-end pt-[72px] px-6 sm:px-10 lg:px-16 pb-12 md:pb-16 relative bg-cream overflow-hidden">
      {/* Background watermark — hidden on very small screens */}
      <div
        aria-hidden="true"
        className="absolute right-[-0.05em] top-1/2 -translate-y-1/2 font-display font-bold leading-none select-none pointer-events-none text-transparent hidden sm:block"
        style={{
          fontSize: "clamp(12rem, 22vw, 22rem)",
          WebkitTextStroke: "1px rgba(0,0,0,0.06)",
          whiteSpace: "nowrap",
        }}
      >
        {t("nav.brand")}
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-end pt-16 md:pt-20 pb-8 relative">
        {/* Left — badge · headline · tagline · CTAs */}
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-gray-600 mb-6 md:mb-8">
            <span className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse-dot shrink-0" />
            {t("hero.badge")}
          </div>

          <h1
            className="font-display font-bold leading-none mb-6"
            style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}
          >
            {t("hero.headline_1")}
            <br />
            <em className="text-gray-600 italic">
              {t("hero.headline_em")}
            </em>{" "}
            &amp;
            <br />
            {t("hero.headline_3")}
          </h1>

          {/* Tagline lives here on all screen sizes for correct reading order */}
          <p className="text-[0.95rem] md:text-[1.05rem] text-gray-600 leading-[1.75] mb-8 max-w-[38ch]">
            {t("hero.tagline")}
          </p>

          <div className="flex items-center gap-8 flex-wrap">
            <BtnLink href="#work">{t("hero.cta_primary")}</BtnLink>
            <a
              href="#contact"
              className="text-sm font-semibold text-black hover:opacity-60 transition-opacity"
            >
              {t("hero.cta_secondary")}
            </a>
          </div>
        </div>

        {/* Right — stats only, aligned to bottom */}
        <div className="flex flex-col justify-end">
          <div className="grid grid-cols-2 pt-8 border-t border-black/10">
            {data.hero.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center py-1 ${i > 0 ? "border-l border-black/10" : ""}`}
              >
                <span
                  className="font-display font-bold leading-none mb-1"
                  style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
                >
                  {stat.num}
                </span>
                <span className="text-[0.68rem] font-medium tracking-widest uppercase text-gray-600">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint — desktop only */}
      <div
        className="absolute bottom-10 right-6 sm:right-10 lg:right-16 hidden md:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div
          className="w-px h-16 animate-scroll-pulse"
          style={{
            background: "linear-gradient(to bottom, transparent, #9b9690)",
          }}
        />
        <span
          className="text-[0.65rem] tracking-[0.15em] uppercase text-gray-400"
          style={{ writingMode: "vertical-rl" }}
        >
          {t("hero.scroll")}
        </span>
      </div>
    </section>
  );
}
