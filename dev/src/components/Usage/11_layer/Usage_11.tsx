import { UsageBaseComponent } from '../00_BaseComponent';

import { styles } from './Usage_11.css';

export type Usage_11Props = unknown;

export function Usage_11() {
  return (
    <>
      <p>作成中...</p>
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
