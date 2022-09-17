/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // webpack: (config, options) => {
  //   if (!options.dev) {
  //     config.devtool = options.isServer ? false : 'your-custom-devtool'
  //   }
  //   return config
  // },
}

module.exports = nextConfig
