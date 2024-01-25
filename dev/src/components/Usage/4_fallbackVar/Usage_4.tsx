import { UsageBaseComponent } from '../0_BaseComponent';

import { styles } from './Usage_4.css';

export type Usage_4Props = unknown;

export function Usage_4() {
  return (
    <>
      <p>
        fallbackVarでカスタムプロパティのフォールバックを定義できます。
        <br />
        ※カスタムプロパティにおけるフォールバックとは、カスタムプロパティが定義されていない場合に代わりに適用される値のことです。
        <br />
        <br />
        文字色が青: PrimaryVarが定義されている
        <br />
        文字色が緑: PrimaryVarは定義されていないが、secondaryVarが定義されている
        <br />
        文字色がピンク: どちらも定義されていない
      </p>
      <UsageBaseComponent
        titleClassName={styles.title}
        textClassName={styles.text}
        containerClassName={styles.container}
        containerChildrenClassName={styles.containerChildren}
        buttonClassName={styles.button}
      ></UsageBaseComponent>
    </>
  );
}
