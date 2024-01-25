import { WorkflowAction } from '@/components/Workflow/enum';

export type WorkflowActionButtonsContainerProps = {
  onAction?: (actionCode: WorkflowAction, params?: number) => void;
};

export function WorkflowActionButtonsContainer({
  onAction = () => {},
}: WorkflowActionButtonsContainerProps) {
  return <div></div>;
}
