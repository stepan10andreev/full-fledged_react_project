import { ResolveOptions } from 'webpack';
import { IBuildOptions } from './types/config.interface';

export function buildResolvers(options: IBuildOptions): ResolveOptions {
  return {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}