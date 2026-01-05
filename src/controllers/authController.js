import prisma from '../lib/prisma.js'
import bcrypt from 'bcryptjs'

export async function register(req, res) {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Dados obrigatórios' })
    }

    const userExists = await prisma.user.findUnique({
      where: { email }
    })

    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existe' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    })

    return res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email
    })
  } catch (error) {
    return res.status(500).json({ error: 'Erro interno do servidor' })
  }
}
