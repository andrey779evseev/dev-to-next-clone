import { getServerSession } from 'next-auth/next'
import { authOptions } from './auth'

export async function getSession() {
	const data = await getServerSession(authOptions)
	return {
		isAuthenticated: data !== null,
		data,
	}
}
