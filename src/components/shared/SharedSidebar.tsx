'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/cn'

type PropsType = {
	items: { name: string; link: string }[]
}

export default function SharedSidebar(props: PropsType) {
	const { items } = props
	const pathname = usePathname()

	return (
		<nav>
			<ul className='flex list-none flex-col gap-1'>
				{items.map((item, i) => (
					<li
						key={i}
						className={cn('ghost-blue-btn w-full p-2', {
							'!bg-white !text-base-100': pathname.slice(1) === item.link,
						})}
					>
						<Link href={item.link} className='block h-full w-full'>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
