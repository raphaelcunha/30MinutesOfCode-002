import { Palette } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'

const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  fontFamily: 'Crimson Text',
  h1: {
    fontWeight: 600,
    lineHeight: 1,
    fontSize: '3rem', // 48px
  },
  h2: {
    fontWeight: 600,
    lineHeight: 1,
    fontSize: '2.25rem', // 36px
  },
  h3: {
    fontWeight: 600,
    lineHeight: 1.2,
    fontSize: '1.375rem', // 22px
  },
  h4: {
    fontWeight: 500,
    lineHeight: 1,
    fontSize: '1.25rem', // 20px
  },
  h5: {
    fontWeight: 500,
    lineHeight: 1,
    fontSize: '1rem', // 16px
  },
  h6: {
    fontWeight: 500,
    lineHeight: 1,
    fontSize: '0.875rem', // 14px
  },
  body1: {
    fontFamily: 'Area Normal',
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: '0.875rem', // 14px
  },
  body2: {
    fontFamily: 'Area Normal',
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: '0.75rem', // 12px
  },
  subtitle1: {
    fontFamily: 'Area Normal',
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: '1rem', // 16px
  },
  subtitle2: {
    fontFamily: 'Area Normal',
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: '0.875rem', // 14px
  },
  caption: {
    fontFamily: 'Area Normal',
    fontWeight: 500,
    lineHeigh: 1.5,
    fontSize: '0.75rem', // 12px
  },
  overline: {
    fontFamily: 'Area Normal',
    fontWeight: 500,
    lineHeigh: 1.5,
    textDecoration: 'none',
    fontSize: '0.625rem', // 10px
  },
}

export default typography
