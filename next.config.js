const minify = { 
  swcMinify: true,
};

const final = {
  minify,

  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'url-loader',
      },
    });
    return config;
  },
};

module.exports = final;