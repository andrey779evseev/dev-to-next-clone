import PostCard from '@/components/shared/PostCard'

export default function Feed() {
	return (
		<div className='flex flex-col gap-2'>
			<PostCard withImage />
			<PostCard />
			<PostCard />
			<PostCard />
			<PostCard />
		</div>
	)
}
