import { keyframes } from '@vanilla-extract/css';

// 透明
export const opacityKeyframe = keyframes({
  '0%': { opacity: 0 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0 },
});

// レインボー
export const rainbowKeyframe = keyframes({
  '0%': { backgroundColor: 'red' },
  '15%': { backgroundColor: 'orange' },
  '30%': { backgroundColor: 'yellow' },
  '45%': { backgroundColor: 'green' },
  '60%': { backgroundColor: 'blue' },
  '75%': { backgroundColor: 'navy' },
  '90%': { backgroundColor: 'purple' },
  '100%': { backgroundColor: 'red' },
});
// 回転
export const rotateKeyframe = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

// 拡大縮小
export const scaleKeyframe = keyframes({
  '0%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.5)' },
  '100%': { transform: 'scale(1)' },
});

// 反復横飛
export const flyKeyframe = keyframes({
  '0%': { textAlign: 'left' },
  '50%': { textAlign: 'right' },
  '100%': { textAlign: 'left' },
});
