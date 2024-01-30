import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    width: 'fit-content',
    height: 'fit-content',
    display: 'flex',
    border: '1px solid gray',
    borderRadius: '0.8rem',
  }),
  sideContainer: style({
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    margin: '0.5rem',
    borderRadius: '0.5rem',
    backgroundColor: '#eeeeee',
  }),
};
