import { Meta, StoryObj } from '@storybook/react';
import { Language, WorkflowAction } from '@wf/enum';

import { WorkflowActionButton, WorkflowActionButtonProps } from '.';

const meta: Meta = {
  title: 'Workflow/Components/WorkflowActionButton',
  component: WorkflowActionButton,
};
export default meta;

type Story = StoryObj<WorkflowActionButtonProps>;

export const Default: Story = {
  args: {
    actionCode: WorkflowAction.Petition,
    lang: Language.Japanese,
  },
  render: function render(args) {
    return <WorkflowActionButton {...args} />;
  },
};
