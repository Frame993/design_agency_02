import { useReveal } from '../../hooks/useReveal'
import { useT } from '../../i18n'

export function Testimonials() {
  const ref = useReveal()
  const { t, data } = useT()
  const { featured, items } = data.testimonials

  return (
    <section className="bg-black text-white py-32 px-6 sm:px-10 lg:px-16" ref={ref}>
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="mb-20">
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', lineHeight: 1.1 }}
          >
            {t('testimonials.headline_1')}<br />{t('testimonials.headline_2')}
          </h2>
        </div>

        {/* Featured pull-quote */}
        <blockquote className="reveal mb-20 pb-20 border-b border-white/10">
          {/* Accent marker */}
          <div className="w-10 h-[2px] bg-accent mb-8" />

          <p
            className="font-display italic text-white mb-10 max-w-[90ch]"
            style={{ fontSize: 'clamp(1.45rem, 3vw, 2.4rem)', lineHeight: 1.5 }}
          >
            {featured.quote_before}{' '}
            <em className="not-italic text-accent">{featured.quote_em}</em>{' '}
            {featured.quote_after}
          </p>

          <footer className="flex items-center gap-4 flex-wrap">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold tracking-wide text-white/60 shrink-0">
              {featured.initials}
            </div>
            <div>
              <strong className="block text-sm text-white font-semibold">{featured.name}</strong>
              <span className="text-xs text-white/45">{featured.role}</span>
            </div>
            <span className="ml-auto text-[0.68rem] font-semibold tracking-widest uppercase text-accent/60 hidden sm:block">
              {featured.tag}
            </span>
          </footer>
        </blockquote>

        {/* Secondary quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {items.map((item) => (
            <blockquote key={item.initials} className="reveal group">
              <p
                className="text-[0.95rem] text-white/55 italic leading-[1.85] mb-6 pl-5 border-l border-white/12 group-hover:border-accent/50 group-hover:text-white/80 transition-all duration-500"
              >
                {item.quote}
              </p>
              <footer className="flex items-center gap-3 pl-5">
                <div className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-[0.7rem] font-semibold text-white/50 shrink-0">
                  {item.initials}
                </div>
                <div>
                  <strong className="block text-sm text-white font-semibold">{item.name}</strong>
                  <span className="text-xs text-white/35">{item.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

      </div>
    </section>
  )
}
