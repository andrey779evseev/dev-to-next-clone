import LoginForm from '@/components/auth/LoginForm'
import OAuth from '@/components/auth/OAuth'
import Link from 'next/link'

export default function LoginPage() {
	return (
		<div className='flex items-center justify-center p-4'>
			<div className='mx-auto w-[640px] rounded-md bg-white p-12 text-dark shadow-border shadow-dark/10'>
				<OAuth />
				<div className='relative my-4 w-full text-center'>
					<div className='absolute top-1/2 h-[2px] w-full bg-gray-300' />
					<span className='relative max-w-[75%] bg-white px-2 text-sm text-gray-700'>
						Have a password? Continue with your email address
					</span>
				</div>
				<LoginForm />
				<button className='mt-3 w-full rounded-md bg-blue py-3 px-5 text-center font-medium text-white outline-none transition-colors hover:bg-blue-darker'>
					Continue
				</button>
				<div className='mt-7 text-center'>
					<Link href='#' className='text-sm text-blue cursor-pointer'>
						I forgot my password
					</Link>
				</div>
			</div>
		</div>
	)
}
