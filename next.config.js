/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'static.tvmaze.com',
    ],
  },
  reactStrictMode: true,
  sassOptions: {
    prependData: `
      @import 'styles/globals/colors';
    `,
  },
};

module.exports = nextConfig;
