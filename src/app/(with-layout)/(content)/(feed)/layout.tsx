import { PropsWithChildren } from 'react'
import FeedTabs from '@/components/feed/FeedTabs'
import LeftSidebar from '@/components/left-sidebar/LeftSidebar'
import RightSidebar from '@/components/right-sidebar/RightSidebar'

export default function FeedLayout({ children }: PropsWithChildren) {
	return (
		<div className='grid w-full grid-cols-[240px_2fr_1fr] gap-4 p-4'>
			<LeftSidebar />
			<div>
				<FeedTabs />
				{children}
			</div>
			<RightSidebar />
		</div>
	)
}
