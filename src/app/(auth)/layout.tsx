import { PropsWithChildren } from 'react'
import { redirect } from 'next/navigation'
import { getSession } from '@/utils/session'

export default async function AuthLayout(props: PropsWithChildren) {
	const { children } = props
	const { isAuthenticated } = await getSession()
	if (isAuthenticated) redirect('/')
	return <>{children}</>
}
