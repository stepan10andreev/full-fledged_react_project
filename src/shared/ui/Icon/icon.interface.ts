// export interface IIconsProps {
//   width?: number;
//   height?: number;
//   size?: number;
//   color: string;
// }

import { IconNameTypes } from './icon-paths'

export interface IIconProps {
  className?: string
  onClick?: () => void

  iconName: IconNameTypes
  size?: number
  width?: number
  height?: number
  viewBox?: number
  color?: string
  fill?: string
  rotateDegrees?: number
}

export interface CustomSize {
  minWidth: string
  minHeight: string
  maxWidth: string
  maxHeight: string
}
