import { Meta, StoryObj } from '@storybook/react';

import { Usage_5, Usage_5Props } from './Usage_5';

const meta: Meta = {
  title: 'vanilla-extract/API_Example/5_createTheme',
  component: Usage_5,
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

type Story = StoryObj<Usage_5Props>;
export const Basic: Story = {
  args: {
    theme: 'light',
  },
};
