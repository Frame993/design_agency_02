import { useReveal } from '../../hooks/useReveal'
import { useT } from '../../i18n'
import { BtnLink } from '../ui/Btn'

// Visual-only data — not translatable
const visuals = [
  {
    bg: '#0d0d0d',
    patternColor: 'rgba(245,240,232,0.06)',
    textColor: 'rgba(245,240,232,0.09)',
    svgContent: (c: string, t: string) => (
      <>
        <circle cx="200" cy="200" r="180" stroke={c} strokeWidth="1" />
        <circle cx="200" cy="200" r="120" stroke={c} strokeWidth="1" />
        <circle cx="200" cy="200" r="60" stroke={c} strokeWidth="1" />
        <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(245,240,232,0.04)" strokeWidth="1" />
        <line x1="200" y1="0" x2="200" y2="400" stroke="rgba(245,240,232,0.04)" strokeWidth="1" />
        <text x="200" y="218" textAnchor="middle" fontFamily="Georgia,serif" fontSize="72" fontWeight="700" fill={t} letterSpacing="8">
          APEX
        </text>
      </>
    ),
    viewBox: '0 0 400 500',
  },
  {
    bg: '#e8e0d5',
    patternColor: 'rgba(26,26,26,0.08)',
    textColor: 'rgba(26,26,26,0.08)',
    svgContent: (c: string, t: string) => (
      <>
        <rect x="60" y="60" width="280" height="180" rx="90" stroke={c} strokeWidth="1" />
        <rect x="100" y="90" width="200" height="120" rx="60" stroke={c} strokeWidth="1" />
        <circle cx="200" cy="150" r="40" stroke={c} strokeWidth="1" />
        <text x="200" y="162" textAnchor="middle" fontFamily="Georgia,serif" fontSize="52" fontWeight="700" fill={t} letterSpacing="6">
          LUNE
        </text>
      </>
    ),
    viewBox: '0 0 400 300',
  },
  {
    bg: '#1a2e4a',
    patternColor: 'rgba(126,184,247,0.12)',
    textColor: 'rgba(126,184,247,0.1)',
    svgContent: (c: string, t: string) => (
      <>
        {[40, 160, 280].flatMap((x) =>
          [40, 180].map((y) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="80" height="80" stroke={c} strokeWidth="1" />
          )),
        )}
        <text x="200" y="162" textAnchor="middle" fontFamily="Georgia,serif" fontSize="44" fontWeight="700" fill={t} letterSpacing="6">
          NORI
        </text>
      </>
    ),
    viewBox: '0 0 400 300',
  },
  {
    bg: '#2d1b4e',
    patternColor: 'rgba(201,168,245,0.1)',
    textColor: 'rgba(201,168,245,0.07)',
    svgContent: (_c: string, t: string) => (
      <>
        <path d="M0 200 Q150 80 300 200 Q450 320 600 200 Q750 80 900 200 Q1050 320 1200 200" stroke="rgba(201,168,245,0.1)" strokeWidth="2" fill="none" />
        <path d="M0 200 Q150 120 300 200 Q450 280 600 200 Q750 120 900 200 Q1050 280 1200 200" stroke="rgba(201,168,245,0.07)" strokeWidth="1" fill="none" />
        <path d="M0 200 Q150 160 300 200 Q450 240 600 200 Q750 160 900 200 Q1050 240 1200 200" stroke="rgba(201,168,245,0.05)" strokeWidth="1" fill="none" />
        <text x="600" y="218" textAnchor="middle" fontFamily="Georgia,serif" fontSize="80" fontWeight="700" fill={t} letterSpacing="12">
          PULSE
        </text>
      </>
    ),
    viewBox: '0 0 1200 400',
  },
]

export function Work() {
  const ref = useReveal()
  const { t, data } = useT()

  const projects = data.work.projects.map((p, i) => ({ ...p, ...visuals[i] }))

  return (
    <section className="py-40 px-16 max-w-[1400px] mx-auto" id="work" ref={ref}>
      {/* Header */}
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="block text-xs font-semibold tracking-[0.12em] uppercase text-gray-600 mb-5">
            {t('work.label')}
          </span>
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.1 }}
          >
            {t('work.headline_1')}
            <br />
            {t('work.headline_2')}
          </h2>
        </div>
        <div className="hidden md:flex flex-col items-end gap-3">
          <BtnLink href="#" variant="outline">{t('work.cta')}</BtnLink>
        </div>
      </div>

      {/* Project list */}
      <div className="border-t border-black/10">
        {projects.map((p, i) => (
          <a
            key={p.client}
            href="#"
            className="reveal group relative flex items-center gap-8 py-8 border-b border-black/10 transition-colors duration-300 overflow-hidden"
            aria-label={`View ${p.client} project`}
          >
            {/* Subtle background tint on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 rounded-lg"
              style={{ background: p.bg }}
            />

            {/* Number */}
            <span className="relative text-[0.68rem] font-bold tracking-[0.14em] uppercase text-gray-400 min-w-[28px] group-hover:text-accent transition-colors duration-300">
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* Client name */}
            <h3
              className="relative font-display font-bold transition-transform duration-300 ease-out group-hover:translate-x-1.5"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', lineHeight: 1.1 }}
            >
              {p.client}
            </h3>

            {/* Tags */}
            <span className="relative hidden lg:block text-[0.78rem] text-gray-400 tracking-wide">
              {p.tags.join(' · ')}
            </span>

            {/* Spacer */}
            <div className="relative flex-1" />

            {/* Thumbnail — slides in on hover (desktop only) */}
            <div className="relative hidden md:block w-0 overflow-hidden group-hover:w-[220px] transition-[width] duration-500 ease-out shrink-0 rounded-lg">
              <div
                className="w-[220px] h-[138px] relative rounded-lg overflow-hidden"
                style={{ background: p.bg }}
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox={p.viewBox}
                  fill="none"
                  aria-hidden="true"
                >
                  {p.svgContent(p.patternColor, p.textColor)}
                </svg>
              </div>
            </div>

            {/* Year + arrow */}
            <div className="relative flex items-center gap-5 shrink-0">
              <span className="text-[0.78rem] text-gray-400">{p.year}</span>
              <span className="text-xl text-gray-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
