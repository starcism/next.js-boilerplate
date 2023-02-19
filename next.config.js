/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['twin.macro'],
  },
  compiler: {
      styledComponents: true,
  },
}

module.exports = nextConfig
