import { useReveal } from '../../hooks/useReveal'

const stats = [
  { num: '60+', label: 'Projects delivered' },
  { num: '12', label: 'Awards won' },
  { num: '8yr', label: 'Studio experience' },
  { num: '100%', label: 'Client retention' },
]

const steps = [
  { num: '01', title: 'Discovery', desc: 'We start by listening. Deep research into your market, audience, and competitive landscape sets the strategic foundation.' },
  { num: '02', title: 'Strategy', desc: 'We define your positioning, voice, and visual direction — creating a clear creative brief before any design begins.' },
  { num: '03', title: 'Design', desc: 'Iterative design rounds with focused feedback. We move fast, but never at the expense of craft and precision.' },
  { num: '04', title: 'Launch', desc: 'Pixel-perfect handoffs, brand rollout support, and ongoing partnership beyond the initial project.' },
]

export function About() {
  const ref = useReveal()

  return (
    <section className="py-32 px-16 bg-cream" id="about" ref={ref}>
      {/* Top: intro + text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32 max-w-[1320px] mx-auto">
        <div className="reveal">
          <span className="block text-xs font-semibold tracking-[0.12em] uppercase text-gray-600 mb-5">About Forma</span>
          <h2 className="font-display font-bold" style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', lineHeight: 1.1 }}>
            A small studio<br />with outsized<br />ambition.
          </h2>
        </div>
        <div className="reveal pt-2">
          <p className="text-gray-600 text-base leading-[1.8] mb-5">
            We're a tight-knit team of designers, strategists, and creative technologists. We work with a select number of clients each year — which means you get our full attention, not a junior team.
          </p>
          <p className="text-gray-600 text-base leading-[1.8] mb-8">
            Founded in 2019, we've partnered with startups and established brands alike, always with the same goal: design that works as hard as the people behind it.
          </p>
          <a href="#contact" className="inline-flex items-center px-8 py-3.5 text-sm font-semibold bg-black text-white rounded hover:bg-gray-900 hover:-translate-y-0.5 transition-all">
            Work with us
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="max-w-[1320px] mx-auto flex items-center py-12 border-t border-b border-black/10 mb-32 flex-wrap gap-6">
        {stats.map((s, i) => (
          <div key={s.label} className="reveal flex items-center gap-0 flex-1 min-w-[120px]">
            {i > 0 && <div className="w-px h-15 bg-black/12 mr-8 hidden sm:block" />}
            <div className="text-center flex-1">
              <span className="block font-display font-bold mb-1" style={{ fontSize: 'clamp(2.5rem,4vw,4rem)', lineHeight: 1 }}>{s.num}</span>
              <span className="text-[0.75rem] font-medium tracking-[0.1em] uppercase text-gray-600">{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Process */}
      <div className="max-w-[1320px] mx-auto">
        <span className="block text-xs font-semibold tracking-[0.12em] uppercase text-gray-600 mb-8">How we work</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`reveal group py-8 ${i > 0 ? 'border-l border-black/10 pl-8 hover:border-black' : ''} transition-colors duration-300`}
            >
              <span className="block text-[0.7rem] font-bold tracking-[0.12em] text-gray-400 mb-4">{s.num}</span>
              <h4 className="text-[1.05rem] font-semibold mb-3">{s.title}</h4>
              <p className="text-sm text-gray-600 leading-[1.75]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
