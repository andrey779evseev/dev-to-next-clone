import { Metadata } from 'next'
import '@/styles/globals.css'
import { PropsWithChildren } from 'react'
import { Roboto } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs/app-beta'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700', '500'] })
export const metadata: Metadata = {
	title: 'DEV community',
	viewport: {
		width: 'device-width',
		initialScale: 1,
	},
	description: "DEV Community on site like on dev.to but it's a clone",
	icons: ['/favicon.ico'],
}

export const runtime = 'experimental-edge'

export default function RootLayout(props: PropsWithChildren) {
	const { children } = props
	return (
		<ClerkProvider>
			<html lang='en' className={roboto.className}>
				<body>{children}</body>
			</html>
		</ClerkProvider>
	)
}
