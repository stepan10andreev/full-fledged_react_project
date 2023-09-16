import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IBuildEnv, IBuildPaths } from './config/build/types/config.interface';



export default (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }
  
  const mode = env.mode || 'development';
  const isDev = mode === 'development'
  const PORT = env.port || 3000;
  
  const config: webpack.Configuration = buildWebpackConfig({
    mode: mode,
    paths: paths,
    isDev,
    port: PORT
  })

  return config
}