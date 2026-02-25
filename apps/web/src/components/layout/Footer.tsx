import { useT } from '../../i18n'

export function Footer() {
  const { t, data } = useT()

  return (
    <footer className="bg-gray-900 text-white px-16 py-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-start gap-12 pb-12 border-b border-white/8 mb-8 flex-wrap">
          <div>
            <span className="block text-[1.1rem] font-bold tracking-[0.2em] mb-3">{t('footer.brand')}</span>
            <p className="text-sm text-white/40 max-w-[26ch]">{t('footer.tagline')}</p>
          </div>
          <nav className="flex gap-16 flex-wrap">
            {data.footer.columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <span className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-white/35 mb-1">{col.title}</span>
                {col.links.map((l) => (
                  <a key={l.label} href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</a>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <div className="flex justify-between text-xs text-white/30 flex-wrap gap-2">
          <span>{t('footer.copyright')}</span>
          <span>{t('footer.privacy')}</span>
        </div>
      </div>
    </footer>
  )
}
