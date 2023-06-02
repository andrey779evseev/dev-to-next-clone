import { ReactElement } from 'react'
import Popover from '@/components/common/Popover'

export type MenuItemType =
	| {
			title: string
			type: 'label'
			action?: () => void
	  }
	| {
			type: 'divider'
	  }
	| {
			type: 'user'
			title: string
			description: string
	  }

type PropsType = {
	items: MenuItemType[]
	trigger: ReactElement
	sideOffset?: number
}

export default function Menu(props: PropsType) {
	const { items, trigger, sideOffset = 4 } = props
	return (
		<Popover
			trigger={trigger}
			content={
				<ul className='w-max min-w-[250px] max-w-[360px] rounded-md bg-white p-2 text-dark shadow-1 outline-none'>
					{items.map((item, i) => {
						switch (item.type) {
							case 'label':
								return (
									<li
										className='ghost-blue-btn px-4 py-2 hover:underline'
										onClick={item.action}
										role='button'
										key={i}
									>
										{item.title}
									</li>
								)
							case 'divider':
								return <li className='my-2 border-b border-base-20' key={i} />
							case 'user':
								return (
									<li
										className='ghost-blue-btn px-4 py-2 hover:underline'
										role='button'
										key={i}
									>
										<div className='text-base font-medium'>Malifor</div>
										<div className='text-sm opacity-75'>@malifor</div>
									</li>
								)
						}
					})}
				</ul>
			}
			align='end'
			sideOffset={sideOffset}
		/>
	)
}
