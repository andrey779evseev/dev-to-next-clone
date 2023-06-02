import { PropsWithChildren } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/header/Header'

export default function PagesLayout(props: PropsWithChildren) {
	const { children } = props
	return (
		<>
			{/* @ts-expect-error Server Component */}
			<Header />
			<main className='mt-14 bg-gray-100'>{children}</main>
			<Footer />
		</>
	)
}
