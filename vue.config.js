const WorkerPlugin = require('worker-plugin');
// vue.config.js
module.exports = {
    configureWebpack: {
      plugins: [
        new WorkerPlugin()
      ]
    },
    publicPath: process.env.NODE_ENV === 'development' ? '/' : '/modern-web-2019',
    outputDir: './docs'
  }