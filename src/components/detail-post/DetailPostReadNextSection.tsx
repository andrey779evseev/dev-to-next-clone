import Image from 'next/image'

export default function DetailPostReadNextSection() {
	return (
		<section className='card-white mb-4 mt-12 px-16 py-8'>
			<h2 className='text-2xl font-bold text-base-90'>Read next</h2>
			{new Array(4).fill(null).map((_, i) => (
				<div
					className='group mt-6 flex cursor-pointer items-center gap-4'
					key={i}
				>
					<Image
						src='https://res.cloudinary.com/practicaldev/image/fetch/s--G76MYSc3--/c_imagga_scale,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/134122/596103e7-f776-4202-9dcb-e133ce3cb222.png'
						alt={`read more post ${i + 1} author avatar`}
						width={64}
						height={64}
						className='rounded-full'
					/>
					<div className='text-gray-700 transition-colors group-hover:text-blue-darker'>
						<h3 className='text-xl font-bold'>
							Comparing Next.js, Astro, and Remix: Which is the Best?
						</h3>
						<p className='pt-1 text-base opacity-75'>Strapi - Apr 24</p>
					</div>
				</div>
			))}
		</section>
	)
}
