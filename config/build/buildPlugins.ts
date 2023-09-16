import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { IBuildOptions } from './types/config.interface';

export function buildPlugins({ paths }: IBuildOptions): webpack.WebpackPluginInstance[] {
  return [
      new HtmlWebpackPlugin({
        template: paths.html
      }),
      new webpack.ProgressPlugin(),
  ]
}