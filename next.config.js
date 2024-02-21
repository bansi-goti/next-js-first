const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n,
  reactStrictMode: true,
}



module.exports = nextConfig

module.exports = {
    // Add your Next.js configuration options here
    output: {
      // Set the target to 'static' for static HTML export
      // This will generate static HTML files in the out directory
      // which can be deployed to static hosting services
      target: 'static',
    },
  };