import { PropsWithChildren } from 'react'
import { cn } from '@/utils/cn'

type PropsType = PropsWithChildren<{
	/// large - x:20px y:12px, big - x:16px y:8px, medium - x:14px y:6px
	size: 'large' | 'big' | 'medium'
	type:
		| 'primary'
		| 'primary-light'
		| 'secondary-outlined'
		| 'secondary'
		| 'danger'
	width: 'full' | 'fit'
	onClick?: () => void
	role?: 'submit' | 'button'
}>

export default function Button(props: PropsType) {
	const {
		children,
		size,
		onClick,
		type = 'primary',
		width = 'full',
		role = 'button',
	} = props
	return (
		<button
			className={cn(
				'w-full rounded-md text-center outline-none transition-all',
				{ 'w-full': width === 'full' },
				{ 'w-fit': width === 'fit' },
				{ 'bg-blue text-white hover:bg-blue-darker': type === 'primary' },
				{ 'bg-danger text-white hover:bg-danger-darker': type === 'danger' },
				{
					'bg-blue/10 text-blue hover:bg-blue hover:text-white':
						type === 'primary-light',
				},
				{
					'bg-base-20 text-base-80 hover:bg-base-30 hover:text-base-100':
						type === 'secondary',
				},
				{
					'border-2 border-base-20 font-medium text-base-80 hover:border-base-40 hover:bg-black/5 hover:text-base-100':
						type === 'secondary-outlined',
				},
				{ 'px-5 py-3 font-medium': size === 'large' },
				{ 'px-4 py-2': size === 'big' },
				{ 'px-[14px] py-[6px]': size === 'medium' }
			)}
			onClick={onClick}
			type={role}
		>
			{children}
		</button>
	)
}
