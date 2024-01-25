import { createTheme, style } from '@vanilla-extract/css';

// createTheme: テーマ（複数のCSS変数のまとまり）を作成する関数
// 返り値は、[テーマクラス名, テーマの型] の配列
export const [lightTheme, vars] = createTheme({
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

// createThemeで作成されたテーマの型を引数として渡すことで、同じ型のテーマを作成するように強制できる
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
