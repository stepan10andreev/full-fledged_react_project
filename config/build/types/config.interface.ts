type TBuildMode = 'production' | 'development'

export interface IBuildEnv {
  mode: TBuildMode
  port: number
}

export interface IBuildPaths {
  entry: string
  output: string
  html: string
  src: string
}
export interface IBuildOptions {
  mode: TBuildMode
  paths: IBuildPaths
  isDev: boolean
  port: number
}