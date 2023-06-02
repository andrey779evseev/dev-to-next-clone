import Link from 'next/link'
import FacebookIcon from '@/components/common/icons/socials/FacebookIcon'
import GithubIcon from '@/components/common/icons/socials/GithubIcon'
import InstagramIcon from '@/components/common/icons/socials/InstagramIcon'
import TwitchIcon from '@/components/common/icons/socials/TwitchIcon'
import TwitterIcon from '@/components/common/icons/socials/TwitterIcon'

const socials = [
	{
		icon: <TwitterIcon />,
		link: 'https://twitter.com/thepracticaldev',
	},
	{
		icon: <FacebookIcon />,
		link: 'https://facebook.com/thepracticaldev',
	},
	{
		icon: <GithubIcon />,
		link: 'https://github.com/forem',
	},
	{
		icon: <InstagramIcon />,
		link: 'https://instagram.com/thepracticaldev',
	},
	{
		icon: <TwitchIcon />,
		link: 'https://twitch.com/thepracticaldev',
	},
]

export default function SidebarSocials() {
	return (
		<div className='mb-4 flex'>
			{socials.map((social, i) => (
				<Link
					href={social.link}
					className='ghost-blue-btn mx-1 h-10 w-10 p-2 hover:underline'
					key={i}
				>
					{social.icon}
				</Link>
			))}
		</div>
	)
}
