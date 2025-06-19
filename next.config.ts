import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  transpilePackages: [
    '@radix-ui/react-dialog',
    '@radix-ui/react-accordion',
  ],
  images: {
    domains: ['nigerdeltastartup.firebasestorage.app'],
  },
};

export default nextConfig;
