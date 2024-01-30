import { createTheme, createThemeContract, style } from '@vanilla-extract/css';

// themeのinterfaceを定義
const vars = createThemeContract({
  color: null,
  backgroundColor: null,
});

export const styles = {
  label: style({
    color: vars.color,
    backgroundColor: vars.backgroundColor,

    width: '9rem',
    height: '3rem',
    padding: '0 0.25rem',
    fontWeight: 'bold',
    lineHeight: '1.2rem',
    borderRadius: '0.5rem',
    textShadow: '0 0 0.5rem black',

    /* センタリング */
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }),

  // テーマの定義
  themes: {
    // 未実施
    pending: createTheme(vars, {
      color: 'white',
      backgroundColor: '#99ccff',
    }),
    // 成功
    success: createTheme(vars, {
      color: 'white',
      backgroundColor: '#99ff99',
    }),
    // 注意
    warn: createTheme(vars, {
      color: 'white',
      backgroundColor: '#ffcc99',
    }),
    // 危険
    danger: createTheme(vars, {
      color: 'white',
      backgroundColor: '#ff9999',
    }),
    // アクション
    action: createTheme(vars, {
      color: 'white',
      backgroundColor: '#cc99ff',
    }),
  },
};
