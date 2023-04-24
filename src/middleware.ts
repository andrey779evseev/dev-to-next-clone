import { getAuth, withClerkMiddleware } from '@clerk/nextjs/server'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Set the paths that don't require the user to be signed in
const publicPaths = ['/login*', '/register*', '/sso-callback*']

const isPublic = (path: string) => {
	return publicPaths.find((x) =>
		path.match(new RegExp(`^${x}$`.replace('*$', '($|/)')))
	)
}

export default withClerkMiddleware((request: NextRequest) => {
	if (isPublic(request.nextUrl.pathname)) {
		return NextResponse.next()
	}
	const { userId } = getAuth(request)

	if (!userId) {
		const signInUrl = new URL('/login', request.url)
		if (request.nextUrl.pathname !== '/')
			signInUrl.searchParams.set('redirect_url', request.url)
		return NextResponse.redirect(signInUrl)
	} else if (isPublic(request.nextUrl.pathname)) {
		return NextResponse.redirect(
			request.nextUrl.searchParams.get('redirect_url') ?? '/'
		)
	}
	return NextResponse.next()
})

export const config = {
	matcher: '/((?!api|_next|.*\\..*).*)',
}
