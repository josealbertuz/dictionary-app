import { Icon } from '@components/Icon'
import { styled } from 'stitches.config'

export const SearchInputRoot = styled('div', {
  
})

export const HelperText = styled('div', {
  minHeight: '$6'
})

export const InputWrapper = styled('div', {
  position: 'relative'
})

export const Input = styled('input', {
  borderRadius: '$4',
  backgroundColor: '$inputBackground',
  paddingLeft: '$6',
  paddingRight: 'calc($6 * 2)',
  py: '$5',
  fontSize: '$heading-s',
  fontWeight: '$bold',
  border: 'none',
  color: '$text-primary',
  width: '100%',
  fontFamily: '$inter',

  '&:focus': {
    outlineColor: '$accent',
  },

  '&::placeholder': {
    color: '$primary-400',
  },

  variants: {
    error: {
      true: {
        boxShadow: '$error',
        '&:focus': {
            outline: 'none',
            boxShadow: '$error',
        }
      },
    },
  },
})

export const SearchIcon = styled(Icon, {
  position: 'absolute',
  right: '$6',
  top: '50%',
  transform: 'translateY(-50%)',
})
