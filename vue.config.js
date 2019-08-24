const WorkerPlugin = require('worker-plugin');
// vue.config.js
module.exports = {
    configureWebpack: {
      plugins: [
        new WorkerPlugin()
      ]
    }
  }