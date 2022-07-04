// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    domains: ['a0.muscache.com'],
  },
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components', 'hooks', 'scripts'],
  },
}

module.exports = nextConfig
