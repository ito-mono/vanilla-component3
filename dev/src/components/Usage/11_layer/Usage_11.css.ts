import { createContainer, style } from '@vanilla-extract/css';

// createContainer: コンテナクエリを作成するための関数
// 返り値は作成されたコンテナのクラス名
const containerName = createContainer();

// 上で作成したコンテナクラス名をcontainerNameに指定する
export const containerStyle = style({
  containerName: containerName,
  containerType: 'inline-size',
});
// コンテナのサイズに応じて色を変えるスタイル
export const changeColorStyle = style({
  '@container': {
    [`${containerName} (min-width: 400px)`]: {
      backgroundColor: 'lightBlue',
    },
    [`${containerName} (min-width: 600px)`]: {
      backgroundColor: 'lightGreen',
    },
    [`${containerName} (min-width: 800px)`]: {
      backgroundColor: 'salmon',
    },
  },
});

// cotainerStyleを大枠に適用し、サイズによってスタイルを変えたい場所に適宜changeColorStyleを適用する
export const styles = {
  root: style([containerStyle]),
  title: style([]),
  text: style({}),
  container: style([changeColorStyle]),
  containerChildren: style({}),
  button: style([
    changeColorStyle,
    { border: 'none', borderRadius: '2rem', padding: '1rem', margin: '1rem' },
  ]),
};
