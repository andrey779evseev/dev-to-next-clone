import type { ShortUser } from '@/types/ShortUser'
import { User } from '@clerk/nextjs/server'

export function toShortUser(user: User): ShortUser {
	return {
		id: user.id,
		photo: user.profileImageUrl,
	}
}
