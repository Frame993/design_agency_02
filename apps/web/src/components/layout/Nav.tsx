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

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = [
    { href: '#work', label: t('nav.work') },
    { href: '#services', label: t('nav.services') },
    { href: '#about', label: t('nav.about') },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[72px] px-6 sm:px-10 lg:px-16 transition-all duration-300 backdrop-blur-md ${
          scrolled ? 'border-b border-black/8 bg-white/90' : 'bg-cream/90'
        }`}
      >
        <a href="#" className="text-[1.1rem] font-bold tracking-[0.2em] relative z-10">
          {t('nav.brand')}
        </a>

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

        {/* 3-bar hamburger → X */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 -mr-2 relative z-10"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block w-[22px] h-[2px] bg-black rounded transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-black rounded transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-black rounded transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Full-screen mobile overlay */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-60 flex flex-col bg-cream md:hidden transition-all duration-300 ease-out ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        {/* Top bar — mirrors the nav */}
        <div className="flex items-center justify-between h-[72px] px-6 sm:px-10 border-b border-black/8 shrink-0">
          <span className="text-[1.1rem] font-bold tracking-[0.2em]">{t('nav.brand')}</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex items-center justify-center w-10 h-10 -mr-2"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Editorial nav links */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 overflow-y-auto py-4">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between py-6 border-b border-black/8 last:border-b-0"
            >
              <span
                className="font-display font-bold text-black group-hover:translate-x-1.5 transition-transform duration-300"
                style={{ fontSize: 'clamp(2.2rem, 10vw, 3.2rem)' }}
              >
                {l.label}
              </span>
              <span className="text-[0.68rem] font-bold tracking-widest uppercase text-gray-400 group-hover:text-accent transition-colors duration-300">
                {String(i + 1).padStart(2, '0')}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom — CTA + contact */}
        <div className="px-8 sm:px-12 pb-12 pt-6 flex flex-col gap-3 shrink-0 border-t border-black/8">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-full py-4 bg-black text-white text-sm font-semibold rounded hover:bg-gray-900 transition-colors"
          >
            {t('nav.cta')}
          </a>
          <a
            href="mailto:hello@brilo.ru"
            className="text-xs text-center text-gray-400 hover:text-black transition-colors py-1"
          >
            hello@brilo.ru
          </a>
        </div>
      </div>
    </>
  )
}
