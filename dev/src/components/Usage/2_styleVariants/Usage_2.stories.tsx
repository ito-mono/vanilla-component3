import { Meta, StoryObj } from '@storybook/react';

import { Usage_2, Usage_2Props } from './Usage_2';

const meta: Meta = {
  title: 'vanilla-extract/Example/2_StyleVariant',
  component: Usage_2,
  argTypes: {
    theme: {
      control: {
        control: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
  },
};
export default meta;

type Story = StoryObj<Usage_2Props>;
export const Basic: Story = {
  args: {
    theme: 'primary',
  },
};
