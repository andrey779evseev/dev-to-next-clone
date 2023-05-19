'use client'

import { Comment } from '@/types/Comment'
import { ShortUser } from '@/types/ShortUser'
import { memo, useMemo, useState } from 'react'
import Image from 'next/image'
import CommentIcon from '@/components/common/icons/CommentIcon'
import LikeIcon from '@/components/common/icons/LikeIcon'
import MoreIcon from '@/components/common/icons/MoreIcon'
import If from '@/components/common/If'
import Menu, { MenuItemType } from '@/components/common/Menu'
import DetailPostAddCommentForm from '@/components/detail-post/DetailPostAddCommentForm'
import { cn } from '@/utils/cn'
import { SerializedComment } from '@/utils/serializeComments'

type PropsType = {
	user: ShortUser
	comment: Comment
	depth: number
	serializedComments: SerializedComment[]
}

const menuItems: MenuItemType[] = [
	{
		title: 'Copy link',
	},
	{
		title: 'Report abuse',
	},
]

const DetailPostComment = (props: PropsType) => {
	const { user, comment, depth, serializedComments } = props
	const [isLiked, setIsLiked] = useState(false)
	const [isCollapsed, setIsCollapsed] = useState(false)
	const [isReply, setIsReply] = useState(false)

	const content = useMemo(
		() => serializedComments.find((x) => x.id === comment.id)!.content,
		[serializedComments, comment]
	)

	const repliesCount = useMemo(() => {
		let count = 0
		const countFn = (replies: Comment[] | undefined) => {
			if (replies === undefined) return
			for (const reply of replies) {
				count++
				if (reply.replies === undefined) return
				countFn(reply.replies)
			}
		}
		countFn(comment.replies)
		return count
	}, [comment])

	return (
		<div
			className={cn(
				{ 'ml-7': depth === 2 },
				{ 'ml-5': depth === 3 || depth === 4 }
			)}
		>
			{isCollapsed ? (
				<div
					className={cn(
						'mb-4 flex cursor-pointer items-center rounded-md bg-base-0 px-2 py-1 text-sm italic text-base-60',
						{ 'ml-[10px]': depth > 1 }
					)}
					onClick={() => setIsCollapsed(false)}
				>
					<Image
						src='/icons/collapse/collapsed.svg'
						alt='collapse'
						width={24}
						height={24}
					/>
					Jean-Michel Fayard 🇫🇷🇩🇪🇬🇧🇪🇸🇨🇴{' '}
					{repliesCount > 0 && `+ ${repliesCount} replies`}
				</div>
			) : (
				<div className='mb-6'>
					<div className={cn('flex items-start gap-2', { 'mb-4': isReply })}>
						<div className='flex flex-col items-center'>
							<Image
								src='https://res.cloudinary.com/practicaldev/image/fetch/s--xb0skqh---/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/413348/81e25d08-d557-4f4f-bc83-d704b110b128.jpeg'
								alt='comment-user-avatar'
								width={depth === 1 ? 32 : 24}
								height={depth === 1 ? 32 : 24}
								className={cn(
									'mt-3 rounded-full',
									depth === 1 ? 'min-h-[32px]' : 'min-h-[24px]',
									depth === 1 ? 'min-w-[32px]' : 'min-w-[24px]'
								)}
							/>
							<button className='mt-3' onClick={() => setIsCollapsed(true)}>
								<Image
									src='/icons/collapse/collapse.svg'
									alt='collapse'
									width={24}
									height={24}
								/>
							</button>
						</div>
						<div>
							<div className='card-white relative p-4'>
								<Menu
									items={menuItems}
									trigger={
										<button className='absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-md p-1 text-base-40 transition-all hover:bg-black/5 hover:text-base-100'>
											<MoreIcon width={18} height={18} />
										</button>
									}
								/>
								<div className='-ml-1 flex items-center'>
									<button className='ghost-btn mr-1 p-1'>Randall</button>
									<span className='mr-2 text-base-30'>•</span>
									<span className='text-sm text-base-60'>May 14</span>
								</div>
								<div className='mt-2 h-fit w-full font-sans text-lg font-light'>
									{content}
								</div>
							</div>
							<If condition={!isReply}>
								<div className='mt-1 flex gap-1'>
									<button
										className={cn(
											'ghost-btn group flex items-center py-1 pl-2 pr-3 text-sm transition-all',
											{ '!bg-reaction-like/10 !text-reaction-like': isLiked }
										)}
										onClick={() => setIsLiked(!isLiked)}
									>
										<LikeIcon filled={isLiked} />
										<span className='ml-1 text-base-80 transition-colors group-hover:text-base-100'>
											6 likes
										</span>
									</button>
									{depth >= 3 && comment.replies !== undefined ? (
										<span className='inline-flex items-center text-sm italic text-base-50'>
											<Image
												src='/icons/reply.svg'
												alt='reply'
												width={24}
												height={24}
											/>
											Thread
										</span>
									) : (
										<button
											className='ghost-btn flex items-center py-1 pl-2 pr-3 text-sm'
											onClick={() => setIsReply(true)}
											type='button'
										>
											<CommentIcon width={18} height={18} />
											<span className='ml-1'>Reply</span>
										</button>
									)}
								</div>
							</If>
						</div>
					</div>
					<If condition={isReply}>
						<DetailPostAddCommentForm
							user={user}
							reply
							onDismiss={() => setIsReply(false)}
						/>
					</If>
					{comment.replies !== undefined ? (
						<div className='mt-6'>
							{comment.replies!.map((reply) => (
								<DetailPostComment
									key={comment.id}
									user={user}
									comment={reply}
									depth={depth + 1}
									serializedComments={serializedComments}
								/>
							))}
						</div>
					) : null}
				</div>
			)}
		</div>
	)
}

export default memo(DetailPostComment)
