export type BudgetRange = '$1–2k' | '$2–5k' | '$5–10k' | '$10k+'

export interface ContactFormPayload {
  name: string
  email: string
  company?: string
  budget?: BudgetRange
  message: string
}

export interface ApiResponse<T = null> {
  success: boolean
  data?: T
  error?: string
}
