import { Meta, StoryObj } from '@storybook/react';

import { Usage_1, Usage_1Props } from './Usage_1';

const meta: Meta = {
  title: 'vanilla-extract/API_Example/1_Style',
  component: Usage_1,
};
export default meta;

type Story = StoryObj<Usage_1Props>;
export const Basic: Story = {
  args: {},
};
