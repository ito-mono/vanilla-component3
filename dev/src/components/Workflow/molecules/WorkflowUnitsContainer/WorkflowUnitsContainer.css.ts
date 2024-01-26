import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    width: 'fit-content',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    maxWidth: '30rem',
  }),
};
