import Image from 'next/image'
import Link from 'next/link'
import If from '@/components/common/If'

type PropsType = {
	link: { name: string; image: string; link: string; notifications?: number }
}

export default function NavBarLink(props: PropsType) {
	const { link } = props
	return (
		<Link
			href={`/${link.link}`}
			prefetch={false}
			className='ghost-blue-btn flex items-center gap-2 p-2 hover:underline'
			key={link.name}
		>
			<Image src={link.image} width='24' height='24' alt={link.name} />
			<span>{link.name}</span>
			<If condition={link.notifications !== undefined}>
				<span className='rounded-md bg-gray-300 p-1 text-sm text-gray-700'>
					{link.notifications}
				</span>
			</If>
		</Link>
	)
}
