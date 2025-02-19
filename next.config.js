const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  webpack(config, options) {
    return config;
  },
});
