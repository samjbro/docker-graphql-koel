import bcrypt from 'bcryptjs'
import prisma from '../../prisma'

const userOne = {
  input: {
    name: 'Sam',
    email: 'dummy@example.com',
    password: bcrypt.hashSync('valid123')
  }
}

const seedDatabase = async () => {
  userOne.user = await prisma.mutation.createUser({
    data: userOne.input
  })
}

seedDatabase()