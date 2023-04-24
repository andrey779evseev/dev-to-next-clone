import { PropsWithChildren } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function PagesLayout(props: PropsWithChildren) {
	const { children } = props
	return (
		<>
			<Header />
			<main className='mt-14 bg-gray-100'>{children}</main>
			<Footer />
		</>
	)
}
