module.exports = api => {
  api.cache(true)

  const presets = [
    ['@babel/preset-env'],
    '@babel/preset-react',
    '@babel/typescript',
  ]

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ]

  return {
    presets,
    plugins,
  }
}
