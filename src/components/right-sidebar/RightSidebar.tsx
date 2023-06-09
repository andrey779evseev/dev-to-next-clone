import SidebarTag from '@/components/right-sidebar/SidebarTag'

export default function RightSidebar() {
	return (
		<div className='flex flex-col gap-4'>
			<SidebarTag />
			<SidebarTag />
		</div>
	)
}
