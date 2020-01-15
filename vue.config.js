module.exports = {
    lintOnSave: true,
    runtimeCompiler: true,
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-tone/'
    : '/'
  };