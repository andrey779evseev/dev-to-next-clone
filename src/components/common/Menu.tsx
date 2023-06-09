import { ReactElement } from 'react'
import Link from 'next/link'
import Popover from '@/components/common/Popover'

export type MenuItemType =
	| {
			title: string
			type: 'label'
	  }
	| {
			title: string
			type: 'button'
			action: () => void
	  }
	| {
			title: string
			type: 'link'
			href: string
	  }
	| {
			type: 'divider'
	  }
	| {
			type: 'user'
			title: string
			description: string
			href: string
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
										key={i}
									>
										{item.title}
									</li>
								)
							case 'button':
								return (
									<li className='ghost-blue-btn' key={i}>
										<button
											className='h-full w-full appearance-none border-none px-4 py-2 text-left outline-none hover:underline'
											onClick={item.action}
										>
											{item.title}
										</button>
									</li>
								)
							case 'link':
								return (
									<li
										className='ghost-blue-btn px-4 py-2 hover:underline'
										key={i}
									>
										<Link href={item.href} className='block h-full w-full'>
											{item.title}
										</Link>
									</li>
								)
							case 'divider':
								return <li className='my-2 border-b border-base-20' key={i} />
							case 'user':
								return (
									<li className='ghost-blue-btn' key={i}>
										<Link
											href={item.href}
											className='block h-full w-full px-4 py-2 hover:underline'
										>
											<div className='text-base font-medium'>Malifor</div>
											<div className='text-sm opacity-75'>@malifor</div>
										</Link>
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
