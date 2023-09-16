import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {

  const TSLoaders = {
    test: /\.[tj]sx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  
  return [
    TSLoaders,
  ]
}