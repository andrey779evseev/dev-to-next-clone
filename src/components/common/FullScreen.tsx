'use client'

import Portal from '@/components/common/Portal'
import { PropsWithChildren, memo, useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/utils/cn'
import { delay } from '@/utils/delay'

type PropsType = PropsWithChildren<{
	visible: boolean
	onClose: () => void
}>

const FullScreen = (props: PropsType) => {
	const { children, visible, onClose } = props
	const [innerVisible, setInnerVisible] = useState(visible)

	useEffect(() => {
		if (visible) setInnerVisible(visible)
	}, [visible])

	const close = async () => {
		setInnerVisible(false)
		await delay(150)
		onClose()
	}

	if (!visible) return <></>

	return (
		<Portal id='modals-root'>
			<div
				className={cn(
					'group fixed left-0 top-0 z-modal h-screen w-full bg-syntax-background p-6',
					innerVisible
						? 'animate-in fade-in zoom-in-50'
						: 'animate-out fade-out zoom-out-50'
				)}
			>
				<div
					className='invisible absolute right-0 top-0 cursor-pointer rounded-bl-md bg-base-60 p-2 opacity-0 transition-opacity hover:!opacity-100 group-hover:visible group-hover:opacity-90'
					onClick={close}
				>
					<Image
						src='/icons/fullscreen/enter-fullscreen.svg'
						alt='enter-fullscreen'
						width={20}
						height={20}
					/>
				</div>
				{children}
			</div>
		</Portal>
	)
}

export default memo(FullScreen)
