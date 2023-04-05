import React, { ComponentProps } from 'react'
import * as RadixSelect from '@radix-ui/react-select'
import { Icon } from '@components/Icon'
import { FontSelectContent, FontSelectItem, FontSelectItemText, FontSelectRoot, FontSelectTrigger, FontSelectViewport } from './FontSelect.styles'
import { Text } from '@components/Text'
import { FontTokens } from 'stitches.config'

export type FontSelectItem = { label: string; value: FontTokens }

export type FontSelectProps = ComponentProps<typeof RadixSelect.Root> & {
  items: FontSelectItem[]
}

export const FontSelect = ({ items, ...props }: FontSelectProps) => {
  return (
    <FontSelectRoot>
      <RadixSelect.Root {...props}>
        <FontSelectTrigger>
          <RadixSelect.Value />
          <RadixSelect.Icon>
            <Icon name="icon-arrow-down" size="3" />
          </RadixSelect.Icon>
        </FontSelectTrigger>
        <RadixSelect.Portal>
          <FontSelectContent position="popper" sideOffset={10} align="end">
            <FontSelectViewport>
              {items.map(({ label, value }) => (
                <FontSelectItem value={value} key={`select-item-${label}`}>
                  <FontSelectItemText asChild>
                    <Text size="body-m" weight="bold" font={value} css={{color: 'inherit'}}>{label}</Text>
                  </FontSelectItemText>
                </FontSelectItem>
              ))}
            </FontSelectViewport>
          </FontSelectContent>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </FontSelectRoot>
  )
}

FontSelect.displayName = 'FontSelect'
