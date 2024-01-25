import { Meta, StoryObj } from '@storybook/react';

import { WorkflowUnit, WorkflowUnitProps } from '.';

const meta: Meta = {
  title: 'Workflow/WorkflowUnit',
  component: WorkflowUnit,
};
export default meta;

type Story = StoryObj<WorkflowUnitProps>;

export const Default: Story = {
  args: {
    title: '申請者',
    employeeInfo: {
      id: '123456',
      name: '田中太郎',
    },
  },
};
