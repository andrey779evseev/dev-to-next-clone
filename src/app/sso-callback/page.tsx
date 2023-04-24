import { AuthenticateWithRedirectCallback } from '@clerk/nextjs/app-beta/client'

export default function SSOCallback() {
	return <AuthenticateWithRedirectCallback />
}
