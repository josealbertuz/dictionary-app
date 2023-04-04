import { styled } from 'stitches.config'

export const SwitchInputRoot = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

export const SwitchRoot = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
})

export const Toggle = styled('span', {
  display: 'inline-flex',
  position: 'relative',
  alignItems: 'center',
  borderRadius: '18px',
  backgroundColor: '$primary-400',
  width: '$8',
  height: '$5',
  cursor: 'pointer',
  pointerEvents: 'none',

  '&:after': {
    content: '""',
    position: 'absolute',
    size: '14px',
    mx: '3px',
    left: 0,
    backgroundColor: '$primary-100',
    borderRadius: '$round',
    transition: 'left 200ms ease-in-out, color 200ms ease-in-out',
  },
})

export const SwitchInput = styled('input', {
  display: 'inline-block',
  width: '100%',
  height: '100%',
  margin: 0,
  position: 'absolute',
  opacity: 0,

  [`&:checked + ${Toggle}:after`]: {
    left: '$5',
  },

  [`&:checked + ${Toggle}`]: {
    backgroundColor: '$accent',
  },
})
