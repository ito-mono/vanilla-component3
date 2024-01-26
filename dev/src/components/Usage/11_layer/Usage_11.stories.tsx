import { Meta, StoryObj } from '@storybook/react';

import { Usage_11, Usage_11Props } from './Usage_11';

const meta: Meta = {
  title: 'vanilla-extract/API_Example/11_layer',
  component: Usage_11,
};
export default meta;

type Story = StoryObj<Usage_11Props>;
export const Basic: Story = {
  args: {},
};
