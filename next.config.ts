import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'github.com' },
    ],
  },
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react'],
  },
};

export default nextConfig;
