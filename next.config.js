/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  experimental: {
    optimizeCss: true,
  },

  // Minimize bundle size
  webpack: (config, { dev, isServer }) => {
    // Add performance optimizations for production
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all",
            },
            projects: {
              test: /[\\/]constants[\\/]projects-data/,
              name: "projects-data",
              chunks: "all",
            },
          },
        },
      };
    }

    return config;
  },

  // Image optimization
  images: {
    domains: [],
    formats: ["image/webp", "image/avif"],
  },

  // Sass options
  sassOptions: {
    includePaths: ["./styles"],
  },
};

module.exports = nextConfig;
