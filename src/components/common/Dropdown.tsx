'use client'

import { memo, PropsWithChildren } from 'react'
import CheckmarkIcon from '@/components/common/icons/CheckmarkIcon'
import If from '@/components/common/If'
import Popover from '@/components/common/Popover'

type PropsType = PropsWithChildren<{
	side?: 'top' | 'bottom' | 'left' | 'right'
	sideOffset?: number
	value: string
	onChange: (value: string) => void
	items: {
		value: string
		name: string
		description: string
	}[]
	title: string
}>

const Dropdown = (props: PropsType) => {
	const {
		children,
		items,
		value,
		onChange,
		title,
		sideOffset = 4,
		side = 'bottom',
	} = props
	return (
		<Popover
			trigger={children}
			content={
				<div className='card-white w-max min-w-[250px] max-w-[360px] p-4 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]'>
					<div className='mb-3 text-lg font-bold text-dark'>{title}</div>
					<ul>
						{items.map((item, i) => (
							<li
								key={i}
								className='flex cursor-pointer items-start gap-2 rounded-md p-1 text-blue transition-colors hover:bg-blue/10'
								onClick={() => onChange(item.value)}
							>
								<div className='h-6 min-h-[24px] w-6 min-w-[24px]'>
									<If condition={value === item.value}>
										<CheckmarkIcon />
									</If>
								</div>
								<div>
									<div className='text-base font-bold text-base-90'>
										{item.name}
									</div>
									<div className='text-sm text-gray-600'>
										{item.description}
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			}
			side={side}
			sideOffset={sideOffset}
		/>
	)
}

export default memo(Dropdown)
