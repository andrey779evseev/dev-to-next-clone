import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import { env } from '@/utils/env'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@/utils/prisma'
import { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
		}),
		GitHubProvider({
			clientId: env.GITHUB_CLIENT_ID,
			clientSecret: env.GITHUB_CLIENT_SECRET,
		}),
	],
}
