/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost","images.unsplash","cdn.shopify.com"],
  },
  serverRuntimeConfig: {
		PROJECT_ROOT: __dirname,
	},
}

module.exports = nextConfig
