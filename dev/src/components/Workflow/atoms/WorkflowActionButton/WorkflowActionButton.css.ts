import { createTheme, createThemeContract, style } from '@vanilla-extract/css';

// テーマのinterfaceを定義
const vars = createThemeContract({
  color: null,
  backgroundColor: null,
  border: null,

  hover: {
    color: null,
    backgroundColor: null,
    border: null,
  },
});

// 共通のスタイル（テーマの適用）
const base = style({
  color: vars.color,
  backgroundColor: vars.backgroundColor,
  border: vars.border,

  ':hover': {
    color: vars.hover.color,
    backgroundColor: vars.hover.backgroundColor,
    border: vars.hover.border,
  },
});

export const styles = {
  // ラベルボタン
  labelButton: style([
    base,
    {
      width: '8rem',
      height: '2rem',
      borderRadius: '0.5rem',
      margin: '0.5rem 0.5rem 0 0.5rem',
    },
  ]),

  // アイコンボタン
  iconButton: style([
    base,
    {
      width: '2rem',
      height: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '2rem',
      borderRadius: '50%',
      transition: 'background-color 0.2s',
    },
  ]),

  // テーマの定義
  themes: {
    // アイコン
    icon: createTheme(vars, {
      color: 'black',
      backgroundColor: '#eeeeee',
      border: 'none',

      hover: {
        color: 'black',
        backgroundColor: '#bbbbbb',
        border: 'none',
      },
    }),

    // アクション
    action: createTheme(vars, {
      color: 'white',
      backgroundColor: '#99ccff',
      border: 'none',

      hover: {
        color: 'white',
        backgroundColor: '#66ccff',
        border: 'none',
      },
    }),

    // 危険
    danger: createTheme(vars, {
      color: 'white',
      backgroundColor: '#ff9999',
      border: 'none',

      hover: {
        color: 'white',
        backgroundColor: '#ff6666',
        border: 'none',
      },
    }),
  },
};
