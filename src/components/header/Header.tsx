import { currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import LoginButton from '@/components/auth/LoginButton'
import RegisterButton from '@/components/auth/RegisterButton'
import NotificationIcon from '@/components/common/icons/NotificationIcon'
import HeaderMenu from '@/components/header/HeaderMenu'
import { toShortUser } from '@/utils/toShortUser'
import SearchIcon from '../common/icons/SearchIcon'

export default async function Header() {
	const user = await currentUser()

	return (
		<header className='fixed inset-x-0 top-0 z-50 h-14 bg-white shadow-[0_1px_1px_rgb(0_0_0_/_10%)]'>
			<div className='m-auto flex h-14 max-w-[1280px] items-center px-4'>
				<div className='flex flex-1 items-center'>
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
							className='ghost-blue-btn absolute right-0 top-0 h-full border-none px-2 !text-gray-800 outline-none hover:underline'
							type='submit'
							aria-label='Search'
						>
							<SearchIcon className='' />
						</button>
					</form>
				</div>
				{!!user ? (
					<div className='flex items-center gap-2'>
						<Link href='/new' className='primary-outlined-btn px-4 py-2'>
							Create Post
						</Link>
						<Link
							href='/notifications'
							className='ghost-blue-btn mx-1 p-2 hover:underline'
						>
							<NotificationIcon />
						</Link>
						<HeaderMenu user={toShortUser(user!)} />
					</div>
				) : (
					<div className='flex items-center gap-2'>
						<LoginButton />
						<RegisterButton />
					</div>
				)}
			</div>
		</header>
	)
}
