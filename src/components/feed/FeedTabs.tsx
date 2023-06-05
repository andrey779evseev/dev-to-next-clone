'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import If from '@/components/common/If'
import { cn } from '@/utils/cn'

const mainTabs = [
	{ name: 'Relevant', link: '/' },
	{ name: 'Latest', link: '/latest' },
	{ name: 'Top', link: '/top/week' },
]

const topTabs = [
	{ name: 'Week', link: '/top/week' },
	{ name: 'Month', link: '/top/month' },
	{ name: 'Year', link: '/top/year' },
	{ name: 'Infinity', link: '/top/infinity' },
]

export default function FeedTabs() {
	const pathname = usePathname()
	const page = useMemo(() => {
		switch (pathname!.slice(1).split('/')[0]) {
			case '':
				return 0
			case 'latest':
				return 1
			case 'top':
				return 2
		}
	}, [pathname])

	const topPage = useMemo(() => {
		if (page !== 2) return 0
		switch (pathname!.slice(1).split('/')[1]) {
			case 'week':
				return 0
			case 'month':
				return 1
			case 'year':
				return 2
			case 'infinity':
				return 3
		}
	}, [pathname])

	return (
		<div className='mb-2 flex justify-between'>
			<div className='flex'>
				{mainTabs.map((tab, i) => (
					<Link
						// @ts-ignore
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
			<If condition={page === 2}>
				<div className='flex'>
					{topTabs.map((tab, i) => (
						<Link
							// @ts-ignore
							href={tab.link}
							className={cn(
								'rounded-md px-3 py-2 text-base-70 transition-all hover:bg-white hover:text-blue',
								{ 'font-bold text-dark': topPage === i }
							)}
							key={i}
						>
							{tab.name}
						</Link>
					))}
				</div>
			</If>
		</div>
	)
}
