'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/cn'

export default function NotificationsSidebar() {
	const pathname = usePathname()
	const page = useMemo(() => {
		const parts = pathname.slice(1).split('/')
		if (parts.length === 1) return 'all'
		return parts[1]
	}, [pathname])

	return (
		<nav className='flex flex-col gap-2 pt-4'>
			<Link
				href='/notifications'
				className={cn('ghost-blue-btn w-full p-2', {
					'!bg-white !text-base-100': page === 'all',
				})}
			>
				All
			</Link>
			<Link
				href='/notifications/comments'
				className={cn('ghost-blue-btn w-full p-2', {
					'!bg-white !text-base-100': page === 'comments',
				})}
			>
				Comments
			</Link>
			<Link
				href='/notifications/posts'
				className={cn('ghost-blue-btn w-full p-2', {
					'!bg-white !text-base-100': page === 'posts',
				})}
			>
				Posts
			</Link>
		</nav>
	)
}
