module.exports = {
  transpileDependencies: ['vuex-module-decorators'],
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    })
  }
};
