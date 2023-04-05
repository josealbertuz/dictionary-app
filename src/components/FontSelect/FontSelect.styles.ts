import { styled } from 'stitches.config'
import * as RadixSelect from '@radix-ui/react-select'
import { buttonReset } from '@styles/global'

export const FontSelectRoot = styled('div', {
  width: '120px',
  height: '24px',

  fullWidth: {
    true: {
      width: '100%',
    },
  },
})

export const FontSelectTrigger = styled(RadixSelect.Trigger, {
  ...buttonReset,
  outline: 'none',
  display: 'inline-flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '$body-m',
  lineHeight: '$body-m',
  fontWeight: '$bold',
  width: '100%',
  color: 'black'
})

export const FontSelectIcon = styled(RadixSelect.Icon, {
  display: 'flex',
  alignItems: 'center',
})

export const FontSelectContent = styled(RadixSelect.Content, {
  padding: '$6',
  borderRadius: '$4',
  backgroundColor: '$background',
  width: '183px',
  maxHeight: 'var(--radix-select-content-available-height)',
  boxShadow: '$elevation-100',
})

export const FontSelectViewport = styled(RadixSelect.Viewport, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const FontSelectItem = styled(RadixSelect.Item, {
  fontSize: '$body-m',
  lineHeight: '$body-m',
  fontWeight: '$bold',
  outline: 'none',

  '&:not(&[data-state="checked"])': {
    '&[data-highlighted]': {
      outline: 'none',
      color: '$accent',
    },
  },

  '&[data-state="checked"]': {
    color: '$accent',
  },
})

export const FontSelectItemText= styled(RadixSelect.ItemText, {
  fontFamily: 'inherit'
})
