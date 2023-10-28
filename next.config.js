/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,  
trailingSlash: true,
   //productionBrowserSourceMaps: true,
  experimental: {
    appDir: true,
  },
images: {
    domains: [process.env.NEXT_PUBLIC_ALLOWED_IMAGE_DOMAINS],
  },
webpack: (config) => {
    config.experiments = config.experiments || {}
    config.experiments.topLevelAwait = true
    return config
  },
}

module.exports = nextConfig
