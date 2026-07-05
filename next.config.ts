import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  ...(isProd && { output: 'export' }),
  basePath: isProd ? '/Portfolio' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/Portfolio' : '',
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react'],
  },
};

export default nextConfig;
