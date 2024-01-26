import clsx from 'clsx';

import { UsageBaseComponent } from '../00_BaseComponent';

import { darkTheme, lightTheme, styles } from './Usage_7.css';

export type Usage_7Props = {
  theme: 'light' | 'dark';
};

export function Usage_7({ theme }: Usage_7Props) {
  const themeClass = theme === 'dark' ? darkTheme : lightTheme;
  return (
    <>
      <p>
        assignVarsはcreateThemeContractで作成したテーマの型に対して、値を割り当てる関数です。
        <br />
        createThemeと似ていますが、こちらの方がより詳細に変数を制御することができます。
        <br />
        レスポンシブなデザインを作成する場合など、柔軟に変数を制御したい場合に使用します。
        <br />
        createThemeとassignVarsが一つのプロジェクト内で入り乱れていると可読性が落ちるため、プロジェクト内で統一することを推奨します。
      </p>
      <UsageBaseComponent
        rootClassName={clsx(styles.root, themeClass)}
        titleClassName={clsx(styles.title, themeClass)}
        textClassName={clsx(styles.text, themeClass)}
        containerClassName={clsx(styles.container, themeClass)}
        containerChildrenClassName={clsx(styles.containerChildren, themeClass)}
        buttonClassName={clsx(styles.button, themeClass)}
      ></UsageBaseComponent>
    </>
  );
}
