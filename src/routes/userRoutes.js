import { Router } from 'express'
import prisma from '../lib/prisma.js'
import { authMiddleware } from '../middlewares/authMiddlewares.js'

const router = Router()

router.get('/me', authMiddleware, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.userId },
    select: { id: true, name: true, email: true }
  })

  return res.json(user)
})

export default router
