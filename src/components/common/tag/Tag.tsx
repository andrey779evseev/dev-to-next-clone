import Link from 'next/link'
import { cn } from '@/utils/cn'
import { getRandomInt } from '@/utils/getRandomInt'

type PropsType = {
	tag: string
	isGray?: boolean
	size: 'small' | 'big'
}

const colors = [
	'green',
	'violet',
	'gold',
	'black',
	'lime',
	'gray',
	'brown',
	'turquoise',
	'orange',
	'yellow',
	'emerald',
	'sky',
	'red',
	'burgundy',
	'azure',
	'pink',
]

export default function Tag(props: PropsType) {
	const { tag, size, isGray = false } = props

	const color = isGray ? 'gray' : colors[getRandomInt(0, colors.length)]

	return (
		<Link
			href={`/t/${tag}`}
			className={cn(
				'cursor-pointer rounded-md border border-transparent text-gray-700 transition-all hover:text-dark',
				{ 'p-1': size === 'small' },
				{ 'px-2 py-1 leading-6': size === 'big' },
				{ 'hover:border-tag-pink/20 hover:bg-tag-pink/10': color === 'pink' },
				{
					'hover:border-tag-azure/20 hover:bg-tag-azure/10': color === 'azure',
				},
				{
					'hover:border-tag-burgundy/20 hover:bg-tag-burgundy/10':
						color === 'burgundy',
				},
				{ 'hover:border-tag-red/20 hover:bg-tag-red/10': color === 'red' },
				{ 'hover:border-tag-sky/20 hover:bg-tag-sky/10': color === 'sky' },
				{
					'hover:border-tag-emerald/20 hover:bg-tag-emerald/10':
						color === 'emerald',
				},
				{
					'hover:border-tag-yellow/20 hover:bg-tag-yellow/10':
						color === 'yellow',
				},
				{
					'hover:border-tag-orange/20 hover:bg-tag-orange/10':
						color === 'orange',
				},
				{
					'hover:border-tag-turquoise/20 hover:bg-tag-turquoise/10':
						color === 'turquoise',
				},
				{
					'hover:border-tag-brown/20 hover:bg-tag-brown/10': color === 'brown',
				},
				{ 'hover:border-tag-gray/20 hover:bg-tag-gray/10': color === 'gray' },
				{
					'hover:border-tag-black/20 hover:bg-tag-black/10': color === 'black',
				},
				{ 'hover:border-tag-gold/20 hover:bg-tag-gold/10': color === 'gold' },
				{
					'hover:border-tag-violet/20 hover:bg-tag-violet/10':
						color === 'violet',
				},
				{
					'hover:border-tag-green/20 hover:bg-tag-green/10': color === 'green',
				},
				{ 'hover:border-tag-lime/20 hover:bg-tag-lime/10': color === 'lime' },
				{
					'bg-tag-lime/10 hover:border-tag-lime/20 hover:bg-tag-lime/10':
						tag === 'discuss',
				}
			)}
		>
			<span
				className={cn(
					{ 'text-tag-lime': color === 'lime' },
					{ 'text-tag-green': color === 'green' },
					{ 'text-tag-violet': color === 'violet' },
					{ 'text-tag-gold': color === 'gold' },
					{ 'text-tag-black': color === 'black' },
					{ 'text-tag-gray': color === 'gray' },
					{ 'text-tag-brown': color === 'brown' },
					{ 'text-tag-turquoise': color === 'turquoise' },
					{ 'text-tag-orange': color === 'orange' },
					{ 'text-tag-yellow': color === 'yellow' },
					{ 'text-tag-emerald': color === 'emerald' },
					{ 'text-tag-sky': color === 'sky' },
					{ 'text-tag-red': color === 'red' },
					{ 'text-tag-burgundy': color === 'burgundy' },
					{ 'text-tag-azure': color === 'azure' },
					{ 'text-tag-pink': color === 'pink' },
					{ 'text-tag-lime': tag === 'discuss' }
				)}
			>
				#
			</span>
			{tag}
		</Link>
	)
}
