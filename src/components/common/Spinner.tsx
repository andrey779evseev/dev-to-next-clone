import { cn } from '@/utils/cn'

export default function Spinner() {
	return (
		<div
			className={cn(
				'inline-block h-20 w-20',
				"after:m-2 after:block after:h-16 after:w-16 after:animate-spin after:rounded-[50%] after:border-[6px] after:border-[#fff_transparent_#fff_transparent] after:content-['']"
			)}
		></div>
	)
}
