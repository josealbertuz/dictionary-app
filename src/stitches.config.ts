import { createStitches } from '@stitches/react'
import { NextFont } from 'next/dist/compiled/@next/font'

export const { styled, css, getCssText, config, globalCss, theme, keyframes, createTheme } =
  createStitches({
    theme: {
      colors: {
        'primary-100': '#FFFFFF',
        'primary-200': '#F4F4F4',
        'primary-300': '#E9E9E9',
        'primary-400': '#757575',
        'primary-500': '#3A3A3A',
        'primary-600': '#2D2D2D',
        'primary-700': '#1F1F1F',
        'primary-800': '#050505',

        //alias
        'text-primary': '$primary-600',
        'text-secondary': '$primary-400',
        background: '$primary-100',

        //accent
        accent: '#A445ED',

        //semantic
        error: '#FF5252',
      },
      space: {
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '32px',
        8: '40px',
        9: '48px',
        10: '56px',
        11: '64px',
        12: '72px',
        13: '80px',
        14: '88px',
        15: '96px',
      },
      sizes: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '32px',
        8: '40px',
        9: '48px',
        10: '56px',
        11: '64px',
        12: '72px',
        13: '80px',
        14: '88px',
        15: '96px',
      },
      radii: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        round: '50%',
        pill: '9999px',
      },
      fontSizes: {
        'heading-l': '64px',
        'heading-m': '24px',
        'heading-s': '20px',
        'body-m': '18px',
        'body-s': '14px',
      },
      lineHeights: {
        'heading-l': '77px',
        'heading-m': '29px',
        'heading-s': '24px',
        'body-m': '24px',
        'body-s': '17px',
      },
      fontWeights: {
        regular: 400,
        bold: 700,
      },
      fonts: {
        inter: 'var(--inter-font)',
        inconsolata: 'var(--inconsolata-font)',
        lora: 'var(--lora-font)',
      },
      media: {
        dark: '(prefers-color-scheme: dark)',
      },
      shadows: {
        'elevation-100': '0px 5px 30px rgba(0, 0, 0, 0.1)',
      },
    },
    utils: {
      size: (value: string) => ({
        width: value,
        height: value,
      }),
      px: (value: string) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: string) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      mx: (value: string) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: string) => ({
        marginTop: value,
        marginBottom: value,
      }),
    },
  })

export const darkTheme = createTheme({
  colors: {
    'text-primary': '$primary-100',
    background: '$primary-800',
  },
  shadows: {
    'elevation-100': '0px 5px 30px #A445ED',
  },
})

export type FontSizeTokens = keyof typeof theme.fontSizes
export type FontTokens = keyof typeof theme.fonts
export type ColorTokens = keyof typeof theme.colors
export type SizesTokens = keyof typeof theme.sizes

export const generateGlobalStyles = ({ inter, lora, inconsolata }: Record<FontTokens, NextFont>) =>
  globalCss({
    ':root': {
      '--inter-font': `${inter.style.fontFamily}`,
      '--inconsolata-font': `${inconsolata.style.fontFamily}`,
      '--lora-font': `${lora.style.fontFamily}`,
      '-app-font': 'var(--inter-font)',
    },
    '*': {
      boxSizing: 'border-box',
      textDecoration: 'none',
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      fontFamily: 'var(--app-font)',
    },
    '#__next': {
      maxWidth: '737px',
      margin: '0 auto',
    },
  })()
