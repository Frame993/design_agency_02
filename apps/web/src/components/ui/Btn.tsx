import {
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  type ReactNode,
} from 'react'

// ─── Design tokens ───────────────────────────────────────────────────────────

export type BtnVariant = 'primary' | 'outline' | 'soft' | 'accent'
export type BtnSize = 'sm' | 'md'

interface BtnConfig {
  variant?: BtnVariant
  size?: BtnSize
  /** Fully rounded pill shape */
  pill?: boolean
}

/**
 * Returns the class string for a button.
 * Shared by both <Btn> (button) and <BtnLink> (anchor).
 *
 * Variants:
 *   primary — solid black, white text, lifts on hover
 *   outline — transparent fill, black border → fills black on hover
 *   soft    — subtle border → fills accent on hover (nav CTA)
 *   accent  — accent bg, black text (mobile CTAs)
 *
 * Sizes:
 *   sm — compact (nav)
 *   md — standard (sections)
 */
export function btnCls({ variant = 'primary', size = 'md', pill = false }: BtnConfig = {}) {
  const base =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ' +
    'disabled:opacity-50 disabled:pointer-events-none select-none'

  const radius = pill ? 'rounded-full' : 'rounded'

  const sizes: Record<BtnSize, string> = {
    sm: 'text-sm px-5 py-2',
    md: 'text-sm px-7 py-3.5',
  }

  const variants: Record<BtnVariant, string> = {
    primary:
      'bg-black text-white hover:bg-gray-900 hover:-translate-y-px hover:shadow-lg ' +
      'active:translate-y-0 active:shadow-none',
    outline:
      'border border-black/25 text-black hover:border-black hover:bg-black hover:text-white ' +
      'active:scale-[0.98]',
    soft:
      'border border-black/20 text-black hover:border-transparent hover:bg-accent hover:text-black ' +
      'active:scale-[0.98]',
    accent:
      'bg-accent text-black hover:brightness-110 active:scale-[0.98]',
  }

  return [base, radius, sizes[size], variants[variant]].join(' ')
}

// ─── <a> wrapper ─────────────────────────────────────────────────────────────

type BtnLinkProps = BtnConfig & { children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>

export function BtnLink({ variant, size, pill, className, children, ...props }: BtnLinkProps) {
  return (
    <a
      className={[btnCls({ variant, size, pill }), className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </a>
  )
}

// ─── <button> wrapper ────────────────────────────────────────────────────────

type BtnProps = BtnConfig & { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>

export function Btn({ variant, size, pill, className, children, ...props }: BtnProps) {
  return (
    <button
      className={[btnCls({ variant, size, pill }), className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
