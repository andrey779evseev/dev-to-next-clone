'use client'

import { memo, PropsWithChildren } from 'react'
import HoverPopup from '@/components/common/HoverPopup'
import If from '@/components/common/If'

type PropsType = PropsWithChildren<{
	/// if you don't want to wrap some words just put an underscore ("_") between these words instead of space
	text: string
	shortcut?: string
}>

const Tooltip = (props: PropsType) => {
	const { children, text, shortcut = undefined } = props

	return (
		<HoverPopup
			openDelay={250}
			closeDelay={250}
			trigger={children}
			sideOffset={4}
			content={
				<div
					className='z-tooltip inline-flex w-fit flex-col items-center rounded-md bg-dark/90 px-3 py-2 text-sm text-white'
					key={text}
				>
					<div className='inline-flex w-fit flex-col items-center'>
						{text.split(' ').map((substr, i) => (
							<span key={i}>{substr.replaceAll('_', ' ')}</span>
						))}
					</div>
					<If condition={shortcut !== undefined}>
						<div className='inline-flex w-fit flex-col items-center opacity-75'>
							{shortcut?.split(' ').map((substr, i) => (
								<span key={i}>{substr.replaceAll('_', ' ')}</span>
							))}
						</div>
					</If>
				</div>
			}
		/>
	)
}

export default memo(Tooltip)
