import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='bg-gray-200 p-12 text-center text-sm text-gray-700'>
			<div className='mb-2'>
				<Link className='text-blue' href='/'>
					DEV Community
				</Link>{' '}
				— A constructive and inclusive social network for software developers.
				With you every step of your journey.
			</div>
			<div>
				<p>
					<span>Built on </span>
					<Link className='text-blue' href='https://nextjs.org/'>
						Next.js
					</Link>
					<span> — the open source software that powers </span>
					<Link className='text-blue' href='/'>
						DEV
					</Link>
					<span> and other inclusive communities.</span>
				</p>
				<p>
					<span>Made with love and </span>
					<Link className='text-blue' href='https://reactjs.org/'>
						React.js
					</Link>
					.
				</p>
				<p className='mt-4 text-xs'>DEV Community © 2023</p>
			</div>
		</footer>
	)
}
