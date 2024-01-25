import clsx from 'clsx';

import { UsageBaseComponent } from '../0_BaseComponent';

import { darkTheme, lightTheme, styles } from './Usage_6.css';

export type Usage_6Props = {
  theme: 'light' | 'dark';
};

export function Usage_6({ theme }: Usage_6Props) {
  const themeClass = theme === 'dark' ? darkTheme : lightTheme;
  return (
    <>
      <p>
        createThemeContractはcreateThemeの第二返り値に含まれるテーマの型を定義する関数です。
        <br />
        themeの指定の仕方等はcreateThemeと同じですが、基本的にはcreateThemeContractを使用して型を定義し、
        <br />
        その型を用いてthemeを作成することで、作成したthemeのインポート時に余計なCSSを含めないようにすることができます。
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
