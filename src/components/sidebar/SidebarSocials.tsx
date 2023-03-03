import Link from 'next/link'
import FacebookIcon from '../common/icons/socials/FacebookIcon'
import GithubIcon from '../common/icons/socials/GithubIcon'
import InstagramIcon from '../common/icons/socials/InstagramIcon'
import TwitchIcon from '../common/icons/socials/TwitchIcon'
import TwitterIcon from '../common/icons/socials/TwitterIcon'


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
		<div className='flex mb-4'>
			{socials.map((social, i) => (
				<Link
					href={social.link}
					className='mx-1 h-10 w-10 p-2 link'
					key={i}
				>
					{social.icon}
				</Link>
			))}
		</div>
	)
}
