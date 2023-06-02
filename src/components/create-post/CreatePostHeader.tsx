'use client'

import { cn } from '@/utils/cn'

type PropsType = {
	isPreview: boolean
	setIsPreview: (value: boolean) => void
}

export default function CreatePostHeader(props: PropsType) {
	const { isPreview, setIsPreview } = props
	return (
		<div className='mb-1 flex h-14 items-center justify-between'>
			<span className='text-base font-medium text-dark'>Create Post</span>
			<div className='flex h-full items-end gap-2'>
				<button
					className={cn('ghost-blue-btn p-2 text-gray-700', {
						'font-medium text-dark': !isPreview,
					})}
					onClick={() => setIsPreview(false)}
				>
					Edit
				</button>
				<button
					className={cn('ghost-blue-btn p-2 text-gray-700', {
						'font-medium text-dark': isPreview,
					})}
					onClick={() => setIsPreview(true)}
				>
					Preview
				</button>
			</div>
		</div>
	)
}
