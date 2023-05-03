'use client'

import HoverPopup from '@/components/common/HoverPopup'
import { memo, PropsWithChildren } from 'react'

type PropsType = PropsWithChildren<{
	/// if you don't want to wrap some words just put an underscore ("_") between these words instead of space
	text: string
	key?: string
}>

const Tooltip = (props: PropsType) => {
	const { children, text, key } = props

	return (
		<HoverPopup
			openDelay={250}
			closeDelay={250}
			trigger={children}
			sideOffset={4}
			content={
				<span
					className='z-tooltip inline-flex w-fit flex-col items-center rounded-md bg-dark/90 px-3 py-2 text-sm text-white'
					key={key}
				>
					{text.split(' ').map((substr, i) => (
						<span key={i}>{substr.replace('_', ' ')}</span>
					))}
				</span>
			}
		/>
	)
}

export default memo(Tooltip)
