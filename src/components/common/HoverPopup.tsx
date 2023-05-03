'use client'

import * as HoverCard from '@radix-ui/react-hover-card'
import { cn } from '@/utils/cn'
import ReactNode, { memo } from 'react'

type PropsType = {
	side?: 'bottom' | 'top' | 'left' | 'right'
	trigger: JSX.Element | ReactNode.ReactNode
	content: JSX.Element
	openDelay?: number
	closeDelay?: number
	sideOffset?: number
}

const HoverPopup = (props: PropsType) => {
	const {
		trigger,
		content,
		side = 'bottom',
		openDelay = 0,
		closeDelay = 0,
		sideOffset = 0,
	} = props

	return (
		<HoverCard.Root closeDelay={closeDelay} openDelay={openDelay}>
			<HoverCard.Trigger asChild>{trigger}</HoverCard.Trigger>
			<HoverCard.Portal>
				<HoverCard.Content
					side={side}
					sideOffset={sideOffset}
					avoidCollisions
					// eslint-disable-next-line tailwindcss/no-custom-classname
					className={cn(
						'data-[state=open]:animate-in data-[state=open]:fade-in',
						'data-[state=closed]:animate-out data-[state=closed]:fade-out',
						'data-[state=open]:data-[side=bottom]:slide-in-from-top-1.5',
						'data-[state=closed]:data-[side=bottom]:slide-out-to-top-1.5',
						'data-[state=open]:data-[side=top]:slide-in-from-bottom-1.5',
						'data-[state=closed]:data-[side=top]:slide-out-to-bottom-1.5',
						'data-[state=open]:data-[side=left]:slide-in-from-right-1.5',
						'data-[state=closed]:data-[side=left]:slide-out-to-right-1.5',
						'data-[state=open]:data-[side=right]:slide-in-from-left-1.5',
						'data-[state=closed]:data-[side=right]:slide-out-to-left-1.5',
						'z-dropdown duration-100'
					)}
				>
					{content}
				</HoverCard.Content>
			</HoverCard.Portal>
		</HoverCard.Root>
	)
}

export default memo(HoverPopup)
