import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from './types/config.interface';

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
  const babelLoader =  {
    test: /\.(js|jsx|tsx)$/i,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        "plugins": [
          ["i18next-extract", {
            locales: ['ru', 'en'],
            keyAsDefaultValue: true
          }],
        ]
      }
    }
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

  const CSSLoader =  {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
            localIdentName: options.isDev ? "[name]__[local]--[hash:base64:5]" : "[hash:base64:5]",
          },  
        },
      },
      "sass-loader",
    ]
  }

  const TSLoader = {
    test: /\.[tj]sx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  
  return [
    babelLoader,
    TSLoader,
    CSSLoader,
    svgLoader,
    fileLoader
  ]
}