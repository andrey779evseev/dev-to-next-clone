import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import SearchIcon from './common/icons/SearchIcon'

export default function Header() {
	return (
		<header className='fixed top-0 left-0 right-0 z-50 h-14 bg-white shadow-[0_1px_1px_rgb(0_0_0_/_10%)]'>
			<div className='m-auto flex h-14 max-w-[1280px] items-center px-4'>
				<div className='flex w-full items-center'>
					<Link href='/'>
						<Image
							src='/logo.svg'
							alt='logo'
							width={50}
							height={40}
							className='mr-4'
							priority
						/>
					</Link>
					<form
						action='/search'
						method='get'
						role='search'
						acceptCharset='UTF-8'
						className='relative h-10 max-w-[420px] flex-1'
					>
						<input
							type='text'
							name='q'
							autoComplete='off'
							aria-label='Search term'
							className='input'
							placeholder='Search...'
						/>
						<button
							className='py-auto group absolute top-0 right-0 h-full cursor-pointer rounded-md border-none px-2 outline-none transition-colors hover:bg-blue/10'
							type='submit'
							aria-label='Search'
						>
							<SearchIcon className='text-dark group-hover:text-blue' />
						</button>
					</form>
				</div>
				<div className='flex items-center gap-2'>
					<Link
						href='/login'
						className='group group cursor-pointer rounded-md border-none px-4 py-2 outline-none transition-colors hover:bg-blue/10'
					>
						<span className='whitespace-nowrap text-gray-700 transition-all group-hover:text-blue group-hover:underline'>
							Log in
						</span>
					</Link>
					<Link
						href='/register'
						className='group group cursor-pointer rounded-md border border-blue px-4 py-2 outline-none transition-colors hover:bg-blue'
					>
						<span className='whitespace-nowrap text-blue transition-all group-hover:text-white group-hover:underline'>
							Create account
						</span>
					</Link>
				</div>
			</div>
		</header>
	)
}
