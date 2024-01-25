import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    width: 'fit-content',
    height: 'fit-content',
    display: 'flex',
    border: '1px solid gray',
    borderRadius: '0.8rem',
  }),

  // ユニット
  unitContainer: style({
    display: 'flex',
    flexDirection: 'row-reverse',
  }),
};
