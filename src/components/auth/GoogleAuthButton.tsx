'use client'

import { useSignIn } from '@clerk/nextjs'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

export default function GoogleAuthButton() {
	const { signIn } = useSignIn()
	const searchParams = useSearchParams()
	const signInWithGoogle = () => {
		signIn!.authenticateWithRedirect({
			strategy: 'oauth_google',
			redirectUrl: '/sso-callback',
			redirectUrlComplete: searchParams.get('redirect_url') ?? '/',
		})
	}
	return (
		<button
			onClick={signInWithGoogle}
			className='relative w-full whitespace-nowrap rounded-md bg-blue/95 px-5 py-3 text-white transition-colors hover:bg-blue'
		>
			<div className='absolute left-1 top-1 flex aspect-square h-5/6 items-center justify-center rounded bg-white'>
				<Image
					src='/icons/google.svg'
					width={24}
					height={24}
					alt='google-logo'
				/>
			</div>
			Sign up with Google
		</button>
	)
}
