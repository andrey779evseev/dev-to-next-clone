import HeartWithPlusIcon from '@/components/common/icons/HeartWithPlusIcon'
import CommentIcon from '@/components/common/icons/CommentIcon'
import BookmarkIcon from '@/components/common/icons/BookmarkIcon'
import HoverPopup from '@/components/common/HoverPopup'
import Tooltip from '@/components/common/Tooltip'
import Image from 'next/image'
import MoreIcon from '@/components/common/icons/MoreIcon'

const reactions = [
	{
		url: '/icons/reactions/fire.svg',
		tooltip: 'Fire',
	},
	{
		url: '/icons/reactions/raised-hands.svg',
		tooltip: 'Raised Hands',
	},
	{
		url: '/icons/reactions/exploding-head.svg',
		tooltip: 'Exploding Head',
	},
	{
		url: '/icons/reactions/unicorn.svg',
		tooltip: 'Unicorn',
	},
	{
		url: '/icons/reactions/heart.svg',
		tooltip: 'Heart',
	},
]

export default function DetailPostSidebar() {
	return (
		<aside className='sticky top-[100px] flex flex-col items-center gap-4 self-baseline text-base-80'>
			<HoverPopup
				trigger={
					<div>
						<Tooltip text='Add reaction'>
							<div className='flex cursor-pointer flex-col items-center gap-2 transition-colors hover:text-reaction-like'>
								<HeartWithPlusIcon />
								<span className='text-sm text-base-70'>8</span>
							</div>
						</Tooltip>
					</div>
				}
				content={
					<div className='z-dropdown flex w-max max-w-[360px] gap-3 rounded-[32px] bg-white p-3 text-dark shadow-1'>
						{reactions.map((reaction) => (
							<Tooltip text={reaction.tooltip} key={reaction.url}>
								<button className='flex flex-col items-center rounded-[20px] px-2 pb-1 pt-2 transition-colors hover:bg-gray-100'>
									<Image
										src={reaction.url}
										width={32}
										height={32}
										alt={reaction.tooltip}
									/>
									<span className='mt-2 text-sm text-base-70'>3</span>
								</button>
							</Tooltip>
						))}
					</div>
				}
				side='right'
				closeDelay={500}
			/>
			<Tooltip text='Jump_to Components'>
				<div className='flex cursor-pointer flex-col items-center gap-2 transition-colors hover:text-reaction-comment'>
					<CommentIcon />
					<span className='text-sm text-base-70'>2</span>
				</div>
			</Tooltip>
			<Tooltip text='Save'>
				<div className='flex cursor-pointer flex-col items-center gap-2 transition-colors hover:text-reaction-bookmark'>
					<BookmarkIcon />
					<span className='text-sm text-base-70'>6</span>
				</div>
			</Tooltip>
			<button className='rounded-full p-2 text-base-60 transition-colors hover:bg-black/5 hover:text-base-100'>
				<MoreIcon />
			</button>
		</aside>
	)
}
