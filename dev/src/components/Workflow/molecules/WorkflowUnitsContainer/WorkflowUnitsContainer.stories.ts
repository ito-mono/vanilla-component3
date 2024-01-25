import { Meta, StoryObj } from '@storybook/react';

import { WorkflowUnitsContainer, WorkflowUnitsContainerProps } from '.';

const meta: Meta = {
  title: 'Workflow/WorkflowUnitsContainer',
  component: WorkflowUnitsContainer,
};
export default meta;

type Story = StoryObj<WorkflowUnitsContainerProps>;

export const Default: Story = {
  args: {
    units: [
      { title: '申請者', employeeInfo: { id: '001', name: '田中太郎' } },
      { title: '承認者１', employeeInfo: { id: '002', name: '田中次郎' } },
      { title: '承認者２', employeeInfo: { id: '003', name: '田中三郎' } },
      { title: '一番偉い人', employeeInfo: { id: '999', name: '田中花子' } },
    ],
  },
};
