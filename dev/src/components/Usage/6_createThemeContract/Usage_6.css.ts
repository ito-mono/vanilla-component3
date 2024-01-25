import { createTheme, createThemeContract, style } from '@vanilla-extract/css';

// createThemeContract: テーマの型を作成する関数
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

// createThemeContractで作成したテーマの型を引数として渡すことで、同じ型のテーマを作成するように強制できる
export const lightTheme = createTheme(vars, {
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
});

export const darkTheme = createTheme(vars, {
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
