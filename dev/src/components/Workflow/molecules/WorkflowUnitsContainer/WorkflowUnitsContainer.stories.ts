import { Meta, StoryObj } from '@storybook/react';
import { Language } from '@wf/enum';

import { WorkflowUnitsContainer, WorkflowUnitsContainerProps } from '.';

const meta: Meta = {
  title: 'Workflow/Components/WorkflowUnitsContainer',
  component: WorkflowUnitsContainer,
};
export default meta;

type Story = StoryObj<WorkflowUnitsContainerProps>;

export const Default: Story = {
  args: {
    units: [
      {
        index: 1,
        title: '申請者',
        employeeInfo: { id: '001', name: '田中太郎' },
        sendEmail: true,
        lang: Language.Japanese,
      },
      {
        index: 1,
        title: '承認者１',
        employeeInfo: { id: '002', name: '田中次郎' },
        sendEmail: true,
        lang: Language.Japanese,
      },
      {
        index: 1,
        title: '承認者２',
        employeeInfo: { id: '003', name: '田中三郎' },
        sendEmail: true,
        lang: Language.Japanese,
      },
      {
        index: 1,
        title: '一番偉い人',
        employeeInfo: { id: '999', name: '田中花子' },
        sendEmail: true,
        lang: Language.Japanese,
      },
    ],
  },
};
