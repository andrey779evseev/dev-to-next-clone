import { PropsWithChildren } from 'react'
import Link from 'next/link'
import NotificationsSidebar from '@/components/notifications/NotificationsSidebar'

export default function NotificationsLayout({ children }: PropsWithChildren) {
	return (
		<div className='mx-auto grid max-w-[1024px] grid-cols-[240px_1fr] grid-rows-[min-content_1fr] gap-4 p-4'>
			<div>
				<h1 className='text-3xl font-bold text-base-100'>Notifications</h1>
			</div>
			<div className='flex h-full items-center justify-end'>
				<Link
					href='/settings/notifications'
					className='ghost-gray-btn ml-auto px-4 py-2'
				>
					Settings
				</Link>
			</div>
			<div>
				<NotificationsSidebar />
			</div>
			<div>{children}</div>
		</div>
	)
}
