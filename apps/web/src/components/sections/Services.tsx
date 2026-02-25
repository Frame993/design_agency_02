import { useReveal } from '../../hooks/useReveal'
import { useT } from '../../i18n'

export function Services() {
  const ref = useReveal()
  const { t, data } = useT()

  return (
    <section className="bg-black text-white py-32 px-16" id="services" ref={ref}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-20 items-start">
        {/* Left — sticky */}
        <div className="lg:sticky lg:top-[calc(72px+2rem)]">
          <span className="block text-xs font-semibold tracking-[0.12em] uppercase text-accent mb-5">{t('services.label')}</span>
          <h2 className="font-display font-bold leading-[1.08] text-white mb-6" style={{ fontSize: 'clamp(2.2rem,3.5vw,3rem)' }}>
            {t('services.headline_1')}<br />{t('services.headline_2')}<br />{t('services.headline_3')}
          </h2>
          <p className="text-sm text-white/45 leading-[1.8] mb-8 max-w-[30ch]">
            {t('services.subtext')}
          </p>
          <a href="#contact" className="text-sm font-semibold text-white/60 hover:text-white transition-colors">
            {t('services.cta')}
          </a>
        </div>

        {/* Service list */}
        <div className="flex flex-col" ref={ref}>
          {data.services.items.map((s, i) => (
            <div
              key={s.title}
              className={`reveal group border-t border-white/10 py-9 cursor-default transition-all duration-300 hover:border-accent ${i === data.services.items.length - 1 ? 'border-b border-white/10 hover:border-b-white/10' : ''}`}
            >
              <div className="flex items-center gap-6 mb-4">
                <span className="text-[0.7rem] font-semibold tracking-[0.12em] text-accent min-w-[24px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[1.4rem] font-semibold flex-1 transition-transform duration-300 group-hover:translate-x-1.5">{s.title}</h3>
                <span className="text-[1.25rem] text-white/20 transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
              <p className="text-sm text-white/45 leading-[1.8] pl-[calc(24px+1.5rem)] mb-5 max-w-[58ch]">{s.desc}</p>
              <div className="flex flex-wrap gap-2 pl-[calc(24px+1.5rem)]">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.7rem] font-medium tracking-[0.08em] px-3 py-1 border border-white/10 rounded-full text-white/40 transition-all duration-300 group-hover:border-accent/25 group-hover:text-accent/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
