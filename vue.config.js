// vue.config.js


 module.exports = {
    publicPath: process.env.NODE_ENV === 'development' ? process.env.BASE_URL : process.env.VUE_APP_BASE_URL,
    outputDir: "docs",
    productionSourceMap: false
  }