import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  transpilePackages: ['@radix-ui/react-dialog', '@radix-ui/react-accordion'],
  images: {
    domains: ['nigerdeltastartup.firebasestorage.app'],
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false })

