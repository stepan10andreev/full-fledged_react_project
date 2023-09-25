import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IBuildOptions } from '../types/config.interface'

export function buildCSSLoader(options: IBuildOptions) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) =>
              Boolean(resourcePath.includes('.module.')),
            localIdentName: options.isDev
              ? '[name]__[local]--[hash:base64:5]'
              : '[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  }
}
