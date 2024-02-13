/** @type {import('next').NextConfig} */
const nextConfig = {
  // disabling react strict mode to avoid findDOMNode warning in dev - this warning will be fixed with typescript version
  reactStrictMode: false
}

module.exports = nextConfig
