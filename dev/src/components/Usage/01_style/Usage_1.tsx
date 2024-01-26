import { UsageBaseComponent } from '../00_BaseComponent';

import { styles } from './Usage_1.css';

export type Usage_1Props = unknown;

export function Usage_1() {
  // css.tsで定義したstylesをimportし、各classNameに指定する
  return (
    <>
      <p>
        一番基本となる使い方です。
        <br />
        css.tsでstyle関数を使用してスタイルを定義し、適用したいタグのclassNameに指定します。
      </p>
      <UsageBaseComponent
        rootClassName={styles.root}
        titleClassName={styles.title}
        textClassName={styles.text}
        containerClassName={styles.container}
        containerChildrenClassName={styles.containerChildren}
        buttonClassName={styles.button}
      ></UsageBaseComponent>
    </>
  );
}
