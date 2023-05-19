import { Metadata } from 'next'
import '@/styles/globals.css'
import { PropsWithChildren } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '700', '500', '900'],
	variable: '--font-roboto',
})

export const metadata: Metadata = {
	title: 'DEV community',
	viewport: {
		width: 'device-width',
		initialScale: 1,
	},
	description: "DEV Community on site like on dev.to but it's a clone",
	icons: ['/favicon.ico'],
}

export default function RootLayout(props: PropsWithChildren) {
	const { children } = props
	return (
		<ClerkProvider>
			<html lang='en' className={`${roboto.variable} font-sans text-dark`}>
				<body>
					{children}
					<div id='modals-root' />
				</body>
			</html>
		</ClerkProvider>
	)
}
