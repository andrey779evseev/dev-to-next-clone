import NavbarLink from './NavbarLink'

const links = {
	main: [
		{ image: '/icons/sidebar/home.svg', name: 'Home' },
		{ image: '/icons/sidebar/listings.svg', name: 'Listings' },
		{ image: '/icons/sidebar/podcasts.svg', name: 'Podcasts' },
		{ image: '/icons/sidebar/videos.svg', name: 'Videos' },
		{ image: '/icons/sidebar/tags.svg', name: 'Tags' },
		{ image: '/icons/sidebar/faq.svg', name: 'FAQ' },
		{ image: '/icons/sidebar/shop.svg', name: 'Forem Shop' },
		{ image: '/icons/sidebar/sponsors.svg', name: 'Sponsors' },
		{ image: '/icons/sidebar/about.svg', name: 'About' },
		{ image: '/icons/sidebar/contact.svg', name: 'Contact' },
		{ image: '/icons/sidebar/guides.svg', name: 'Guides' },
		{ image: '/icons/sidebar/software.svg', name: 'Software comparisons' },
	],
	other: [
		{ image: '/icons/sidebar/code-of-conduct.svg', name: 'Code of conduct' },
		{ image: '/icons/sidebar/privacy-policy.svg', name: 'Privacy policy' },
		{ image: '/icons/sidebar/terms-of-use.svg', name: 'Terms of use' },
	],
}

export default function NavbarLinks() {
	return (
		<>
			<nav className='my-4'>
				<ul className='list-none'>
					{links.main.map((link) => (
						<NavbarLink link={link} key={link.name} />
					))}
				</ul>
			</nav>
			<nav className='mb-4'>
				<h2 className='py-2 pl-3 font-bold text-base-90'>Other</h2>
				<ul className='list-none'>
					{links.other.map((link) => (
						<NavbarLink link={link} key={link.name} />
					))}
				</ul>
			</nav>
		</>
	)
}
