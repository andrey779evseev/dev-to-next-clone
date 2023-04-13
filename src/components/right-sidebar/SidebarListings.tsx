import Link from 'next/link'

export default function SidebarListings() {
	return (
		<div className='card-gray'>
			<div className='flex items-center justify-between border-b border-gray-100 px-4 py-3'>
				<span className='text-xl font-bold text-base-90'>Listings</span>
				<Link href='/listings' className='text-sm text-blue'>
					See all
				</Link>
			</div>
			{new Array(5).fill(null).map((_, i) => (
				<div
					key={i}
					className='group cursor-pointer border-b border-gray-100 p-4 transition-colors hover:bg-white'
				>
					<div className='text-base text-gray-700 group-hover:text-blue-darker'>
						Call for contributors
					</div>
					<div className='mt-1 text-sm text-base-60'>collabs</div>
				</div>
			))}
			<div className='w-full cursor-pointer p-3 text-center text-sm font-medium text-gray-700 hover:text-blue-darker'>
				Create a Listing
			</div>
		</div>
	)
}
