import Tag from '@/components/common/tag/Tag'
import { cn } from '@/utils/cn'

type PropsType = {
	tags: string[]
	size?: 'small' | 'big'
}

export default function Tags(props: PropsType) {
	const { tags, size = 'small' } = props
	return (
		<div
			className={cn(
				'-ml-1 mb-2 flex flex-wrap gap-px',
				{ 'text-sm': size === 'small' },
				{ 'text-base': size === 'big' }
			)}
		>
			{tags.map((tag, i) => (
				<Tag tag={tag} key={i} />
			))}
		</div>
	)
}
