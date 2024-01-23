import { Button, ButtonProps } from '@/components/Elements';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Basic: Story = {
  args: {
    children: 'Button',
  },
};
