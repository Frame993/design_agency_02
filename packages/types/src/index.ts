export type BudgetRange = '$10–25k' | '$25–50k' | '$50–100k' | '$100k+'

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
