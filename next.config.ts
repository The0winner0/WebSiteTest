/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const nextConfig = {
  // REMOVE the old "domains" configuration
  // images: {
  //   domains: ['i0.wp.com', 'atollsolutions.com'],
  // },

  // ADD the new, more secure "remotePatterns" configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
        port: '',
        pathname: '/**', // Allows any image from i0.wp.com
      },
      {
        protocol: 'https',
        hostname: 'atollsolutions.com',
        port: '',
        pathname: '/**', // Allows any image from atollsolutions.com
      },
    ],
  },
};

export default nextConfig;