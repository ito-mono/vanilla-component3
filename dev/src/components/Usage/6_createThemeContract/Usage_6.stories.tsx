import { Meta, StoryObj } from '@storybook/react';

import { Usage_6, Usage_6Props } from './Usage_6';

const meta: Meta = {
  title: 'vanilla-extract/Example/6_createThemeContract',
  component: Usage_6,
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

type Story = StoryObj<Usage_6Props>;
export const Basic: Story = {
  args: {
    theme: 'light',
  },
};
