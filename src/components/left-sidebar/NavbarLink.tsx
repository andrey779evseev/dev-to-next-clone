import Image from 'next/image'
import Link from 'next/link'

type PropsType = {
	link: { name: string; image: string; link: string }
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
		</Link>
	)
}
