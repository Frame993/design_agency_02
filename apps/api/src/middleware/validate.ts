import { Request, Response, NextFunction } from 'express'
import { ZodSchema, ZodError } from 'zod'
import { ApiResponse } from '@brilo/types'

export function validate(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body)
    if (!result.success) {
      const error = result.error as ZodError
      const message = error.errors.map((e) => e.message).join(', ')
      const body: ApiResponse = { success: false, error: message }
      res.status(400).json(body)
      return
    }
    req.body = result.data
    next()
  }
}
