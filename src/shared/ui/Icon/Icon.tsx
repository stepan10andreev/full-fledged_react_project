import { memo, useCallback, useEffect, useState } from 'react'

import iconsPaths, { IconPathProps } from './icon-paths'
import { CustomSize, IIconProps } from './icon.interface'
import { classNames } from 'shared/lib/classNames/classNames'

const Icon: React.FC<IIconProps> = ({
  className = '',
  iconName,
  size = 24,
  width = 0,
  height = 0,
  viewBox = 24,
  color = '#787878',
  fill = 'none',
  rotateDegrees = 0,
  onClick,
}) => {
  const [translatePathY, setTranslatePathY] = useState<number>(0)
  const [translatePathX, setTranslatePathX] = useState<number>(0)

  const IconClassName = classNames('', {}, [className])

  let customSize = {
    minWidth: `${size}px`,
    minHeight: `${size}px`,
    maxWidth: `${size}px`,
    maxHeight: `${size}px`,
  } as CustomSize

  if (width && height) {
    customSize = {
      minWidth: `${width}px`,
      minHeight: `${height}px`,
      maxWidth: `${width}px`,
      maxHeight: `${height}px`,
    } as CustomSize
  }

  const translatePathById = useCallback(
    (id: string) => {
      const currentPath = document.getElementById(
        id
      ) as unknown as SVGGraphicsElement
      setTranslatePathY(
        (viewBox - currentPath.getBBox().height) / 2 - currentPath.getBBox().y
      )
      setTranslatePathX(
        (viewBox - currentPath.getBBox().width) / 2 - currentPath.getBBox().x
      )
    },
    [viewBox]
  )

  useEffect(() => {
    const svg = iconsPaths[iconName].props as IconPathProps
    if (svg?.children) {
      svg.children.forEach((elem: { props: { id: string } }) => {
        translatePathById(elem.props.id)
      })
    } else {
      translatePathById(svg.id)
    }
  }, [iconName, translatePathById, viewBox])

  return (
    <svg
      onClick={onClick}
      xmlns='http://www.w3.org/2000/svg'
      className={IconClassName}
      style={customSize}
      color={color}
      viewBox={`${-translatePathX} ${-translatePathY} ${viewBox} ${viewBox}`}
      fill={fill}
      transform={`rotate(${rotateDegrees})`}
    >
      {iconsPaths[iconName]}
    </svg>
  )
}

export default memo(Icon)
