import bcrypt from 'bcryptjs'
import { generateToken, getUserId } from '../utils'

const Query = {
  me (parent, args, { prisma, request }, info) {
    const userId = getUserId(request)
    return prisma.query.user({ 
      where: {
        id: userId
      }
    })
  },
  users (parent, args, { prisma, request }, info) {
    const userId = getUserId(request)
    return prisma.query.users()
  }
}

const Mutation = {
  async login (parent, { data }, { prisma }, info) {
    const user = await prisma.query.user({
      where: {
        email: data.email
      }
    })
    if (!user) {
      throw new Error('Unable to login.')
    }
    const isMatch = await bcrypt.compare(data.password, user.password)
    if (!isMatch) {
      throw new Error('Unable to login.')
    }

    return {
      user,
      token: generateToken(user.id)
    }
  }
}

const User = {}

const resolvers = {
  Query,
  Mutation,
  User
}

export { resolvers as default }
