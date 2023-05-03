import Image from 'next/image'
import CommentIcon from '@/components/common/icons/CommentIcon'
import BookmarkIcon from '@/components/common/icons/BookmarkIcon'
import If from '@/components/common/If'
import { cn } from '@/utils/cn'
import Link from 'next/link'

const reactions = [
	'/icons/reactions/fire.svg',
	'/icons/reactions/raised-hands.svg',
	'/icons/reactions/exploding-head.svg',
	'/icons/reactions/unicorn.svg',
	'/icons/reactions/heart.svg',
]

type PropsType = {
	withImage?: boolean
}

export default async function FeedPost(props: PropsType) {
	const { withImage = false } = props

	return (
		<div
			className={cn('overflow-hidden rounded-md border border-dark/10', {
				'grid grid-rows-2': withImage,
			})}
		>
			<If condition={withImage}>
				<div className='relative h-full w-full'>
					<Image
						src='https://res.cloudinary.com/practicaldev/image/fetch/s--48bOLg0A--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1fh82naggwcge6dbepw8.jpg'
						fill
						alt='bg'
					/>
				</div>
			</If>
			<div className='flex items-start bg-white p-5'>
				<div className='relative mr-2 h-fit w-fit overflow-hidden rounded-full shadow-border shadow-dark/10'>
					<Image
						src='https://res.cloudinary.com/practicaldev/image/fetch/s--uAvUyAYM--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/5804/9c8d9724-6aea-4480-8832-40c47db5d14b.jpeg'
						width='32'
						height='32'
						alt='avatar'
					/>
				</div>
				<div>
					<div className='ghost-btn -ml-1 p-1 text-sm font-medium text-base-80'>
						Nicolas Frankel
					</div>
					<div className='mb-2 text-xs text-gray-600'>Apr 13</div>
					<Link href={`/${'malifor'}/${'first'}`}>
						<h2 className='mb-1 cursor-pointer text-3xl font-bold text-dark transition-colors hover:text-blue-darker'>
							The importance of rel=canonical for content writers
						</h2>
					</Link>
					<div className='-ml-0.5 mb-2 flex flex-wrap gap-px'>
						{['seo', 'content', 'contentwriting'].map((tag, i) => (
							<span
								key={i}
								className='cursor-pointer rounded-md p-1 text-sm text-gray-700 transition-all hover:bg-blue/10 hover:text-dark hover:shadow-border hover:shadow-blue/20'
							>
								<span className='text-blue'>#</span>
								{tag}
							</span>
						))}
					</div>
					<div className='flex items-center justify-between'>
						<div className='flex'>
							<div className='ghost-btn -ml-2 flex items-center py-1 pl-2 pr-3'>
								<div className='flex' dir='rtl'>
									{reactions.map((reaction, i) => (
										<div
											key={i}
											className='-mr-3 grid h-7 w-7 place-items-center rounded-2xl border-2 border-white bg-gray-100'
										>
											<Image
												src={reaction}
												alt='reaction'
												width={18}
												height={18}
											/>
										</div>
									))}
								</div>
								<span className='ml-4 text-sm text-base-80'>
									{reactions.length} reactions
								</span>
							</div>
							<div className='ghost-btn flex items-center py-1 pl-2 pr-3'>
								<CommentIcon width={18} height={18} />
								<span className='ml-1 text-sm'>Add Comment</span>
							</div>
						</div>
						<div className='flex items-center'>
							<span className='mr-2 text-xs text-gray-600'>3 min read</span>
							<div className='link p-2'>
								<BookmarkIcon width={18} height={18} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
