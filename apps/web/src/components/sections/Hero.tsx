export function Hero() {
  return (
    <section className="min-h-dvh flex flex-col justify-end pt-[72px] px-16 pb-16 relative bg-cream overflow-hidden">
      {/* Background watermark */}
      <div
        aria-hidden="true"
        className="absolute right-[-0.05em] top-1/2 -translate-y-1/2 font-display font-bold leading-none select-none pointer-events-none text-transparent"
        style={{
          fontSize: 'clamp(12rem, 22vw, 22rem)',
          WebkitTextStroke: '1px rgba(0,0,0,0.06)',
          whiteSpace: 'nowrap',
        }}
      >
        FORMA
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end pt-20 pb-8 relative">
        {/* Left */}
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.05em] text-gray-600 mb-8">
            <span
              className="w-[7px] h-[7px] rounded-full bg-[#3ecf4c] animate-pulse-dot"
            />
            Available for projects — Q3 2025
          </div>

          <h1
            className="font-display font-bold leading-[1.0] mb-10"
            style={{ fontSize: 'clamp(3.5rem, 7vw, 7rem)' }}
          >
            We craft<br />
            <em className="text-gray-600 italic">brands</em> &amp;<br />
            experiences.
          </h1>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#work"
              className="inline-flex items-center px-8 py-3.5 text-sm font-semibold bg-black text-white rounded hover:bg-gray-900 hover:-translate-y-0.5 hover:shadow-xl transition-all"
            >
              View our work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center text-sm font-semibold text-black hover:opacity-60 transition-opacity"
            >
              Start a project →
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-end gap-12">
          <p className="text-[1.05rem] text-gray-600 max-w-[40ch] leading-[1.75]">
            Brand strategy, digital design, and motion — for companies that refuse to blend in.
          </p>

          <div className="flex items-center gap-8 pt-8 border-t border-black/10">
            {[
              { num: '60+', label: 'Projects' },
              { num: '12', label: 'Awards' },
              { num: '8yr', label: 'Studio' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                {i > 0 && <div className="w-px h-10 bg-black/12" />}
                <div className="flex flex-col gap-[0.2rem]">
                  <span className="font-display font-bold text-[1.8rem] leading-none">{stat.num}</span>
                  <span className="text-[0.7rem] font-medium tracking-[0.1em] uppercase text-gray-600">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 right-16 flex flex-col items-center gap-2" aria-hidden="true">
        <div className="w-px h-16 animate-scroll-pulse" style={{ background: 'linear-gradient(to bottom, transparent, #9b9690)' }} />
        <span className="text-[0.65rem] tracking-[0.15em] uppercase text-gray-400" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </div>
    </section>
  )
}
