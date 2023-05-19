'use client'

import * as PopoverBase from '@radix-ui/react-popover'
import { memo, ReactNode } from 'react'
import { cn } from '@/utils/cn'

type PropsType = {
	trigger: JSX.Element | ReactNode
	content: JSX.Element
	side?: 'bottom' | 'top' | 'left' | 'right'
	sideOffset?: number
	align?: 'start' | 'center' | 'end'
	alignOffset?: number
}

const Popover = (props: PropsType) => {
	const {
		trigger,
		content,
		sideOffset = 0,
		side = 'bottom',
		align = 'center',
		alignOffset = 0,
	} = props
	return (
		<PopoverBase.Root>
			<PopoverBase.Trigger asChild>{trigger}</PopoverBase.Trigger>
			<PopoverBase.Portal>
				<PopoverBase.Content
					side={side}
					sideOffset={sideOffset}
					avoidCollisions
					align={align}
					alignOffset={alignOffset}
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
				</PopoverBase.Content>
			</PopoverBase.Portal>
		</PopoverBase.Root>
	)
}

export default memo(Popover)
