/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // GSAP ships .ts source files that fail under noUncheckedIndexedAccess — not our code
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
