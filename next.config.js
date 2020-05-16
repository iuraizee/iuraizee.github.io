const withSass = require('@zeit/next-sass')

const isProd = process.env.NODE_ENV === 'production';

module.exports = withSass({
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? '/' : '',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  webpack(config) {
    return config;
  }
})