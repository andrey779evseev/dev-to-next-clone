'use client'

import { memo, PropsWithChildren, useState } from 'react'
import Image from 'next/image'
import FullScreen from '@/components/common/FullScreen'

const PreFullScreen = (props: PropsWithChildren) => {
	const { children } = props
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div
			className='invisible absolute right-0 top-0 cursor-pointer rounded-bl-md rounded-tr-md bg-base-60 p-2 opacity-0 transition-opacity hover:!opacity-100 group-hover:visible group-hover:opacity-90'
			onClick={() => setIsOpen(true)}
		>
			<Image
				src='/icons/fullscreen/enter-fullscreen.svg'
				alt='enter-fullscreen'
				width={20}
				height={20}
			/>
			<FullScreen visible={isOpen} onClose={() => setIsOpen(false)}>
				{children}
			</FullScreen>
		</div>
	)
}

export default memo(PreFullScreen)
