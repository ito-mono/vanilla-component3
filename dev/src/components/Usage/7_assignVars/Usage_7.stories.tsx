import { Meta, StoryObj } from '@storybook/react';

import { Usage_7, Usage_7Props } from './Usage_7';

const meta: Meta = {
  title: 'vanilla-extract/Example/7_assignVars',
  component: Usage_7,
  argTypes: {
    theme: {
      control: {
        control: 'select',
        options: ['light', 'dark'],
      },
    },
  },
};
export default meta;

type Story = StoryObj<Usage_7Props>;
export const Basic: Story = {
  args: {
    theme: 'light',
  },
};
