'use client'

import { memo } from 'react'
import If from '@/components/common/If'
import { cn } from '@/utils/cn'

type PropsType = {
	values: string[]
	max: number | undefined
	title: string
	filteredItems: { title: string; description: string }[]
	selectedItem: number | null
	text: string
	select: (value: string) => void
}

const AutoCompletePopover = (props: PropsType) => {
	const { values, max, text, filteredItems, selectedItem, select, title } =
		props
	return (
		<div className='card-white absolute inset-x-0 top-full z-dropdown max-h-[300px] w-full !overflow-y-auto bg-white p-1'>
			{max !== undefined && values.length >= max ? (
				<div className='text-base text-dark'>Only {max} sections allowed</div>
			) : (
				<>
					<If condition={text.length === 0}>
						<div className='border-b border-base-20 p-3 text-lg font-bold text-dark'>
							{title}
						</div>
					</If>
					<ul aria-multiselectable='true' role='listbox'>
						{filteredItems.map((item, i) => (
							<li
								role='option'
								aria-selected={selectedItem === i}
								className={cn(
									'group cursor-pointer rounded-md p-3 transition-colors hover:bg-gray-100',
									{ 'bg-gray-100': selectedItem === i }
								)}
								key={i}
								onClick={() => select(item.title)}
							>
								<div
									className={cn('group-hover:text-blue-darker', {
										'text-blue-darker': selectedItem === i,
									})}
								>
									<span
										className={cn('text-danger group-hover:text-blue-darker', {
											'text-blue-darker': selectedItem === i,
										})}
									>
										#
									</span>
									{item.title}
								</div>
								<div className='text-sm'>{item.description}</div>
							</li>
						))}
						<If condition={filteredItems.length === 0 && text.length !== 0}>
							<li
								role='option'
								aria-selected='false'
								className='group cursor-pointer rounded-md p-3 transition-colors hover:bg-gray-100'
								onClick={() => select(text)}
							>
								<div className='group-hover:text-blue-darker'>
									<span className='text-danger group-hover:text-blue-darker'>
										#
									</span>
									{text}
								</div>
							</li>
						</If>
					</ul>
				</>
			)}
		</div>
	)
}

export default memo(AutoCompletePopover)
