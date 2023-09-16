type TBuildMode = 'production' | 'development'

export interface IBuildPaths {
  entry: string
  output: string
  html: string
}
export interface IBuildOptions {
  mode: TBuildMode
  paths: IBuildPaths
  isDev: boolean
}