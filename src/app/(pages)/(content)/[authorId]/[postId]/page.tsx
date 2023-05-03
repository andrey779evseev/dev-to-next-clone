import DetailPostSidebar from '@/components/detail-post/DetailPostSidebar'

type PropsType = {
	params: {
		authorId: string
		postId: string
	}
}

export default function PostPage(props: PropsType) {
	const { params } = props

	return (
		<div className='grid grid-cols-[4rem_7fr_3fr] gap-4 p-4'>
			<DetailPostSidebar />
			<div className='bg-gray-300'>dff</div>
			<div className='bg-gray-600'>sdf</div>
		</div>
	)
}
