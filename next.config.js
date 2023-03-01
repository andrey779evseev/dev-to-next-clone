/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		serverComponentsExternalPackages: ['@prisma/client', 'openid-client'],
	},
}

module.exports = nextConfig
