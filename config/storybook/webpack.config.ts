import path from 'path'
import { IBuildPaths } from '../build/types/config.interface'
import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import { buildCSSLoader } from '../build/loaders/buildCSSLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: IBuildPaths = {
    entry: '',
    html: '',
    output: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }

  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {
        ...rule,
        exclude: /\.svg$/i,
      }
    }

    return rule
  })

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })

  config.module.rules.push(
    buildCSSLoader({
      mode: 'development',
      paths: paths,
      isDev: true,
      port: 3000,
    })
  )

  config.plugins.push(
    new DefinePlugin({
      _IS_DEV_: true,
    })
  )

  return config
}
