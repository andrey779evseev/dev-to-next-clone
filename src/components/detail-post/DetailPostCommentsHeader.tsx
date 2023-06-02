'use client'

import { ShortUser } from '@/types/ShortUser'
import { memo, useState } from 'react'
import Button from '@/components/common/Button'
import Dropdown from '@/components/common/Dropdown'
import DropdownIcon from '@/components/common/icons/DropdownIcon'

type PropsType = {
	user: ShortUser
}

const dropdownItems = [
	{
		value: 'top',
		name: 'Top',
		description: 'Most upvoted and relevant comments will be first',
	},
	{
		value: 'latest',
		name: 'Latest',
		description: 'Most recent comments will be first',
	},
	{
		value: 'oldest',
		name: 'Oldest',
		description: 'The oldest comments will be first',
	},
]

const DetailPostCommentsHeader = (props: PropsType) => {
	const { user } = props
	const [sort, setSort] = useState('top')

	return (
		<header className='mb-6 flex items-center justify-between'>
			<div className='flex items-center'>
				<span className='text-2xl font-bold text-base-90'>
					Top comments (34)
				</span>
				<Dropdown
					items={dropdownItems}
					value={sort}
					onChange={setSort}
					title='Sort discussion:'
				>
					<button className='ghost-blue-btn p-4 hover:underline'>
						<DropdownIcon />
					</button>
				</Dropdown>
			</div>
			<Button size='medium' type='secondary-outlined' width='fit'>
				Subscribe
			</Button>
		</header>
	)
}

export default memo(DetailPostCommentsHeader)
