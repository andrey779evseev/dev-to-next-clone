import { getSession } from '@/utils/session'
import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

export default async function ContentLayout(props: PropsWithChildren) {
	const { children } = props
	const {isAuthenticated} = await getSession()
	if (!isAuthenticated) redirect('/login')
	return <>{children}</>
}
