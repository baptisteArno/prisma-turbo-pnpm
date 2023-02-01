const path = require("path");

module.exports = {
  output: "standalone",
  reactStrictMode: true,
  transpilePackages: ["ui"],
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...config.externals, "@prisma/client"];
    }

    return config;
  },
};
