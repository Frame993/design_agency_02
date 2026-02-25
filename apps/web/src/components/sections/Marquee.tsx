const items = ['Brand Identity', 'UI/UX Design', 'Motion', 'Web Design', 'Art Direction', 'Design Systems']
const doubled = [...items, ...items]

export function Marquee() {
  return (
    <div className="bg-black text-white overflow-hidden py-[1.1rem] whitespace-nowrap" aria-hidden="true">
      <div className="inline-flex gap-8 animate-marquee text-sm font-medium tracking-[0.06em]">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8">
            {item}
            <span className="text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
