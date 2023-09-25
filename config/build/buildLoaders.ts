import webpack from 'webpack'
import { IBuildOptions } from './types/config.interface'
import { buildCSSLoader } from './loaders/buildCSSLoader'

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/i,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const CSSLoader = buildCSSLoader(options)

  const TSLoader = {
    test: /\.[tj]sx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [babelLoader, TSLoader, CSSLoader, svgLoader, fileLoader]
}
