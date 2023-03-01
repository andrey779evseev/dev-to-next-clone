'use client'

import Image from 'next/image'
import {signIn} from 'next-auth/react'

export default function GoogleAuthButton() {
	return (
		<button
			onClick={() => signIn('google')}
			className='relative w-full whitespace-nowrap rounded-md bg-blue/95 px-5 py-3 text-white transition-colors hover:bg-blue'
		>
			<div className='absolute top-1 left-1 flex aspect-square h-5/6 items-center justify-center rounded bg-white'>
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
