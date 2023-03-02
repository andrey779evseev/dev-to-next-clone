import GithubAuthButton from './GithubAuthButton';
import GoogleAuthButton from './GoogleAuthButton';

export default function OAuth() {
	return (
		<div className='flex flex-col items-center gap-2'>
			<h1 className='text-3xl font-bold'>Welcome to DEV Community</h1>
			<span className='mb-6 text-base text-gray-700'>
				DEV Community is a community of 1M+ amazing developers
			</span>
			<GoogleAuthButton />
			<GithubAuthButton />
		</div>
	)
}
