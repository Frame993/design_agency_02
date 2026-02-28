import { useReveal } from "../../hooks/useReveal";
import { useT } from "../../i18n";
import { BtnLink } from "../ui/Btn";

export function About() {
  const ref = useReveal();
  const { t, data } = useT();

  return (
    <section className="py-32 px-16 bg-cream" id="about" ref={ref}>
      {/* Top: intro + text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32 max-w-[1400px] mx-auto">
        <div className="reveal">
          <span className="block text-xs font-semibold tracking-[0.12em] uppercase text-gray-600 mb-5">
            {t("about.label")}
          </span>
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(2.2rem,4vw,3.5rem)", lineHeight: 1.1 }}
          >
            {t("about.headline_1")}
            <br />
            {t("about.headline_2")}
            <br />
            {t("about.headline_3")}
          </h2>
        </div>
        <div className="reveal pt-2">
          <p className="text-gray-600 text-base leading-[1.8] mb-5">
            {t("about.body_1")}
          </p>
          <p className="text-gray-600 text-base leading-[1.8] mb-8">
            {t("about.body_2")}
          </p>
          <BtnLink href="#contact">{t("about.cta")}</BtnLink>
        </div>
      </div>

      {/* Stats bar */}
      <div className="max-w-[1400px] mx-auto flex items-center py-12 border-t border-b border-black/10 mb-32 flex-wrap gap-6">
        {data.about.stats.map((s, i) => (
          <div
            key={s.label}
            className="reveal flex items-center gap-0 flex-1 min-w-[120px]"
          >
            {i > 0 && (
              <div className="w-px h-15 bg-black/12 mr-8 hidden sm:block" />
            )}
            <div className="text-center flex-1">
              <span
                className="block font-display font-bold mb-1"
                style={{ fontSize: "clamp(2.5rem,4vw,4rem)", lineHeight: 1 }}
              >
                {s.num}
              </span>
              <span className="text-[0.75rem] font-medium tracking-widest uppercase text-gray-600">
                {s.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Process */}
      <div className="max-w-[1400px] mx-auto">
        <span className="block text-xs font-semibold tracking-[0.12em] uppercase text-gray-600 mb-8">
          {t("about.process_label")}
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {data.about.steps.map((s, i) => (
            <div
              key={s.title}
              className={`reveal group flex flex-col py-10 border-t border-black/10 ${
                [
                  // i=0 — left col at sm, first col at lg: no left border
                  "sm:pr-6 lg:pr-8",
                  // i=1 — right col at sm (border-l), 2nd col at lg (border-l)
                  "sm:border-l sm:border-black/10 sm:pl-6 lg:pl-8 lg:pr-8",
                  // i=2 — left col at sm (no border), 3rd col at lg (border-l)
                  "sm:pr-6 lg:border-l lg:border-black/10 lg:pl-8 lg:pr-8",
                  // i=3 — right col at sm (border-l), 4th col at lg (border-l)
                  "sm:border-l sm:border-black/10 sm:pl-6 lg:pl-8",
                ][i]
              }`}
            >
              {/* Step number + expanding accent rule */}
              <div className="flex items-center gap-3 mb-7">
                <span className="text-[0.62rem] font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-accent transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="h-px w-5 bg-black/12 group-hover:w-8 group-hover:bg-accent transition-all duration-300" />
              </div>

              <h4 className="text-base font-semibold mb-3 group-hover:translate-x-1 transition-transform duration-300">
                {s.title}
              </h4>
              <p className="text-sm text-gray-600 leading-[1.8]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
