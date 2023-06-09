'use client'

import { ShortUser } from '@/types/ShortUser'
import { memo, useMemo } from 'react'
import { useClerk } from '@clerk/nextjs'
import Image from 'next/image'
import Menu, { MenuItemType } from '@/components/common/Menu'

type PropsType = {
	user: ShortUser
}

const HeaderMenu = (props: PropsType) => {
	const { user } = props
	const { signOut } = useClerk()

	const menuItems: MenuItemType[] = useMemo(
		() => [
			{
				type: 'user',
				title: 'Malifor',
				description: '@malifor',
				href: '/malifor',
			},
			{ type: 'divider' },
			{
				type: 'link',
				title: 'Dashboard',
				href: '/dashboard',
			},
			{
				type: 'link',
				title: 'Create post',
				href: '/new',
			},
			{
				type: 'link',
				title: 'Reading list',
				href: '/readinglist',
			},
			{
				type: 'link',
				title: 'Settings',
				href: '/settings',
			},
			{ type: 'divider' },
			{
				type: 'button',
				title: 'Sign Out',
				action: () => signOut(),
			},
		],
		[signOut]
	)

	return (
		<Menu
			trigger={
				<Image
					src={user.photo}
					alt='user profile photo'
					width={32}
					height={32}
					className='cursor-pointer rounded-full ring-4 ring-transparent transition-all hover:ring-blue-darker/10'
				/>
			}
			items={menuItems}
			sideOffset={8}
		/>
	)
}

export default memo(HeaderMenu)
