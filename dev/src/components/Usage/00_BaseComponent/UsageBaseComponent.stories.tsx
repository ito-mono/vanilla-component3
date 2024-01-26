import { Meta, StoryObj } from '@storybook/react';

import { UsageBaseComponent, UsageBaseComponentProps } from '.';

const meta: Meta = {
  title: 'vanilla-extract/API_Example/0_BaseComponent',
  component: UsageBaseComponent,
};
export default meta;

type Story = StoryObj<UsageBaseComponentProps>;
export const Basic: Story = {
  args: {
    titleClassName: 'title',
    textClassName: 'text',
    containerClassName: 'container',
    containerChildrenClassName: 'containerChildren',
    buttonClassName: 'button',
  },
};
