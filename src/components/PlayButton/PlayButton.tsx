import React, { ComponentProps } from 'react'
import { PlayButtonRoot } from './PlayButton.styles'
import { Icon } from '@components/Icon'

type PlayButtonProps = ComponentProps<typeof PlayButtonRoot>

export const PlayButton = (props: PlayButtonProps) => {
  return (
    <PlayButtonRoot {...props}>
        <Icon color="primary-100" name="play" />
    </PlayButtonRoot>
  )
}

PlayButton.displayName = 'PlayButton'
