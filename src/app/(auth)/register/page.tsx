import OAuth from '@/components/auth/OAuth'
import Link from 'next/link'

export default function RegisterPage() {
	return (
		<div className='flex items-center justify-center p-4'>
			<div className='mx-auto w-[640px] rounded-md bg-white p-12 text-dark shadow-border shadow-dark/10'>
				<OAuth />
				<div className='relative mt-4 w-full text-center'>
					<div className='absolute top-1/2 h-[2px] w-full bg-gray-300' />
					<span className='relative max-w-[75%] bg-white px-2 text-sm text-gray-700'>
						Already have an account?
						<Link href='/login' className='text-blue'>
							{' '}
							Log in.
						</Link>
					</span>
				</div>
			</div>
		</div>
	)
}
