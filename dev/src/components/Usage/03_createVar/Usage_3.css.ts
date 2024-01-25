import { createVar, style } from '@vanilla-extract/css';

// createVar: CSS変数を作成する関数
export const colorVar = createVar();
export const backgroundVar = createVar();

// 作成したvarに対し値を割り当てる
const primary = style({
  vars: {
    [colorVar]: 'blue',
    [backgroundVar]: 'lightBlue',
  },
});
const secondary = style({
  vars: {
    [colorVar]: 'green',
    [backgroundVar]: 'lightGreen',
  },
});
const tertiary = style({
  vars: {
    [colorVar]: 'violet',
    [backgroundVar]: 'lavender',
  },
});

// 作成したvarは、まず適用したいプロパティにcreateVarで作成したvar変数を指定し、
const base = style({
  color: colorVar,
  backgroundColor: backgroundVar,
});
// その後、style関数に適用するvars定義が含まれたstyleブジェクトを渡す
export const styles = {
  title: style([base, primary]),
  text: style([base, secondary]),
  container: style([base, secondary]),
  containerChildren: style([base, tertiary]),
  button: style([base, tertiary]),
};
