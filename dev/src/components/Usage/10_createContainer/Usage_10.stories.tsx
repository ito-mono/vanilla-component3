import { Meta, StoryObj } from '@storybook/react';

import { Usage_10, Usage_10Props } from './Usage_10';

const meta: Meta = {
  title: 'vanilla-extract/API_Example/10_createContainer',
  component: Usage_10,
};
export default meta;

type Story = StoryObj<Usage_10Props>;
export const Basic: Story = {
  args: {},
};
