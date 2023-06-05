import FeedPost from '@/components/feed/FeedPost'

export default function Feed() {
	return (
		<div className='flex flex-col gap-2'>
			<FeedPost withImage />
			<FeedPost />
			<FeedPost />
			<FeedPost />
			<FeedPost />
		</div>
	)
}
