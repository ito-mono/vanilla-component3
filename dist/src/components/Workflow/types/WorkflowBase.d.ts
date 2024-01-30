import { WorkflowAction } from '../enum';
export type WorkflowOnAction = (actionCode: WorkflowAction, params?: unknown) => void;
