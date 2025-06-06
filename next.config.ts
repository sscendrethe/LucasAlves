/** @type {import('next').NextConfig} */
import path from 'path'
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, '.src/styles')],
    prependData: `@import"./src/styles/index.scss";`,
  },
}

export default nextConfig
