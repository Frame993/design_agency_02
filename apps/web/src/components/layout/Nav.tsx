import { useEffect, useState } from "react";
import { useT } from "../../i18n";
import { BtnLink } from "../ui/Btn";

export function Nav() {
  const { t } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const { scrollY } = window;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docH > 0 ? scrollY / docH : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#work", label: t("nav.work") },
    { href: "#services", label: t("nav.services") },
    { href: "#about", label: t("nav.about") },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-60 h-[4px] pointer-events-none"
      >
        <div
          className="h-full bg-accent origin-left"
          style={{
            transform: `scaleX(${progress})`,
            opacity: progress > 0.01 ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "h-[60px] bg-white/85 backdrop-blur-xl border-b border-black/8 shadow-[0_1px_28px_rgba(0,0,0,0.07)]"
            : "h-[72px] bg-transparent"
        }`}
      >
        <div className="relative flex items-center justify-between h-full px-6 sm:px-10 lg:px-16">
          {/* Brand */}
          <a
            href="#"
            className="group flex items-center gap-1.5 relative z-10 shrink-0"
          >
            <span className="font-bold text-[0.95rem] tracking-[0.2em] uppercase">
              {t("nav.brand")}
            </span>
            {/* <span
              aria-hidden="true"
              className="block w-[5px] h-[5px] rounded-full bg-accent transition-transform duration-300 group-hover:scale-[2.2]"
            /> */}
          </a>

          {/* Desktop links — absolutely centered */}
          <ul className="hidden md:flex items-center gap-9 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-sm font-medium text-gray-600 hover:text-black transition-colors duration-300 py-1"
                >
                  {l.label}
                  {/* Sliding underline */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-px w-0 bg-black group-hover:w-full transition-all duration-300 ease-out"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-3 relative z-10">
            <div className="hidden md:block">
              <BtnLink href="#contact" variant="soft" size="sm">
                {t("nav.cta")}
              </BtnLink>
            </div>

            {/* Asymmetric 2-bar hamburger → X */}
            <button
              className="md:hidden flex flex-col justify-center gap-[7px] w-10 h-10 -mr-2 relative z-10"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center ${
                  open ? "w-[22px] rotate-45 translate-y-[8.5px]" : "w-[22px]"
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center ${
                  open ? "w-[22px] -rotate-45 -translate-y-[8.5px]" : "w-[14px]"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer — slides from the right */}
      <div
        aria-hidden={!open}
        className="fixed inset-0 z-55 md:hidden"
        style={{
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.55s cubic-bezier(0.76, 0, 0.24, 1)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div className="h-full bg-black flex flex-col px-8 sm:px-12 pb-10">
          {/* Top bar — mirrors nav */}
          <div className="flex items-center justify-between h-[72px] shrink-0">
            <span className="text-white font-bold text-[0.95rem] tracking-[0.2em] uppercase">
              {t("nav.brand")}
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 -mr-2 flex items-center justify-center text-white/40 hover:text-white transition-colors duration-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1L15 15M15 1L1 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Staggered links */}
          <div className="flex-1 flex flex-col justify-center">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-end justify-between py-7 border-b border-white/[0.07] first:border-t first:border-white/[0.07]"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateX(0)" : "translateX(24px)",
                  transition: `opacity 0.5s ease ${i * 80 + 120}ms, transform 0.55s cubic-bezier(0.76,0,0.24,1) ${i * 80 + 120}ms`,
                }}
              >
                <span
                  className="font-display font-bold italic text-white group-hover:text-accent transition-colors duration-300 leading-none"
                  style={{ fontSize: "clamp(2.6rem, 11vw, 4rem)" }}
                >
                  {l.label}
                </span>
                <span className="text-accent text-[0.6rem] font-bold tracking-[0.22em] uppercase mb-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className="pt-8 flex flex-col gap-3 shrink-0"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.45s ease 0.4s, transform 0.45s ease 0.4s",
            }}
          >
            <BtnLink
              href="#contact"
              variant="accent"
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            >
              {t("nav.cta")}
            </BtnLink>
            <a
              href="mailto:hello@brilo.ru"
              className="text-[0.7rem] text-center text-white/25 hover:text-white/50 transition-colors py-1"
            >
              hello@brilo.ru
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
