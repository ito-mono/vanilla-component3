import { Meta, StoryObj } from '@storybook/react';
import { WorkflowStatus } from '@wf/enum';

import {
  WorkflowActionButtonsContainer,
  WorkflowActionButtonsContainerProps,
} from '.';

const meta: Meta = {
  title: 'Workflow/Components/WorkflowActionButtonsContainer',
  component: WorkflowActionButtonsContainer,
};
export default meta;

type Story = StoryObj<WorkflowActionButtonsContainerProps>;

export const Default: Story = {
  args: {
    statusCode: WorkflowStatus.PrePetition,
  },
};
