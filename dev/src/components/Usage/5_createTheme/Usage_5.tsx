import clsx from 'clsx';

import { UsageBaseComponent } from '../0_BaseComponent';

import { darkTheme, lightTheme, styles } from './Usage_5.css';

export type Usage_5Props = {
  theme: 'light' | 'dark';
};

export function Usage_5({ theme }: Usage_5Props) {
  const themeClass = theme === 'dark' ? darkTheme : lightTheme;
  return (
    <>
      <p>
        createThemeで複数のカスタムプロパティを含んだテーマを作成することができます。
        <br />
        また、テーマを変更することで、複数のカスタムプロパティを一括で変更することができます。
        <br />
        themeを変更して、カスタムプロパティを確認してみてください。
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
