import { fontFace, style } from '@vanilla-extract/css';

// fontFace: 複数のフォント設定で一つのフォントファミリーで管理するための関数
// いまいちsrcの指定方法がわからない
const meiryo = fontFace([
  {
    src: 'local("Meiryo")',
    fontWeight: 'normal',
  },
]);
const meiryoBold = fontFace([
  {
    src: 'local("Meiryo")',
    fontWeight: 'bold',
  },
]);

const notoSans = fontFace([
  {
    src: 'local("noto-sans")',
    fontWeight: 'bold',
  },
]);

export const styles = {
  root: style({}),
  title: style({ fontFamily: meiryo }),
  text: style({ fontFamily: meiryoBold }),
  container: style({ fontFamily: notoSans }),
  containerChildren: style({}),
  button: style({}),
};
