import { useReveal } from '../../hooks/useReveal'
import { useT } from '../../i18n'

export function Testimonials() {
  const ref = useReveal()
  const { t, data } = useT()
  const { featured, items } = data.testimonials

  return (
    <section className="bg-black text-white py-32 px-16" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-accent">{t('testimonials.label')}</span>
          <h2 className="font-display font-bold text-white" style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.1 }}>
            {t('testimonials.headline_1')}<br />{t('testimonials.headline_2')}
          </h2>
        </div>

        {/* Featured */}
        <blockquote className="reveal relative bg-white/4 border border-white/8 rounded-xl px-20 py-16 mb-6 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-6 left-14 font-display text-accent/30 leading-none pointer-events-none select-none"
            style={{ fontSize: '8rem' }}
          >
            &ldquo;
          </div>
          <p className="font-display italic text-white mb-10 max-w-[70ch]" style={{ fontSize: 'clamp(1.3rem,2.5vw,1.9rem)', lineHeight: 1.5 }}>
            {featured.quote_before}{' '}
            <em className="not-italic text-accent">{featured.quote_em}</em>{' '}
            {featured.quote_after}
          </p>
          <footer className="flex items-center gap-4 flex-wrap">
            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold tracking-[0.05em] text-white/60 shrink-0">
              {featured.initials}
            </div>
            <div>
              <strong className="block text-[0.95rem] text-white font-semibold">{featured.name}</strong>
              <span className="text-sm text-white/45">{featured.role}</span>
            </div>
            <span className="ml-auto text-[0.7rem] font-semibold tracking-widest uppercase text-accent border border-accent/30 rounded-full px-3 py-1 hidden sm:block">
              {featured.tag}
            </span>
          </footer>
        </blockquote>

        {/* Secondary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <blockquote
              key={item.initials}
              className="reveal bg-white/3 border border-white/7 rounded-xl p-10 hover:bg-white/5 hover:border-white/12 transition-all duration-300"
            >
              <p className="text-[0.95rem] text-white/70 italic leading-[1.75] mb-6">{item.quote}</p>
              <footer className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold tracking-[0.05em] text-white/60 shrink-0">
                  {item.initials}
                </div>
                <div>
                  <strong className="block text-sm text-white font-semibold">{item.name}</strong>
                  <span className="text-xs text-white/40">{item.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
