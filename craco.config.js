const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1E120D', '@link-color': '#FFFF00' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};