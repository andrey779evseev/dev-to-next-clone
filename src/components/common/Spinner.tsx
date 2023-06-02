import { cn } from '@/utils/cn'

type PropsType = {
	color: 'white' | 'blue'
	size: 'big' | 'small'
}

export default function Spinner(props: PropsType) {
	const { color, size } = props
	return (
		<div
			className={cn(
				"inline-block after:block after:animate-spin after:rounded-[50%] after:content-['']",
				{
					'after:border-[#fff_transparent_#fff_transparent]': color === 'white',
				},
				{
					'after:border-[#3b49df_transparent_#3b49df_transparent]':
						color === 'blue',
				},
				{
					'h-20 w-20 after:m-2 after:h-16 after:w-16 after:border-[6px]':
						size === 'big',
				},
				{
					'h-6 w-6 after:m-[2px] after:h-5 after:w-5 after:border-2':
						size === 'small',
				}
			)}
		/>
	)
}
