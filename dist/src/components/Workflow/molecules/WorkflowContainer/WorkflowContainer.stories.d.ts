import { Meta, StoryObj } from '@storybook/react';
import { Language, WorkflowStatus } from '../../enum';
declare const meta: Meta;
export default meta;
type Story = StoryObj<{
    statusCode: WorkflowStatus;
    lang: Language;
}>;
export declare const Default: Story;
