import { buttonReset } from "@styles/global";
import { styled } from "stitches.config";

export const PlayButtonRoot = styled('button', {
    ...buttonReset,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '$round',
    backgroundColor: '$accent',
    size: '75px',

    '& > svg': {
        fill: '$primary-100'
    },

    '&:hover': {
        opacity: '0.75'
    }
})