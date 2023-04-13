'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'

export default function GithubAuthButton() {
	return (
		<button
			onClick={() => signIn('github')}
			className='relative flex w-full items-center justify-center whitespace-nowrap rounded-md bg-[#24292e] px-5 py-3 text-white transition-colors hover:bg-dark'
		>
			<Image
				src='/icons/github.svg'
				width={24}
				height={24}
				alt='github-logo'
				className='mr-2'
			/>
			Sign up with Github
		</button>
	)
}
