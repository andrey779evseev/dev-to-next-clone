import FeedPost from '@/components/feed/FeedPost'
import FeedTabs from './FeedTabs'

export default function Feed() {
	return (
		<div>
			<FeedTabs />
			<div className='flex flex-col gap-2'>
				<FeedPost withImage />
				<FeedPost />
				<FeedPost />
				<FeedPost />
				<FeedPost />
			</div>
		</div>
	)
}
