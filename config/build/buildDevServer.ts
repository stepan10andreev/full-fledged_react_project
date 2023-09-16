import type  {Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { IBuildOptions } from './types/config.interface';

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
  return {
   port: options.port,
   open: true,
  }
}