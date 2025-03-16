import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/metropolis',
        destination: 'https://validation.metropolis.io/84jnhk371l',
        permanent: true,
        basePath: false,
      },

    ]
  },
};

export default nextConfig;
