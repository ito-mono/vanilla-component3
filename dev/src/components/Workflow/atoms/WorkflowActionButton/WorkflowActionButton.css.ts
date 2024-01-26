import { style } from '@vanilla-extract/css';

export const styles = {
  labelButton: style({
    width: '8rem',
    height: '2rem',
    border: 'none',
    borderRadius: '0.5rem',
  }),

  iconButton: style({
    width: '2rem',
    height: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    border: 'none',
    borderRadius: '50%',
    backgroundColor: '#eeeeee',
    transition: 'background-color 0.2s',

    ':hover': {
      backgroundColor: '#bbbbbb',
    },
  }),
};
