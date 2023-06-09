import Tag from '@/components/common/tag/Tag'
import { cn } from '@/utils/cn'

type PropsType = {
	tags: string[]
	size?: 'small' | 'big'
	isGray?: boolean
}

export default function Tags(props: PropsType) {
	const { tags, size = 'small', isGray = false } = props
	return (
		<ul
			className={cn(
				'-ml-1 flex flex-wrap gap-px',
				{ 'text-sm': size === 'small' },
				{ 'text-base': size === 'big' }
			)}
		>
			{tags.map((tag, i) => (
				<li key={i}>
					<Tag tag={tag} isGray={isGray} size={size} />
				</li>
			))}
		</ul>
	)
}
