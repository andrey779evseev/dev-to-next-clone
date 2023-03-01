import GithubAuthButton from '@/components/common/auth/GithubAuthButton'
import GoogleAuthButton from '@/components/common/auth/GoogleAuthButton'
import Link from 'next/link'

export default function RegisterPage() {
	return (
		<div className='flex items-center justify-center p-4'>
			<div className='mx-auto flex w-[640px] flex-col items-center gap-2 rounded-md bg-white p-12 text-dark shadow-border shadow-dark/10'>
				<h1 className='text-3xl font-bold'>Welcome to DEV Community</h1>
				<span className='mb-6 text-base text-gray-700'>
					DEV Community is a community of 1M+ amazing developers
				</span>
				<GoogleAuthButton />
				<GithubAuthButton />
				<div className='mt-4 relative w-full text-center'>
					<div className='bg-gray-300 absolute w-full top-1/2 h-[2px]'/>
          <span className='relative text-sm text-gray-700 max-w-[75%] bg-white px-2'>
            Already have an account?
            <Link href='/login' className='text-blue'> Log in.</Link>
          </span>
				</div>
			</div>
		</div>
	)
}
