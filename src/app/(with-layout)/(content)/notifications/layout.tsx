import { PropsWithChildren } from 'react'
import Link from 'next/link'
import SharedSidebar from '@/components/shared/SharedSidebar'

const sidebarItems = [
	{
		name: 'All',
		link: 'notifications',
	},
	{
		name: 'Comments',
		link: 'notifications/comments',
	},
	{
		name: 'Posts',
		link: 'notifications/posts',
	},
]

export default function NotificationsLayout({ children }: PropsWithChildren) {
	return (
		<div className='grid-four mx-auto max-w-[1024px] p-4'>
			<h1 className='text-3xl font-bold text-base-100'>Notifications</h1>
			<Link
				href='/settings/notifications'
				className='ghost-gray-btn ml-auto px-4 py-2'
			>
				Settings
			</Link>
			<SharedSidebar items={sidebarItems} />
			<div>{children}</div>
		</div>
	)
}
