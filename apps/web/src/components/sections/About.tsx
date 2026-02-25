import { useReveal } from '../../hooks/useReveal'
import { useT } from '../../i18n'

export function About() {
  const ref = useReveal()
  const { t, data } = useT()

  return (
    <section className="py-32 px-16 bg-cream" id="about" ref={ref}>
      {/* Top: intro + text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32 max-w-[1400px] mx-auto">
        <div className="reveal">
          <span className="block text-xs font-semibold tracking-[0.12em] uppercase text-gray-600 mb-5">{t('about.label')}</span>
          <h2 className="font-display font-bold" style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', lineHeight: 1.1 }}>
            {t('about.headline_1')}<br />{t('about.headline_2')}<br />{t('about.headline_3')}
          </h2>
        </div>
        <div className="reveal pt-2">
          <p className="text-gray-600 text-base leading-[1.8] mb-5">
            {t('about.body_1')}
          </p>
          <p className="text-gray-600 text-base leading-[1.8] mb-8">
            {t('about.body_2')}
          </p>
          <a href="#contact" className="inline-flex items-center px-8 py-3.5 text-sm font-semibold bg-black text-white rounded hover:bg-gray-900 hover:-translate-y-0.5 transition-all">
            {t('about.cta')}
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="max-w-[1400px] mx-auto flex items-center py-12 border-t border-b border-black/10 mb-32 flex-wrap gap-6">
        {data.about.stats.map((s, i) => (
          <div key={s.label} className="reveal flex items-center gap-0 flex-1 min-w-[120px]">
            {i > 0 && <div className="w-px h-15 bg-black/12 mr-8 hidden sm:block" />}
            <div className="text-center flex-1">
              <span className="block font-display font-bold mb-1" style={{ fontSize: 'clamp(2.5rem,4vw,4rem)', lineHeight: 1 }}>{s.num}</span>
              <span className="text-[0.75rem] font-medium tracking-widest uppercase text-gray-600">{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Process */}
      <div className="max-w-[1400px] mx-auto">
        <span className="block text-xs font-semibold tracking-[0.12em] uppercase text-gray-600 mb-8">{t('about.process_label')}</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {data.about.steps.map((s, i) => (
            <div
              key={s.title}
              className={`reveal group py-8 ${i > 0 ? 'border-l border-black/10 pl-8 hover:border-black' : ''} transition-colors duration-300`}
            >
              <span className="block text-[0.7rem] font-bold tracking-[0.12em] text-gray-400 mb-4">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h4 className="text-[1.05rem] font-semibold mb-3">{s.title}</h4>
              <p className="text-sm text-gray-600 leading-[1.75]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
