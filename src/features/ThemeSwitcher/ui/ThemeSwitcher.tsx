import { classNames } from 'shared/lib/classNames/classNames'
import { FC } from 'react'
import { IThemeSwitcherProps } from './themeSwitcher.interface'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/light-theme.svg'
import DarkIcon from 'shared/assets/icons/dark-theme.svg'
import { Button } from 'shared/ui/Button/Button'

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
  const { theme, switchTheme } = useTheme()
  console.log(theme)
  return (
    <Button className={classNames('', {}, [className])} onClick={switchTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}
