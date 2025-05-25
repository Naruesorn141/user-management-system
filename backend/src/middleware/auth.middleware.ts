import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { Role } from '@prisma/client'

const secret = process.env.JWT_SECRET || 'secret'

export async function authenticate(req: Request, res: Response, next: NextFunction): Promise<void> {
  const token = req.cookies.token
  if (!token) {
    res.status(401).json({ message: 'Unauthenticated' })
    return
  }

  try {
    const decoded = jwt.verify(token, secret) as { id: number; role: Role }
    req.user = decoded
    next()
    return
  } catch {
    res.status(403).json({ message: 'Invalid token' })
    return
  }
}