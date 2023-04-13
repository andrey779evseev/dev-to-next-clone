export default function SidebarTag() {
	return (
		<div className='card-gray'>
			<div className='flex items-center justify-between border-b border-gray-100 px-4 py-3'>
				<span className='cursor-pointer text-xl font-bold text-base-90 transition-colors hover:text-blue-darker'>
					#watercooler
				</span>
			</div>
			{new Array(5).fill(null).map((_, i) => (
				<div
					key={i}
					className='group cursor-pointer border-b border-gray-100 p-4 transition-colors hover:bg-white'
				>
					<div className='text-base text-gray-700 group-hover:text-blue-darker'>
						Meme Monday
					</div>
					<div className='mt-1 text-sm text-base-60'>41 comment</div>
				</div>
			))}
		</div>
	)
}
