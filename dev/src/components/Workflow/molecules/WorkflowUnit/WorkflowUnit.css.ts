import { style } from '@vanilla-extract/css';

import { opacityKeyframe } from '@/components/Style/Animation';
export const styles = {
  // 外枠
  frame: style({
    width: 'fit-content',
    height: 'fit-content',
    border: '1px solid gray',
    borderRadius: '0.5rem',
    transition: 'background-color 0.2s',
    margin: '0.5rem 0 0 0.5rem',

    ':hover': {
      backgroundColor: '#dddddd',
    },

    selectors: {
      '&:last-child': {
        marginBottom: '0.5rem',
      },
      '&.appearance': {
        animationName: opacityKeyframe,
        animationDuration: '5s',
        animationIterationCount: 1,
      },
    },
  }),

  // コンテンツ
  wrapper: style({
    width: '9rem',
    height: '8rem',
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),

  // title
  titleContainer: style({
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
  }),
  title: style({
    lineHeight: '1rem',
    maxHeight: '3rem',
    overflowY: 'auto',
  }),

  // employeeInfo
  employeeInfoContainer: style({
    lineHeight: '1rem',
    maxHeight: '3rem',
    overflowY: 'auto',
    flexGrow: 1,
  }),

  // button
  buttonContainer: style({
    display: 'flex',
    justifyContent: 'space-between',
    flexShrink: 0,
  }),

  // error
  error: style({
    color: 'red',
  }),
};
