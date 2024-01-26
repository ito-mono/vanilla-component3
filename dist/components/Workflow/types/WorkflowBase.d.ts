import { WorkflowAction } from '../enum';
export type WorkflowOnActionProps = {
    onAction?: (actionCode: WorkflowAction, params?: unknown) => void;
};
