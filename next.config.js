/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["innovationbrindes.com.br"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "innovationbrindes.com.br",
				port: "",
				pathname: "/images/**",
			},
		],
	},
}

module.exports = nextConfig
