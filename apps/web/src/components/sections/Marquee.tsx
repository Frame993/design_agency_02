import { useT } from '../../i18n'

export function Marquee() {
  const { data } = useT()
  const doubled = [...data.marquee.items, ...data.marquee.items]

  return (
    <div
      className="bg-black text-white overflow-hidden py-[1.1rem] whitespace-nowrap"
      aria-hidden="true"
    >
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
