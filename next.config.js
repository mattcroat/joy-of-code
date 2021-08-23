module.exports = {
  experimental: { esmExternals: true },
  webpack: (config, { dev, isServer }) => {
    // replace React with Preact in production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
}
