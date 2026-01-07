import jwt from 'jsonwebtoken'
import prisma from '../lib/prisma.js'
import bcrypt from 'bcryptjs'

 //Register

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


//Login

export async function login(req, res) {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha obrigatórios' })
    }

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return res.status(401).json({ error: 'Credenciais inválidas' })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Credenciais inválidas' })
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    )

    return res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    })
  } catch (error) {
    return res.status(500).json({ error: 'Erro interno do servidor' })
  }
}

