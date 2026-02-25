import { useReveal } from '../../hooks/useReveal'

const projects = [
  {
    id: 'apex',
    client: 'Apex Capital',
    type: 'Brand Identity + Web',
    bg: '#0d0d0d',
    patternColor: 'rgba(245,240,232,0.06)',
    textColor: 'rgba(245,240,232,0.09)',
    variant: 'tall',
    svgContent: (c: string, t: string) => (
      <>
        <circle cx="200" cy="200" r="180" stroke={c} strokeWidth="1" />
        <circle cx="200" cy="200" r="120" stroke={c} strokeWidth="1" />
        <circle cx="200" cy="200" r="60" stroke={c} strokeWidth="1" />
        <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(245,240,232,0.04)" strokeWidth="1" />
        <line x1="200" y1="0" x2="200" y2="400" stroke="rgba(245,240,232,0.04)" strokeWidth="1" />
        <text x="200" y="218" textAnchor="middle" fontFamily="Georgia,serif" fontSize="72" fontWeight="700" fill={t} letterSpacing="8">APEX</text>
      </>
    ),
    viewBox: '0 0 400 500',
  },
  {
    id: 'lune',
    client: 'Lune Skincare',
    type: 'Packaging + Campaign',
    bg: '#e8e0d5',
    patternColor: 'rgba(26,26,26,0.08)',
    textColor: 'rgba(26,26,26,0.08)',
    variant: 'normal',
    svgContent: (c: string, t: string) => (
      <>
        <rect x="60" y="60" width="280" height="180" rx="90" stroke={c} strokeWidth="1" />
        <rect x="100" y="90" width="200" height="120" rx="60" stroke={c} strokeWidth="1" />
        <circle cx="200" cy="150" r="40" stroke={c} strokeWidth="1" />
        <text x="200" y="162" textAnchor="middle" fontFamily="Georgia,serif" fontSize="52" fontWeight="700" fill={t} letterSpacing="6">LUNE</text>
      </>
    ),
    viewBox: '0 0 400 300',
  },
  {
    id: 'nori',
    client: 'Nori Finance',
    type: 'UI/UX + Design System',
    bg: '#1a2e4a',
    patternColor: 'rgba(126,184,247,0.12)',
    textColor: 'rgba(126,184,247,0.1)',
    variant: 'normal',
    svgContent: (c: string, t: string) => (
      <>
        {[40, 160, 280].flatMap((x) => [40, 180].map((y) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="80" height="80" stroke={c} strokeWidth="1" />
        )))}
        <text x="200" y="162" textAnchor="middle" fontFamily="Georgia,serif" fontSize="44" fontWeight="700" fill={t} letterSpacing="6">NORI</text>
      </>
    ),
    viewBox: '0 0 400 300',
  },
  {
    id: 'pulse',
    client: 'Pulse Audio',
    type: 'Brand + Motion + Web',
    bg: '#2d1b4e',
    patternColor: 'rgba(201,168,245,0.1)',
    textColor: 'rgba(201,168,245,0.07)',
    variant: 'wide',
    svgContent: (_c: string, t: string) => (
      <>
        <path d="M0 200 Q150 80 300 200 Q450 320 600 200 Q750 80 900 200 Q1050 320 1200 200" stroke="rgba(201,168,245,0.1)" strokeWidth="2" fill="none" />
        <path d="M0 200 Q150 120 300 200 Q450 280 600 200 Q750 120 900 200 Q1050 280 1200 200" stroke="rgba(201,168,245,0.07)" strokeWidth="1" fill="none" />
        <path d="M0 200 Q150 160 300 200 Q450 240 600 200 Q750 160 900 200 Q1050 240 1200 200" stroke="rgba(201,168,245,0.05)" strokeWidth="1" fill="none" />
        <text x="600" y="218" textAnchor="middle" fontFamily="Georgia,serif" fontSize="80" fontWeight="700" fill={t} letterSpacing="12">PULSE</text>
      </>
    ),
    viewBox: '0 0 1200 400',
  },
]

export function Work() {
  const ref = useReveal()

  return (
    <section className="py-32 px-16 max-w-[1320px] mx-auto" id="work" ref={ref}>
      {/* Header */}
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="block text-xs font-semibold tracking-[0.12em] uppercase text-gray-600 mb-5">Selected work</span>
          <h2 className="font-display font-bold" style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.1 }}>
            Projects we're<br />proud of
          </h2>
        </div>
        <a href="#" className="hidden md:inline-flex items-center px-8 py-3.5 text-sm font-semibold border-[1.5px] border-black rounded hover:bg-black hover:text-white transition-all">
          View all projects
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tall card */}
        <article className="reveal flex flex-col gap-3.5 md:row-span-2">
          <ProjectCard project={projects[0]} aspectClass="aspect-[3/4] md:h-full md:aspect-auto" />
        </article>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          <article className="reveal flex flex-col gap-3.5">
            <ProjectCard project={projects[1]} aspectClass="aspect-[4/3]" />
          </article>
          <article className="reveal flex flex-col gap-3.5">
            <ProjectCard project={projects[2]} aspectClass="aspect-[4/3]" />
          </article>
        </div>

        {/* Wide card */}
        <article className="reveal flex flex-col gap-3.5 md:col-span-2">
          <ProjectCard project={projects[3]} aspectClass="aspect-[21/7]" />
        </article>
      </div>
    </section>
  )
}

function ProjectCard({ project: p, aspectClass }: { project: typeof projects[0]; aspectClass: string }) {
  return (
    <>
      <a
        href="#"
        className="relative block rounded-xl overflow-hidden group"
        aria-label={`View ${p.client} project`}
      >
        <div className={`w-full ${aspectClass} flex items-center justify-center relative transition-transform duration-500 group-hover:scale-[1.04]`} style={{ background: p.bg }}>
          <svg className="absolute inset-0 w-full h-full" viewBox={p.viewBox} fill="none" aria-hidden="true">
            {p.svgContent(p.patternColor, p.textColor)}
          </svg>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)' }}>
          <div className="w-full flex items-end justify-between translate-y-2.5 group-hover:translate-y-0 transition-transform duration-300">
            <div>
              <p className="text-[0.7rem] font-semibold tracking-[0.12em] text-accent mb-1">
                {String(projects.findIndex(x => x.id === p.id) + 1).padStart(2, '0')}
              </p>
              <h3 className="text-white text-lg font-semibold">{p.client}</h3>
              <p className="text-white/60 text-sm">{p.type}</p>
            </div>
            <span className="text-accent text-2xl leading-none">↗</span>
          </div>
        </div>
      </a>
      <div className="flex justify-between items-center px-1">
        <div className="flex flex-col gap-[0.15rem]">
          <span className="font-semibold text-[0.95rem]">{p.client}</span>
          <span className="text-[0.78rem] text-gray-400">{p.type}</span>
        </div>
        <span className="text-[0.7rem] font-semibold tracking-[0.1em] text-gray-400">
          {String(projects.findIndex(x => x.id === p.id) + 1).padStart(2, '0')}
        </span>
      </div>
    </>
  )
}
