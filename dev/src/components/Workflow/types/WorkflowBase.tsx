import { WorkflowAction } from '@wf/enum';

export type WorkflowOnAction = (
  actionCode: WorkflowAction,
  params?: unknown,
) => void;
