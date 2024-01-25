import { Meta, StoryObj } from '@storybook/react';

import { WorkflowActionButton, WorkflowActionButtonProps } from '.';

const meta: Meta = {
  title: 'Workflow/WorkflowActionButton',
  component: WorkflowActionButton,
};
export default meta;

type Story = StoryObj<WorkflowActionButtonProps>;

export const Default: Story = {
  args: {},
};
