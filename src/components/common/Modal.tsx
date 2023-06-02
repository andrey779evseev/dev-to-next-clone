'use client'

import { memo, PropsWithChildren, useEffect, useState } from 'react'
import CloseIcon from '@/components/common/icons/CloseIcon'
import Portal from '@/components/common/Portal'
import { cn } from '@/utils/cn'
import { delay } from '@/utils/delay'

type PropsType = PropsWithChildren<{
	visible: boolean
	onClose?: () => void
	title: string
}>

const Modal = (props: PropsType) => {
	const { children, visible, title, onClose } = props
	const [innerVisible, setInnerVisible] = useState(visible)

	useEffect(() => {
		if (visible) setInnerVisible(visible)
	}, [visible])

	const close = async () => {
		setInnerVisible(false)
		await delay(150)
		if (onClose !== undefined) onClose()
	}

	if (!visible) return <></>

	return (
		<Portal id='modals-root'>
			<div
				className={'fixed inset-0 z-modal flex items-center justify-center'}
				role='dialog'
				aria-modal='true'
			>
				<div
					className={cn(
						'z-elevate h-auto max-h-[calc(100%-1.5rem)] w-[90%] max-w-[640px] overflow-hidden rounded-xl bg-white shadow-2',
						innerVisible
							? 'animate-in fade-in zoom-in-50'
							: 'animate-out fade-out zoom-out-50'
					)}
				>
					<header className='flex items-center justify-between border-b border-gray-200 py-2 pl-8 pr-2'>
						<h2 className='text-xl font-bold text-base-90'>{title}</h2>
						<button className='ghost-blue-btn p-2' onClick={close}>
							<CloseIcon />
						</button>
					</header>
					<div className='overflow-y-auto p-8'>{children}</div>
				</div>
				<div
					className={cn(
						'absolute inset-0 bg-black/60',
						innerVisible ? 'animate-in fade-in' : 'animate-out fade-out'
					)}
				/>
			</div>
		</Portal>
	)
}

export default memo(Modal)
