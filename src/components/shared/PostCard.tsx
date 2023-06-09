import { reactions } from '@/content/reactions'
import Image from 'next/image'
import Link from 'next/link'
import BookmarkIcon from '@/components/common/icons/BookmarkIcon'
import CommentIcon from '@/components/common/icons/CommentIcon'
import If from '@/components/common/If'
import Tags from '@/components/common/tag/Tags'
import { cn } from '@/utils/cn'

type PropsType = {
	withImage?: boolean
	isProfile?: boolean
}

export default function PostCard(props: PropsType) {
	const { withImage = false, isProfile = false } = props

	return (
		<div
			className={cn('card-white', {
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
				<div className='relative mr-2 min-h-[32px] min-w-[32px] overflow-hidden rounded-full shadow-border shadow-dark/10'>
					<Image
						src='https://res.cloudinary.com/practicaldev/image/fetch/s--uAvUyAYM--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/5804/9c8d9724-6aea-4480-8832-40c47db5d14b.jpeg'
						width='32'
						height='32'
						alt='avatar'
					/>
				</div>
				<div>
					<div className='ghost-gray-btn -ml-1 mt-[-6px] p-1 text-sm font-medium text-base-80'>
						Nicolas Frankel
					</div>
					<div className='-mt-1 mb-2 text-xs text-gray-600'>Apr 13</div>
					<Link href={`/${'malifor'}/${'first'}`}>
						<h2 className='mb-2 cursor-pointer text-3xl font-bold text-dark transition-colors hover:text-blue-darker'>
							The importance of rel=canonical for content writers
						</h2>
					</Link>
					<Tags tags={['seo', 'content', 'contentwriting', 'discuss']} />
					<div className='mt-4 flex items-center justify-between'>
						<div className='flex'>
							<If condition={!isProfile}>
								<div className='ghost-gray-btn -ml-2 flex items-center py-1 pl-2 pr-3'>
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
							</If>
							<div
								className={cn(
									'ghost-gray-btn flex items-center py-1 pl-2 pr-3',
									{ '-ml-2': isProfile }
								)}
							>
								<CommentIcon width={18} height={18} />
								<span className='ml-1 text-sm'>Add Comment</span>
							</div>
						</div>
						<div className='flex items-center'>
							<span className='mr-2 text-xs text-gray-600'>3 min read</span>
							<If condition={!isProfile}>
								<button className='ghost-blue-btn p-2 hover:underline'>
									<BookmarkIcon width={18} height={18} />
								</button>
							</If>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
