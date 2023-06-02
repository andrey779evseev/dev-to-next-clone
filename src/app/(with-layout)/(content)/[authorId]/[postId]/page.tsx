import DetailPostArticle from '@/components/detail-post/DetailPostArticle'
import DetailLeftPostSidebar from '@/components/detail-post/DetailPostLeftSidebar'
import DetailPostReadNextSection from '@/components/detail-post/DetailPostReadNextSection'
import DetailPostRightSidebar from '@/components/detail-post/DetailPostRightSidebar'

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
			<DetailLeftPostSidebar />
			<div>
				<DetailPostArticle />
				<DetailPostReadNextSection />
			</div>
			<DetailPostRightSidebar />
		</div>
	)
}
