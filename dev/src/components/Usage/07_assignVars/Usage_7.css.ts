import { assignVars, createThemeContract, style } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    primary: null,
    secondary: null,
    tertiary: null,
  },
  backgroundColor: null,
  buttonColor: {
    color: null,
    background: null,
  },
  containerColor: null,
});

// assignVars: createThemeContractで作成したテーマの型に対して値を割り当てる関数
// 使い方はcreateThemeと似ているが、@mediaブロック内でも使用でき、変数の設定方法をより詳細に制御できる
// createThemeは使わず、themeの作成には基本これを使うのが良さげ
export const lightTheme = style({
  vars: assignVars(vars, {
    color: {
      primary: 'blue',
      secondary: 'green',
      tertiary: 'violet',
    },
    backgroundColor: 'white',
    buttonColor: {
      color: 'white',
      background: '#555555',
    },
    containerColor: '#dddddd',
  }),
});

export const darkTheme = style({
  vars: assignVars(vars, {
    color: {
      primary: 'lightBlue',
      secondary: 'lightGreen',
      tertiary: 'lavender',
    },
    backgroundColor: '#555555',
    buttonColor: {
      color: '#555555',
      background: 'white',
    },
    containerColor: '#333333',
  }),
});

// 作成したテーマを適用する
// 引数により、テーマクラス名が適用される
const base = style({ margin: '0.5rem' });
export const styles = {
  // const themeClass = theme === 'dark' ? darkTheme : lightTheme;
  // return {
  root: style([
    base,
    {
      backgroundColor: vars.backgroundColor,
      color: vars.color.primary,
      height: '24rem',
      padding: '1rem',
      borderRadius: '2rem',
    },
  ]),
  title: style([base, { color: vars.color.primary }]),
  text: style([base, { color: vars.color.secondary }]),
  container: style([
    base,
    {
      color: vars.color.secondary,
      backgroundColor: vars.containerColor,
      padding: '1rem',
      borderRadius: '1rem',
    },
  ]),
  containerChildren: style([base, { color: vars.color.tertiary }]),
  button: style([
    base,
    {
      color: vars.buttonColor.color,
      backgroundColor: vars.buttonColor.background,
      padding: '1rem',
      borderRadius: '1rem',
    },
  ]),
};
