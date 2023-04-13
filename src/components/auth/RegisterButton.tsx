import Link from 'next/link'
import { cn } from '@/utils/cn'

type PropsType = {
	full?: boolean
}

export default function RegisterButton(props: PropsType) {
	const { full = false } = props
	return (
		<Link
			href='/register'
			className={cn(
				'group cursor-pointer rounded-md border border-blue px-4 py-2 text-center outline-none transition-colors hover:bg-blue',
				{ 'w-full': full }
			)}
		>
			<span className='whitespace-nowrap text-blue transition-all group-hover:text-white group-hover:underline'>
				Create account
			</span>
		</Link>
	)
}
