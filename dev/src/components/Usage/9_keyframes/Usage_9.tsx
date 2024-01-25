import { UsageBaseComponent } from '../0_BaseComponent';

import { styles } from './Usage_9.css';

export type Usage_9Props = unknown;

export function Usage_9() {
  return (
    <>
      <p>
        keyframesはアニメーションを作成する際のキーフレームを作成する関数です。
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
