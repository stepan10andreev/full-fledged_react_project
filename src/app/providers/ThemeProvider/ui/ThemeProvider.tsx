import { FC, PropsWithChildren, useMemo, useState } from 'react'
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext'

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface IThemeProviderProps extends PropsWithChildren {
  initialTheme?: Theme
}

const ThemeProvider: FC<IThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const themeProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={themeProps}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider
