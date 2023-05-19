import { Comment } from '@/types/Comment'
import { currentUser } from '@clerk/nextjs/server'
import DetailPostAddCommentForm from '@/components/detail-post/DetailPostAddCommentForm'
import DetailPostComment from '@/components/detail-post/DetailPostComment'
import DetailPostCommentsHeader from '@/components/detail-post/DetailPostCommentsHeader'
import { serializeComments } from '@/utils/serializeComments'
import { toShortUser } from '@/utils/toShortUser'

const comment = `
Nice tips. In my opinion the main thing that separates pros from newbies is that pros turn on all the strict options and still manage to avoid \`as\` like the plague because they know a ton of tools like these to avoid it. Death to \`as\`!
`

const comments: Comment[] = [
	{
		id: 1,
		text: comment,
		name: 'Luigi Pesce',
		avatar:
			'https://res.cloudinary.com/practicaldev/image/fetch/s--x47hzwj1--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/981081/7872afca-5969-4642-9462-fdbd1cd3207b.jpg',
		date: 'May 18',
		replies: [
			{
				id: 2,
				text: comment,
				name: 'Luigi Pesce',
				avatar:
					'https://res.cloudinary.com/practicaldev/image/fetch/s--x47hzwj1--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/981081/7872afca-5969-4642-9462-fdbd1cd3207b.jpg',
				date: 'May 19',
				replies: [
					{
						id: 3,
						text: comment,
						name: 'Luigi Pesce',
						avatar:
							'https://res.cloudinary.com/practicaldev/image/fetch/s--x47hzwj1--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/981081/7872afca-5969-4642-9462-fdbd1cd3207b.jpg',
						date: 'May 20',
						replies: [
							{
								id: 4,
								text: comment,
								name: 'Luigi Pesce',
								avatar:
									'https://res.cloudinary.com/practicaldev/image/fetch/s--x47hzwj1--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/981081/7872afca-5969-4642-9462-fdbd1cd3207b.jpg',
								date: 'May 21',
								replies: [
									{
										id: 5,
										text: comment,
										name: 'Luigi Pesce',
										avatar:
											'https://res.cloudinary.com/practicaldev/image/fetch/s--x47hzwj1--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/981081/7872afca-5969-4642-9462-fdbd1cd3207b.jpg',
										date: 'May 22',
									},
								],
							},
						],
					},
				],
			},
		],
	},
]

export default async function DetailPostComments() {
	const user = await currentUser()
	const shortUser = toShortUser(user!)
	const serializedComments = await serializeComments(comments)

	return (
		<section className='border-t border-t-base-10 px-16 py-8'>
			<DetailPostCommentsHeader user={shortUser} />
			<DetailPostAddCommentForm user={shortUser} />
			<div className='mt-7'>
				{comments.map((comment) => (
					<DetailPostComment
						key={comment.id}
						user={shortUser}
						comment={comment}
						serializedComments={serializedComments}
						depth={1}
					/>
				))}
			</div>
		</section>
	)
}
