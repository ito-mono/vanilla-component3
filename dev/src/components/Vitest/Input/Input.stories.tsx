import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta = {
  title: 'Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: function Comp() {
    const [value, setValue] = useState('test');
    return <Input {...{ value, setValue }} />;
  },
};
