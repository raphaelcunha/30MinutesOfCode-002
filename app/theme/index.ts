import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles'
import components from './components'
import palette from './palette'
import shadows from './shadows'
import typography from './typography'

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
    purple: {
      primary: string
      secondary: string
      hover: string
    }
    lilac: {
      primary: string
      secondary: string
    }
    green: {
      primary: string
      secondary: string
    }
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
    purple?: {
      primary: string
      secondary: string
      hover: string
    }
    lilac?: {
      primary: string
      secondary: string
    }
    green?: {
      primary: string
      secondary: string
    }
  }
}

const theme: Theme = createTheme({
  palette,
  typography,
  components,
  shadows,
})

export default responsiveFontSizes(theme)
