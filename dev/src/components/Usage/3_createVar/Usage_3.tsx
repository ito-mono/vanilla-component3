import { UsageBaseComponent } from '../0_BaseComponent';

import { styles } from './Usage_3.css';

export type Usage_3Props = unknown;

export function Usage_3() {
  return (
    <>
      <p>
        createVarでカスタムプロパティを定義できます。
        <br />
        検証で各コンポーネントに定義されているカスタムプロパティを確認してみてください。
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
