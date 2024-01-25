import { WorkflowAction } from '@/components/Workflow/enum';

export type WorkflowActionButtonProps = {
  actionCode: WorkflowAction;
  onAction?: (actionCode: WorkflowAction, params?: number) => void;
};

export function WorkflowActionButton({
  actionCode,
  onAction = () => {},
}: WorkflowActionButtonProps) {
  return <button onClick={() => onAction(actionCode)}>{actionCode}</button>;
}
