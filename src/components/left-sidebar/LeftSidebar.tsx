import MyTags from '@/components/left-sidebar/MyTags'
import NavbarLinks from '@/components/left-sidebar/NavbarLinks'
import SidebarSocials from '@/components/left-sidebar/SidebarSocials'

export default function LeftSidebar() {
	return (
		<aside>
			<NavbarLinks />
			<SidebarSocials />
			<MyTags />
		</aside>
	)
}
