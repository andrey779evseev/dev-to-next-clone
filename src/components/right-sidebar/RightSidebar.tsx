import SidebarListings from '@/components/right-sidebar/SidebarListings'
import SidebarTag from '@/components/right-sidebar/SidebarTag'

export default function RightSidebar() {
	return (
		<div className='flex flex-col gap-4'>
			<SidebarListings />
			<SidebarTag />
			<div className='px-4'>
				<div className='py-2 text-base text-dark'>
					trending guides/resources
				</div>
				{new Array(10).fill(null).map((_, i) => (
					<div
						className='cursor-pointer p-4 text-base text-gray-600 transition-colors hover:bg-white hover:text-blue-darker'
						key={i}
					>
						21 Github repositories every developer should bookmark(high value
						resources)
					</div>
				))}
			</div>
		</div>
	)
}
