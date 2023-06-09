import NavbarLink from './NavbarLink'

const links = {
	main: [
		{ image: '/icons/sidebar/home.svg', name: 'Home', link: '' },
		{
			image: '/icons/sidebar/readinglist.svg',
			name: 'Reading List',
			link: 'readinglist',
			notifications: 8,
		},
		{
			image: '/icons/sidebar/listings.svg',
			name: 'Listings',
			link: 'listings',
		},
		{ image: '/icons/sidebar/podcasts.svg', name: 'Podcasts', link: 'pod' },
		{ image: '/icons/sidebar/videos.svg', name: 'Videos', link: 'videos' },
		{ image: '/icons/sidebar/tags.svg', name: 'Tags', link: 'tags' },
		{ image: '/icons/sidebar/faq.svg', name: 'FAQ', link: 'faq' },
		{ image: '/icons/sidebar/shop.svg', name: 'Forem Shop', link: 'forem' },
		{
			image: '/icons/sidebar/sponsors.svg',
			name: 'Sponsors',
			link: 'sponsorship',
		},
		{ image: '/icons/sidebar/about.svg', name: 'About', link: 'about' },
		{ image: '/icons/sidebar/contact.svg', name: 'Contact', link: 'contact' },
		{ image: '/icons/sidebar/guides.svg', name: 'Guides', link: 'guides' },
		{
			image: '/icons/sidebar/software.svg',
			name: 'Software comparisons',
			link: 'software-comparisons',
		},
	],
	other: [
		{
			image: '/icons/sidebar/code-of-conduct.svg',
			name: 'Code of conduct',
			link: 'code-of-conduct',
		},
		{
			image: '/icons/sidebar/privacy-policy.svg',
			name: 'Privacy policy',
			link: 'privacy',
		},
		{
			image: '/icons/sidebar/terms-of-use.svg',
			name: 'Terms of use',
			link: 'terms',
		},
	],
}

export default function NavbarLinks() {
	return (
		<>
			<nav className='mb-4'>
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
