import { Request, Response } from 'express'
import { prisma } from '../../prisma/client'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const secret = process.env.JWT_SECRET || 'secret'

export async function login(req: Request, res: Response) {
  const { email, password } = req.body
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }
  const token = jwt.sign({ id: user.id, role: user.role }, secret)
  res.cookie('token', token, { httpOnly: true }).json({ message: 'Logged in' })
}

export async function me(req: Request, res: Response) {
  const user = await prisma.user.findUnique({ where: { id: req.user.id } })
  res.json(user)
}

export async function getUsers(req: Request, res: Response) {
  const users = await prisma.user.findMany({ select: { id: true, name: true, role: true } })
  res.json(users)
}