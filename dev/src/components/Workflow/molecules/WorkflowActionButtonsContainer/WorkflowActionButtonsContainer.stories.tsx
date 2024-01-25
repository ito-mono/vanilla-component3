import { Meta, StoryObj } from '@storybook/react';

import {
  WorkflowActionButtonsContainer,
  WorkflowActionButtonsContainerProps,
} from '.';

const meta: Meta = {
  title: 'Workflow/WorkflowActionButtonsContainer',
  component: WorkflowActionButtonsContainer,
};
export default meta;

type Story = StoryObj<WorkflowActionButtonsContainerProps>;

export const Default: Story = {
  args: {},
};
