import { style, styleVariants } from '@vanilla-extract/css';

import { accentVar, pink } from '@/components/Style/Color/Vars.css';

export const background = styleVariants({
  primary: { background: 'blue' },
  secondary: { background: 'aqua' },
});

const width = style({ width: '8rem' });

export const styles = {
  button: style([width, { backgroundColor: accentVar }, pink]),
};
