/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ❌ Ignora TODOS los errores de ESLint en build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ❌ Ignora TODOS los errores de TypeScript en build
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
