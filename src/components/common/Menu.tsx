import { ReactElement } from 'react'
import Popover from '@/components/common/Popover'

export type MenuItemType = {
	title: string
}

type PropsType = {
	items: MenuItemType[]
	trigger: ReactElement
}

export default function Menu(props: PropsType) {
	const { items, trigger } = props
	return (
		<Popover
			trigger={trigger}
			content={
				<div className='w-max min-w-[250px] max-w-[360px] rounded-md bg-white p-2 text-dark shadow-1'>
					{items.map((item) => (
						<div className='link p-2 !no-underline' key={item.title}>
							{item.title}
						</div>
					))}
				</div>
			}
			align='end'
			sideOffset={4}
		/>
	)
}
