import { PropsWithChildren } from 'react'
import { redirect } from 'next/navigation'
import { getSession } from '@/utils/session'

export default async function ContentLayout(props: PropsWithChildren) {
	const { children } = props
	const { isAuthenticated } = await getSession()
	if (!isAuthenticated) redirect('/login')
	return <>{children}</>
}
