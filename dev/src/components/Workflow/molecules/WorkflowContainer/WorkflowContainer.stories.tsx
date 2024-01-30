import { Meta, StoryObj } from '@storybook/react';
import { WorkflowStatus } from '@wf/enum';

import { useWorkFlow } from './useWorkflow';

import { WorkflowContainer, WorkflowContainerProps } from '.';

const meta: Meta = {
  title: 'Workflow/WorkflowContainer',
  component: WorkflowContainer,
};
export default meta;

type Story = StoryObj<WorkflowContainerProps>;

export const Default: Story = {
  render: function Render() {
    const props = useWorkFlow({
      units: [{ title: '承認者' }],
      statusCode: WorkflowStatus.CanEdit,
    });
    return <WorkflowContainer props={props} />;
  },
};
