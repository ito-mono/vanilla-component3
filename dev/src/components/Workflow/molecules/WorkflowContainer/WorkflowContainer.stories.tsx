import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { WorkflowStatus } from '@wf/enum';

import { WorkflowContainer, WorkflowContainerProps } from '.';

const meta: Meta = {
  title: 'Workflow/WorkflowContainer',
  component: WorkflowContainer,
};
export default meta;

type Story = StoryObj<WorkflowContainerProps>;

export const Default: Story = {
  args: {
    statusCode: WorkflowStatus.PrePetition,
    units: [
      { title: '申請者', employeeInfo: { id: '001', name: '田中太郎' } },
      { title: '承認者１', employeeInfo: { id: '002', name: '田中次郎' } },
      { title: '承認者２', employeeInfo: { id: '003', name: '田中三郎' } },
      { title: '一番偉い人', employeeInfo: { id: '999', name: '田中花子' } },
    ],
  },
  render: function Render(args) {
    const [units, setUnits] = useState(args.units);
    const [statusCode, setStatusCode] = useState(args.statusCode);
    const props = { units, setUnits, statusCode, setStatusCode };
    return <WorkflowContainer {...props} />;
  },
};
