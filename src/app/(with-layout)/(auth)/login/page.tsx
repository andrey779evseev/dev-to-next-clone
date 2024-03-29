import Link from 'next/link'
import LoginForm from '@/components/auth/LoginForm'
import OAuth from '@/components/auth/OAuth'
import Button from '@/components/common/Button'

export default function LoginPage() {
	return (
		<div className='flex items-center justify-center p-4'>
			<div className='card-white mx-auto w-[640px] p-12 text-dark'>
				<OAuth />
				<div className='relative my-4 w-full text-center'>
					<div className='absolute top-1/2 h-[2px] w-full bg-gray-300' />
					<span className='relative max-w-[75%] bg-white px-2 text-sm text-gray-700'>
						Have a password? Continue with your email address
					</span>
				</div>
				<LoginForm />
				<Button size='large' type='primary' width='full'>
					Continue
				</Button>
				<div className='mt-7 text-center'>
					<Link href='#' className='cursor-pointer text-sm text-blue'>
						I forgot my password
					</Link>
				</div>
			</div>
		</div>
	)
}
