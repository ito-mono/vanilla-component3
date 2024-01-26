import { UsageBaseComponent } from '../00_BaseComponent';

import { styles } from './Usage_10.css';

export type Usage_10Props = unknown;

export function Usage_10() {
  return (
    <>
      <p>
        createContainerはコンテナクエリを適用するための関数です。
        <br />
        コンテナのサイズを確認しながら画面のサイズを変更してみてください。
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
