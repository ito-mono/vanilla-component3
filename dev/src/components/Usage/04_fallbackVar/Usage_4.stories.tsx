import { Meta, StoryObj } from '@storybook/react';

import { Usage_4, Usage_4Props } from './Usage_4';

const meta: Meta = {
  title: 'vanilla-extract/API_Example/4_FallbackVar',
  component: Usage_4,
};
export default meta;

type Story = StoryObj<Usage_4Props>;
export const Basic: Story = {
  args: {},
};
