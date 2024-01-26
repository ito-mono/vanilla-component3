import { keyframes, style } from '@vanilla-extract/css';

// 透明
const opacityKeyframe = keyframes({
  '0%': { opacity: 0 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0 },
});
export const opacity = style({
  animationName: opacityKeyframe,
  animationDuration: '3s',
  animationIterationCount: 'infinite',
});

// レインボー
const rainbowKeyframe = keyframes({
  '0%': { backgroundColor: 'red' },
  '15%': { backgroundColor: 'orange' },
  '30%': { backgroundColor: 'yellow' },
  '45%': { backgroundColor: 'green' },
  '60%': { backgroundColor: 'blue' },
  '75%': { backgroundColor: 'navy' },
  '90%': { backgroundColor: 'purple' },
  '100%': { backgroundColor: 'red' },
});
export const rainbow = style({
  animationName: rainbowKeyframe,
  animationDuration: '5s',
  animationIterationCount: 'infinite',
});

// 回転
const rotateKeyframe = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});
export const rotate = style({
  animationName: rotateKeyframe,
  animationDuration: '4s',
  animationIterationCount: 'infinite',
});

// 拡大縮小
const scaleKeyframe = keyframes({
  '0%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.5)' },
  '100%': { transform: 'scale(1)' },
});
export const scale = style({
  animationName: scaleKeyframe,
  animationDuration: '2s',
  animationIterationCount: 'infinite',
});

// 反復横飛
const flyKeyframe = keyframes({
  '0%': { textAlign: 'left' },
  '50%': { textAlign: 'right' },
  '100%': { textAlign: 'left' },
});
export const fly = style({
  animationName: flyKeyframe,
  animationDuration: '0.5s',
  animationIterationCount: 'infinite',
});

export const styles = {
  root: style({}),
  title: style([opacity]),
  text: style([fly]),
  container: style([scale, { display: 'block' }]),
  containerChildren: style([rotate]),
  button: style([
    rainbow,
    {
      color: 'white',
      padding: '1rem',
      border: 'none',
      borderRadius: '2rem',
    },
  ]),
};
