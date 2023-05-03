/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		serverComponentsExternalPackages: ['@prisma/client', 'openid-client'],
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
		],
	},
	// images: {
	// 	remotePatterns: [
	// 		{
	// 			protocol: 'https',
	// 			hostname: 'res.cloudinary.com',
	// 			port: '',
	// 			pathname: '/**',
	// 		},
	// 	],
	// },
}

module.exports = nextConfig
