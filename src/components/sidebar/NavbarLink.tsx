import Image from 'next/image'

type PropsType = {
	link: { name: string; image: string }
}

export default function NavBarLink(props: PropsType) {
	const { link } = props
	return (
		<li
			className='flex items-center gap-2 p-2 link'
			key={link.name}
		>
			<Image src={link.image} width='24' height='24' alt={link.name} />
			<span>{link.name}</span>
		</li>
	)
}
