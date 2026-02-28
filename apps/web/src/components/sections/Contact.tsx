import { useState, type FormEvent } from 'react'
import type { ContactFormPayload, BudgetRange } from '@brilo/types'
import { useT } from '../../i18n'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const { t, data } = useT()
  const { form, budgets, info, next_steps } = data.contact

  const [budget, setBudget] = useState<BudgetRange | ''>('')
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const fd = new FormData(e.currentTarget)
    const payload: ContactFormPayload = {
      name: fd.get('name') as string,
      email: fd.get('email') as string,
      company: (fd.get('company') as string) || undefined,
      budget: (budget as BudgetRange) || undefined,
      message: fd.get('message') as string,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const resData = await res.json()
      if (!res.ok || !resData.success) throw new Error(resData.error ?? 'Failed to send')
      setState('success')
      ;(e.target as HTMLFormElement).reset()
      setBudget('')
    } catch (err) {
      setState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <section className="bg-cream py-32 px-16" id="contact">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-24 items-start">

        {/* Left — info */}
        <div>
          <div className="text-xs font-semibold tracking-[0.14em] uppercase text-gray-600 mb-4">{t('contact.label')}</div>
          <h2 className="font-display font-bold leading-[1.08] mb-5" style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)' }}>
            {t('contact.headline')}
          </h2>
          <p className="text-[0.95rem] text-gray-600 leading-[1.8] mb-10 max-w-[36ch]">
            {t('contact.subtext')}
          </p>

          <div className="flex flex-col gap-4 mb-10 pb-10 border-b border-black/10">
            {info.map((d) => (
              <div key={d.label} className="flex items-baseline gap-4">
                <span className="text-[0.7rem] font-semibold tracking-widest uppercase text-gray-400 min-w-[88px]">{d.label}</span>
                {d.href
                  ? <a href={d.href} className="text-sm font-medium hover:underline">{d.value}</a>
                  : <span className="text-sm font-medium">{d.value}</span>
                }
              </div>
            ))}
          </div>

          <span className="block text-[0.7rem] font-semibold tracking-widest uppercase text-gray-400 mb-4">{t('contact.next_label')}</span>
          <ol className="flex flex-col gap-2.5 list-none">
            {next_steps.map((step, i) => (
              <li key={i} className="flex items-baseline gap-3 text-sm text-gray-600">
                <span className="text-[0.65rem] font-bold tracking-[0.08em] text-gray-400 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Right — form card */}
        <div className="bg-white border border-black/8 rounded-xl p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Field label={form.name_label} name="name" type="text" placeholder={form.name_placeholder} required />
            <Field label={form.email_label} name="email" type="email" placeholder={form.email_placeholder} required />
            <Field label={form.company_label} name="company" type="text" placeholder={form.company_placeholder} />

            {/* Budget */}
            <div className="flex flex-col gap-2">
              <label className="text-[0.78rem] font-semibold tracking-[0.05em] text-gray-600">{form.budget_label}</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(budget === b ? '' : b as BudgetRange)}
                    className={`text-center py-2.5 text-[0.78rem] font-semibold border-[1.5px] rounded transition-all ${
                      budget === b
                        ? 'bg-black text-white border-black'
                        : 'bg-gray-100 text-gray-600 border-transparent hover:border-gray-400 hover:text-black'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[0.78rem] font-semibold tracking-[0.05em] text-gray-600">
                {form.message_label}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder={form.message_placeholder}
                className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded text-sm text-black placeholder-gray-400 focus:outline-none focus:bg-white focus:border-black transition-all resize-y"
              />
            </div>

            {/* Error message */}
            {state === 'error' && (
              <p className="text-sm text-red-600">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={state === 'loading' || state === 'success'}
              className={`w-full flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded transition-all mt-1 ${
                state === 'success'
                  ? 'bg-[#3ecf4c] text-white cursor-default'
                  : 'bg-black text-white hover:bg-gray-900 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed'
              }`}
            >
              {state === 'loading' ? form.submit_loading : state === 'success' ? form.submit_success : form.submit_idle}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type, placeholder, required }: {
  label: string; name: string; type: string; placeholder: string; required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[0.78rem] font-semibold tracking-[0.05em] text-gray-600">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded text-sm text-black placeholder-gray-400 focus:outline-none focus:bg-white focus:border-black transition-all"
      />
    </div>
  )
}
