import { useEffect, useState } from 'react'
import { useT } from '../../i18n'

export function Nav() {
  const { t } = useT()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#work', label: t('nav.work') },
    { href: '#services', label: t('nav.services') },
    { href: '#about', label: t('nav.about') },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[72px] px-16 transition-all duration-300 backdrop-blur-md ${
        scrolled ? 'border-b border-black/8 bg-white/90' : 'bg-cream/90'
      }`}
    >
      <a href="#" className="text-[1.1rem] font-bold tracking-[0.2em]">{t('nav.brand')}</a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="text-sm font-semibold px-5 py-2 border-[1.5px] border-black rounded hover:bg-black hover:text-white transition-all"
          >
            {t('nav.cta')}
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-1"
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <span className={`block w-[22px] h-[2px] bg-black rounded transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block w-[22px] h-[2px] bg-black rounded transition-all ${open ? '-rotate-45 translate-y-0' : ''}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[72px] left-0 right-0 bg-cream border-t border-black/8 px-8 py-6 flex flex-col gap-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-600" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="text-sm font-semibold" onClick={() => setOpen(false)}>
            {t('nav.cta_mobile')}
          </a>
        </div>
      )}
    </nav>
  )
}
