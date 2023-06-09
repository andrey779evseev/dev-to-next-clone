import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/common/Button'
import CommentIcon from '@/components/common/icons/CommentIcon'
import ExternalLinkIcon from '@/components/common/icons/ExternalLinkIcon'
import GithubIcon from '@/components/common/icons/socials/GithubIcon'
import PostCard from '@/components/shared/PostCard'

type PropsType = {
	params: {
		authorId: string
	}
}

export default function UserProfilePage(props: PropsType) {
	const { params } = props
	return (
		<div className='relative w-full'>
			<div className='absolute inset-x-0 h-32 bg-black' />
			<div className='mx-auto max-w-[1024px] px-4 pb-4 pt-16'>
				<header className='card-white relative z-elevate mb-4 mt-2 !overflow-visible'>
					<div className='relative -mt-14 mb-3 flex items-end justify-center px-6'>
						<Image
							src='https://res.cloudinary.com/practicaldev/image/fetch/s--dK6qV7GX--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/676600/0cbfb9af-6981-4651-921e-3c1cb8842c33.png'
							alt='user-avatar'
							width={112}
							height={112}
							className='rounded-full ring-8 ring-black'
						/>
						<div className='absolute inset-x-0 -bottom-2 flex justify-end pr-6'>
							<Link href='/settings'>
								<Button size='big' type='primary' width='fit'>
									Edit profile
								</Button>
							</Link>
						</div>
					</div>
					<div className='flex flex-col items-center p-6'>
						<h1 className='mb-2 text-3xl font-extrabold text-base-100'>
							Malifor
						</h1>
						<p className='mb-4 text-lg text-base-90'>404 bio not found</p>
						<div className='mb-2 flex items-center justify-center text-sm text-base-60'>
							<span className='flex items-center px-3 py-1'>
								<Image
									src='/icons/cake.svg'
									alt='cake'
									width={24}
									height={24}
									className='mr-2'
								/>
								<span>Joined on Jul 29, 2021</span>
							</span>
							<Link
								href='https://malifor.vercel.app'
								className='flex items-center px-3 py-1 transition-colors hover:text-blue-darker'
							>
								<ExternalLinkIcon />
								<span>https://malifor.vercel.app</span>
							</Link>
							<Link
								href='https://github.com/andrey779evseev'
								className='p-1 transition-colors hover:text-blue-darker'
							>
								<GithubIcon />
							</Link>
						</div>
					</div>
				</header>
				<div className='grid grid-cols-[1fr_2fr] gap-4'>
					<div className='flex flex-col gap-4'>
						<div className='card-white'>
							<header className='border-b border-gray-100 px-4 py-3 text-base font-bold text-base-90'>
								Currently learning
							</header>
							<div className='p-4 text-gray-700'>.net, c#, js</div>
						</div>
						<div className='card-white'>
							<header className='border-b border-gray-100 px-4 py-3 text-base font-bold text-base-90'>
								Skills/Languages
							</header>
							<div className='p-4 text-gray-700'>Js</div>
						</div>
						<div className='card-white p-4'>
							<div className='mb-4 flex items-center text-base text-base-50'>
								<Image
									src='/icons/profile/article.svg'
									alt='article'
									width={24}
									height={24}
								/>
								<span className='ml-3 text-gray-700'>0 posts published</span>
							</div>
							<div className='mb-4 flex items-center text-base text-base-50'>
								<CommentIcon />
								<span className='ml-3 text-gray-700'>0 comments written</span>
							</div>
							<div className='flex items-center text-base text-base-50'>
								<Image
									src='/icons/profile/hashtag.svg'
									alt='hashtag'
									width={24}
									height={24}
								/>
								<span className='ml-3 text-gray-700'>10 tags followed</span>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<PostCard isProfile />
					</div>
				</div>
			</div>
		</div>
	)
}
