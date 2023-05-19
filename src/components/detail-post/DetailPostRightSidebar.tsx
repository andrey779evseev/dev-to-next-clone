import Image from 'next/image'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import Button from '@/components/common/Button'

const info = [
	{
		key: 'location',
		value: 'Sao Paulo',
	},
	{
		key: 'education',
		value: 'Stackoverflow Researcher',
	},
	{
		key: 'work',
		value: 'Developer Advocate at ScyllaDB',
	},
	{
		key: 'joined',
		value: 'Sep 13, 2020',
	},
]

export default function DetailPostRightSidebar() {
	return (
		<aside>
			<div className='card-gray relative mb-4 grid gap-4 p-4'>
				<div className='absolute left-0 top-0 h-8 w-full bg-black' />
				<div className='z-elevate flex items-end gap-2'>
					<Image
						src='https://res.cloudinary.com/practicaldev/image/fetch/s--xuf5tW6V--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/468493/e1ecb528-6156-46ab-b02f-807a6241b96b.png'
						alt='user-avatar'
						width={48}
						height={48}
						className='rounded-full'
					/>
					<span className='text-xl font-bold text-gray-700'>Daniel Reis</span>
				</div>
				<Button size='big' type='primary' width='full'>
					Follow
				</Button>
				<Breadcrumbs
					items={[
						'PHP Evangelist',
						'Twitch LiveCoder',
						'Microsoft MVP',
						'Coding useless stuff since 2011',
					]}
				/>
				<ul className='grid gap-3'>
					{info.map((item, i) => (
						<li key={i}>
							<div className='text-xs font-bold uppercase text-gray-600'>
								{item.key}
							</div>
							<div className='text-base text-gray-700'>{item.value}</div>
						</li>
					))}
				</ul>
			</div>
			<div className='card-gray'>
				<div className='list-header'>
					<span className='text-xl font-bold'>
						More from{' '}
						<span className='cursor-pointer text-blue'>Daniel Reis</span>
					</span>
				</div>
				{new Array(5).fill(null).map((_, i) => (
					<div className='list-item-wrapper group' key={i}>
						<div className='text-gray-700 group-hover:text-blue-darker'>
							#100DaysOfCode Day 1: Challenge Accepted:
						</div>
						<div className='mt-1 flex flex-wrap text-sm text-base-60'>
							{new Array(5).fill(null).map((_, i) => (
								<span key={i} className='mr-1'>
									<span className='opacity-50'>#</span>100daysofcode
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</aside>
	)
}
