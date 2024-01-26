import { WorkflowAction } from '@wf/enum';

export type WorkflowOnActionProps = {
  onAction?: (actionCode: WorkflowAction, params?: unknown) => void;
};
