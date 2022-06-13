/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const whitIMages = require('next-images')

module.exports = whitIMages({
  esModule: true,
})
