import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from './types/config.interface';

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {

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
    TSLoader,
    CSSLoader
  ]
}