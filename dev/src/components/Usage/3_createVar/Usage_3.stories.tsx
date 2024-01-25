import { Meta, StoryObj } from '@storybook/react';

import { Usage_3, Usage_3Props } from './Usage_3';

const meta: Meta = {
  title: 'vanilla-extract/Example/3_CreateVar',
  component: Usage_3,
};
export default meta;

type Story = StoryObj<Usage_3Props>;
export const Basic: Story = {
  args: {},
};
