import Link from 'next/link'
import { cn } from '@/utils/cn'

type PropsType = {
	full?: boolean
}

export default function LoginButton(props: PropsType) {
	const { full = false } = props
	return (
		<Link
			href='/login'
			className={cn(
				'ghost-blue-btn border-none px-4 py-2 text-center outline-none hover:underline',
				{
					'w-full': full,
				}
			)}
		>
			<span className='whitespace-nowrap'>Log in</span>
		</Link>
	)
}
