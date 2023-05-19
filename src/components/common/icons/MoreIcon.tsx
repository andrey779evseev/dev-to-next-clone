import { cn } from '@/utils/cn'

type PropsType = {
	orientation?: 'horizontal' | 'vertical'
	width?: number
	height?: number
}

export default function MoreIcon(props: PropsType) {
	const { orientation, width = 24, height = 24 } = props
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			role='img'
			aria-hidden='true'
			viewBox='0 0 24 24'
			className={cn('fill-current', {
				'rotate-90': orientation === 'vertical',
			})}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z'
			></path>
		</svg>
	)
}
