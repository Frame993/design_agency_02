import { createContext, useContext, type ReactNode } from 'react'
import en from '../locales/en.json'

type Dict = typeof en

// Add new locales here when ready: export type Locale = 'en' | 'ru'
export type Locale = 'en'

const locales: Record<Locale, Dict> = { en }

interface I18nContextValue {
  locale: Locale
  /** Resolve a dot-notation key to a string. Falls back to the key itself if not found. */
  t: (key: string) => string
  /** Typed access to the full locale dictionary for arrays and structured data. */
  data: Dict
}

const I18nContext = createContext<I18nContextValue>({
  locale: 'en',
  t: (key) => key,
  data: en,
})

function resolveString(obj: unknown, path: string): string {
  const val = path.split('.').reduce<unknown>((acc, k) => {
    if (acc == null || typeof acc !== 'object') return undefined
    return (acc as Record<string, unknown>)[k]
  }, obj)
  return typeof val === 'string' ? val : path
}

export function I18nProvider({
  locale = 'en',
  children,
}: {
  locale?: Locale
  children: ReactNode
}) {
  const dict = locales[locale]
  const t = (key: string) => resolveString(dict, key)
  return (
    <I18nContext.Provider value={{ locale, t, data: dict }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useT() {
  return useContext(I18nContext)
}
