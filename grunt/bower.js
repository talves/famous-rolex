// Automagically wire-up installed Bower components into your RequireJS config
module.exports = {
  raget: {
    rjsConfig: '<%= config.app %>/src/requireConfig.js'
  },
  options: {
    exclude: ['adarta', 'famous', 'famous-polyfills', 'requirejs', 'almond']
  }
};
