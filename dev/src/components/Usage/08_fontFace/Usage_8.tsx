import { UsageBaseComponent } from '../00_BaseComponent';

import { styles } from './Usage_8.css';

export type Usage_8Props = unknown;

export function Usage_8() {
  return (
    <>
      <p>
        fontFaceは複数のフォント設定を一つのフォント名で管理出来るようにするための関数です。
        <br />
        srcの指定方法がいまいち分からなかったのでスタイルは適用していません。
        <br />
        あまり使うことも無さそうなのでそんなものがあるんだな程度で...
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
