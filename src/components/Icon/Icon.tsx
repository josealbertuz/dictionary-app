import React, { ComponentProps } from 'react'
import { ColorTokens, styled, theme } from 'stitches.config'
import { IconName } from './iconNames'

const color = Object.keys(theme.colors).reduce((acc, cv) => ({
  ...acc,
  [cv]: {
    stroke: `$${cv}`
  }
}), {} as Record<ColorTokens, {stroke: `$${ColorTokens}`}>)

const IconRoot = styled('svg', {
  variants: {
    color
  },
  defaultVariants: {
    color: 'primary-400'
  }
})

export type IconProps = ComponentProps<typeof IconRoot> & {
  name: IconName
  width?: string
  height?: string
}

export const Icon = ({name, color, height = "20", width = "20", ...props}: IconProps) => {
  
  return (
    <IconRoot color={color} css={{width, height}}  {...props} role="presentation">
      <use href={`/icon-sprite.svg#${name}`} />
    </IconRoot>
  )
}
