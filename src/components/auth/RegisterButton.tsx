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
				'primary-outlined-btn px-4 py-2',
				full ? 'w-full text-center' : 'whitespace-nowrap'
			)}
		>
			Create account
		</Link>
	)
}
