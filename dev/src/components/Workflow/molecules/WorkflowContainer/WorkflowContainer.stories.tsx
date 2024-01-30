import { Meta, StoryObj } from '@storybook/react';
import { Language, WorkflowStatus } from '@wf/enum';

import { useWorkFlow } from './useWorkflow';

import { WorkflowContainer } from '.';

const meta: Meta = {
  title: 'Workflow/WorkflowContainer',
  component: WorkflowContainer,
  argTypes: {
    statusCode: {
      control: {
        type: 'select',
      },
      options: Object.values(WorkflowStatus),
    },
    lang: {
      control: {
        type: 'select',
      },
      options: Object.values(Language),
    },
  },
};
export default meta;

// 元のpropsだとStorybookのコントロールが効かないので、Story用に型を変更
// type Story = StoryObj<WorkflowContainerProps>;
type Story = StoryObj<{ statusCode: WorkflowStatus; lang: Language }>;

export const Default: Story = {
  args: {
    statusCode: WorkflowStatus.None,
    lang: Language.Japanese,
  },
  render: function Render(args) {
    const props = useWorkFlow({
      units: [
        { title: '申請者', employeeInfo: { id: '0001', name: '山田太郎' } },
        { title: '承認者1', employeeInfo: { id: '0002', name: '山田一浪' } },
        { title: '承認者2', employeeInfo: { id: '0003', name: '山田次狼' } },
        { title: '承認者3', employeeInfo: { id: '0004', name: '山田三郎' } },
      ],
      statusCode: args.statusCode,
      lang: args.lang,
    });
    return <WorkflowContainer props={props} />;
  },
};
