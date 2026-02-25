import { Router, Request, Response } from 'express'
import { Resend } from 'resend'
import { z } from 'zod'
import { ContactFormPayload, ApiResponse } from '@forma/types'
import { validate } from '../middleware/validate.js'

// ─── Supabase stub (uncomment when connected) ───────────────────────────────
// import { supabase } from '../lib/supabase.js'

export const contactRouter = Router()

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  company: z.string().max(100).optional(),
  budget: z.enum(['$10–25k', '$25–50k', '$50–100k', '$100k+']).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
})

contactRouter.post('/', validate(contactSchema), async (req: Request, res: Response) => {
  const payload = req.body as ContactFormPayload

  try {
    // ─── Send email via Resend ─────────────────────────────────────────────
    await resend.emails.send({
      from: process.env.FROM_EMAIL ?? 'Forma Studio <hello@forma.studio>',
      to: process.env.TO_EMAIL ?? 'hello@forma.studio',
      replyTo: payload.email,
      subject: `New project enquiry from ${payload.name}${payload.company ? ` · ${payload.company}` : ''}`,
      html: buildEmailHtml(payload),
    })

    // ─── Save to Supabase (uncomment when connected) ───────────────────────
    // await supabase.from('contacts').insert({
    //   name: payload.name,
    //   email: payload.email,
    //   company: payload.company,
    //   budget: payload.budget,
    //   message: payload.message,
    // })

    const response: ApiResponse = { success: true }
    res.status(200).json(response)
  } catch (err) {
    console.error('[contact] Error:', err)
    const response: ApiResponse = { success: false, error: 'Failed to send message. Please try again.' }
    res.status(500).json(response)
  }
})

function buildEmailHtml(p: ContactFormPayload): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family: system-ui, sans-serif; color: #1a1917; max-width: 600px; margin: 0 auto; padding: 32px 24px;">
  <div style="border-bottom: 2px solid #c8f23a; padding-bottom: 16px; margin-bottom: 24px;">
    <span style="font-weight: 700; letter-spacing: 0.15em; font-size: 14px;">FORMA STUDIO</span>
  </div>
  <h2 style="margin: 0 0 24px; font-size: 20px;">New project enquiry</h2>
  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 8px 0; color: #5c5955; font-size: 13px; width: 120px; vertical-align: top;">Name</td>
      <td style="padding: 8px 0; font-weight: 500;">${p.name}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #5c5955; font-size: 13px; vertical-align: top;">Email</td>
      <td style="padding: 8px 0;"><a href="mailto:${p.email}" style="color: #0d0d0d;">${p.email}</a></td>
    </tr>
    ${p.company ? `<tr><td style="padding: 8px 0; color: #5c5955; font-size: 13px; vertical-align: top;">Company</td><td style="padding: 8px 0;">${p.company}</td></tr>` : ''}
    ${p.budget ? `<tr><td style="padding: 8px 0; color: #5c5955; font-size: 13px; vertical-align: top;">Budget</td><td style="padding: 8px 0;">${p.budget}</td></tr>` : ''}
    <tr>
      <td style="padding: 16px 0 8px; color: #5c5955; font-size: 13px; vertical-align: top;">Message</td>
      <td style="padding: 16px 0 8px;"></td>
    </tr>
  </table>
  <div style="background: #f5f0e8; border-radius: 8px; padding: 20px; line-height: 1.7; white-space: pre-wrap;">${p.message}</div>
  <p style="margin-top: 32px; font-size: 12px; color: #9b9690;">Sent via forma.studio contact form</p>
</body>
</html>
  `.trim()
}
