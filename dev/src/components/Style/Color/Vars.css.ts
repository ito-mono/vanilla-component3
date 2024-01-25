import { createVar, style } from '@vanilla-extract/css';

export const accentVar = createVar();

export const blue = style({
  vars: {
    [accentVar]: 'blue',
  },
});

export const pink = style({
  vars: {
    [accentVar]: 'pink',
  },
});
