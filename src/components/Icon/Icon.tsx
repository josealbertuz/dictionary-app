import React, { ComponentProps } from 'react'
import { ColorTokens, SizesTokens, styled, theme } from 'stitches.config'
import { IconName } from './iconNames'

const color = Object.keys(theme.colors).reduce((acc, cv) => ({
  ...acc,
  [cv]: {
    stroke: `$${cv}`
  }
}), {} as Record<ColorTokens, {stroke: `$${ColorTokens}`}>)

const size = Object.keys(theme.sizes).reduce((acc, cv) => ({
  ...acc,
  [cv]: {
    size: `$${cv}`
  }
}), {} as Record<SizesTokens, {size: `$${SizesTokens}`}>)

const IconRoot = styled('svg', {
  variants: {
    color,
    size
  },
  defaultVariants: {
    color: 'primary-400',
    size: '5'
  }
})

export type IconProps = ComponentProps<typeof IconRoot> & {
  name: IconName
}

export const Icon = ({name, ...props}: IconProps) => {
  
  return (
    <IconRoot {...props} role="presentation">
      <use href={`/icon-sprite.svg#${name}`} />
    </IconRoot>
  )
}
