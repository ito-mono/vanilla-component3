import { Meta, StoryObj } from '@storybook/react';
import { WorkflowStatus } from '@wf/enum';

import { WorkflowStatusLabel, WorkflowStatusLabelProps } from '.';

const meta: Meta = {
  title: 'Workflow/Components/WorkflowStatusLabel',
  component: WorkflowStatusLabel,
};
export default meta;

type Story = StoryObj<WorkflowStatusLabelProps>;

export const Default: Story = {
  args: {
    statusCode: WorkflowStatus.PrePetition,
  },
};
