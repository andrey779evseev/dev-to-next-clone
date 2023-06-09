import { testArticle } from '@/content/TestArticle'
import { reactions } from '@/content/reactions'
import Image from 'next/image'
import { MarkdownServer } from '@/components/common/markdown/Markdown'
import Tags from '@/components/common/tag/Tags'
import DetailPostComments from '@/components/detail-post/DetailPostComments'

export default function DetailPostArticle() {
	return (
		<article className='card-white'>
			<header>
				<Image
					src='https://res.cloudinary.com/practicaldev/image/fetch/s--E3TH2FH6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hydpwwjn8abgva0twugq.png'
					alt='post-head-photo'
					width={1000}
					height={400}
					className='h-auto w-full rounded-t-md'
					priority
				/>
				<div className='px-16 pt-8'>
					<div className='mb-5 flex items-center'>
						<Image
							src='https://res.cloudinary.com/practicaldev/image/fetch/s--51cXlMeN--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/595171/212ed3cd-5507-4eb4-9208-32ccae5d6a67.jpg'
							alt='author-avatar'
							width={40}
							height={40}
							className='rounded-full'
						/>
						<div className='flex flex-col justify-between pl-3'>
							<span className='text-base font-bold text-gray-700'>
								Mark Steadman
							</span>
							<p className='text-xs text-base-60'>Posted on May 4</p>
						</div>
					</div>
					<div className='flex items-center gap-8 py-2'>
						{reactions.map((reaction) => (
							<div className='flex items-center' key={reaction}>
								<Image src={reaction} alt={reaction} width={24} height={24} />
								<span className='ml-1 text-base text-dark'>2</span>
							</div>
						))}
					</div>
					<h1 className='mb-4 mt-2 text-3xl font-bold leading-tight sm:font-black md:text-4xl lg:text-5xl'>
						React Testing Library & Accessibility
					</h1>
					<Tags tags={['webdev', 'a11y', 'javascript', 'react']} size='big' />
				</div>
			</header>
			<div className='mt-2 break-words px-16 py-8 text-xl font-light'>
				<MarkdownServer source={testArticle} />
			</div>
			<DetailPostComments />
		</article>
	)
}
