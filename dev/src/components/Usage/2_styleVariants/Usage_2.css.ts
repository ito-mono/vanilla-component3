import { style, styleVariants } from '@vanilla-extract/css';

// styleVariants: style関数のバリエーション
export const colorThemes = styleVariants({
  primary: { color: 'blue' },
  secondary: { color: 'green' },
  tertiary: { color: 'violet' },
});

// 以下のように配列形式でマージすることも可能
const base = style({ padding: '1rem', borderRadius: '2rem' });
export const backgroundThemes = styleVariants({
  primary: [base, { backgroundColor: 'lightBlue' }],
  secondary: [base, { backgroundColor: 'lightGreen' }],
  tertiary: [base, { backgroundColor: 'lavender' }],
});
