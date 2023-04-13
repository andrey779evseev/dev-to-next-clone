import LoginButton from '@/components/auth/LoginButton'
import RegisterButton from '@/components/auth/RegisterButton'
import NavbarLinks from '@/components/left-sidebar/NavbarLinks'
import PopularTags from '@/components/left-sidebar/PopularTags'
import SidebarSocials from '@/components/left-sidebar/SidebarSocials'
import Image from 'next/image'
import Link from 'next/link'

export default function LeftSidebar() {
	return (
		<aside>
			<div className='card-gray p-4'>
				<p className='mb-4 text-xl font-bold text-base-90'>
					DEV Community is a community of 1M+ amazing developers
				</p>
				<p className='mb-4 text-base-70'>
					We&apos;re a place where coders share, stay up-to-date and grow their
					careers.
				</p>
				<div className='flex w-full flex-col items-center gap-1'>
					<RegisterButton full />
					<LoginButton full />
				</div>
			</div>
			<NavbarLinks />
			<SidebarSocials />
			<PopularTags />
			<div className='card-gray p-4'>
				<p className='ml-1 text-sm text-gray-600'>DEV Community</p>
				<div className='p-1 pt-3'>
					<Image
						src='/images/question.webp'
						width='814'
						height='1300'
						alt='question'
						className='mb-5 h-auto w-full'
					/>
					<Link href='/register' className='text-xl text-blue underline'>
						Create An Account on DEV
					</Link>
				</div>
			</div>
		</aside>
	)
}
