import { style } from '@vanilla-extract/css';

export const styles = {
  // 外枠
  frame: style({
    width: 'fit-content',
    height: 'fit-content',
    border: '1px solid gray',
    borderRadius: '0.5rem',
    transition: 'background-color 0.2s',
    margin: '0.5rem 0 0.5rem 0.5rem',

    ':hover': {
      backgroundColor: '#dddddd',
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
  }),

  // employeeInfo
  employeeInfoContainer: style({
    lineHeight: '1',
  }),

  // button
  buttonContainer: style({
    display: 'flex',
    justifyContent: 'space-between',
  }),
  button: style({
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

  // error
  error: style({
    color: 'red',
  }),
};
