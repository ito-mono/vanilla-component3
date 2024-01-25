import { Meta, StoryObj } from '@storybook/react';

import { Usage_8, Usage_8Props } from './Usage_8';

const meta: Meta = {
  title: 'vanilla-extract/API_Example/8_fontFace',
  component: Usage_8,
};
export default meta;

type Story = StoryObj<Usage_8Props>;
export const Basic: Story = {
  args: {},
};
