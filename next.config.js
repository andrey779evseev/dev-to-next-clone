/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
				pathname: '/practicaldev/image/fetch/**',
			},
			{
				protocol: 'https',
				hostname: 'images.clerk.dev',
				port: '',
				pathname: '/**',
			},
		],
	},
}

module.exports = nextConfig
