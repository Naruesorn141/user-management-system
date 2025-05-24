import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET || 'secret'

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.token
  if (!token) return res.status(401).json({ message: 'Unauthenticated' })

  try {
    const decoded = jwt.verify(token, secret)
    req.user = decoded
    next()
  } catch {
    return res.status(403).json({ message: 'Invalid token' })
  }
}