import { createVar, fallbackVar, style } from '@vanilla-extract/css';

export const primaryVar = createVar();
export const secondaryVar = createVar();

const primary = style({
  vars: {
    [primaryVar]: 'blue',
  },
});
const secondary = style({
  vars: {
    [secondaryVar]: 'green',
  },
});

// 作成したvarは、まず適用したいプロパティにcreateVarで作成したvar変数を指定し、
const base = style({
  color: fallbackVar(primaryVar, secondaryVar, 'violet'),
});
// その後、style関数に適用するvars定義が含まれたstyleブジェクトを渡す
export const styles = {
  title: style([base, primary]),
  text: style([base, secondary]),
  container: style([base]),
  containerChildren: style([base]),
  button: style([base]),
};
