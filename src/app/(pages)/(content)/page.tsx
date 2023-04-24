import Feed from '@/components/feed/Feed'
import LeftSidebar from '@/components/left-sidebar/LeftSidebar'
import RightSidebar from '@/components/right-sidebar/RightSidebar'

export default function HomePage() {
	return (
		<div className='grid w-full grid-cols-[240px_2fr_1fr] gap-4 p-4'>
			<LeftSidebar />
			<Feed />
			<RightSidebar />
		</div>
	)
}
