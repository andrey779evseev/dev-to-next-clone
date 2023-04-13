'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/cn'

const tabs = [
	{ name: 'Relevant', link: '/' },
	{ name: 'Latest', link: '/latest' },
	{ name: 'Top', link: '/top/week' },
]

export default function FeedTabs() {
	const pathname = usePathname()
	const page = useMemo(() => {
		switch (pathname?.slice(1)) {
			case '':
				return 0
			case 'latest':
				return 1
			case 'top/week':
				return 2
		}
	}, [pathname])

	return (
		<div className='mb-2 flex'>
			{tabs.map((tab, i) => (
				<Link
					href={tab.link}
					className={cn(
						'rounded-md px-3 py-2 text-base-70 transition-all hover:bg-white hover:text-blue',
						{ 'font-bold text-dark': page === i }
					)}
					key={i}
				>
					{tab.name}
				</Link>
			))}
		</div>
	)
}
