import { style } from '@vanilla-extract/css';

// style関数の引数として、CSSプロパティをオブジェクト形式で渡す
const border = style({
  border: '1px solid black',
  padding: '1rem',
  margin: '1rem',
});

const radius = style({ borderRadius: '2rem' });

// コンポーネントで参照できるように、stylesという名前でexportする
// 参照方法はコンポーネントのファイルを参照
// また配列形式でマージすることも可能 (例: border, radius)

// 以下のようにstyle関数には様々な形でプロパティを渡せる
export const styles = {
  root: style([border]),
  title: style({
    color: 'red',
  }),
  text: style({
    color: 'blue',
  }),
  container: style([
    border,
    radius,
    {
      color: 'green',
    },
  ]),
  containerChildren: style({
    color: 'orange',
  }),
  button: style({
    color: 'purple',
    backgroundColor: 'pink',
  }),
};
