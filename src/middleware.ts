import { authMiddleware } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export default authMiddleware({
	afterAuth(auth, req) {
		if (!auth.userId && !auth.isPublicRoute) {
			const signInUrl = new URL('/login', req.url)
			signInUrl.searchParams.set('redirect_url', req.url)
			return NextResponse.redirect(signInUrl)
		}
		if (auth.isPublicRoute && !!auth.userId) {
			return NextResponse.redirect(
				new URL(req.url).searchParams.get('redirect_url') ??
					new URL('/', req.url)
			)
		}
	},
	publicRoutes: ['/login', '/register', '/sso-callback'],
})

export const config = {
	matcher: '/((?!api|_next|.*\\..*).*)',
}
