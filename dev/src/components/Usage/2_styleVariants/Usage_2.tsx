import { UsageBaseComponent } from '../0_BaseComponent';

import { colorThemes, backgroundThemes } from './Usage_2.css';

export type Usage_2Props = {
  theme: keyof typeof colorThemes;
};

export function Usage_2({ theme }: Usage_2Props) {
  return (
    <>
      <p>
        styleにバリエーションを持たせられます。
        <br />
        themeを変更してみてください。
      </p>
      <UsageBaseComponent
        rootClassName={backgroundThemes[theme]}
        titleClassName={colorThemes[theme]}
        textClassName={colorThemes[theme]}
        containerClassName={colorThemes[theme]}
        containerChildrenClassName={colorThemes[theme]}
        buttonClassName={colorThemes[theme]}
      ></UsageBaseComponent>
    </>
  );
}
