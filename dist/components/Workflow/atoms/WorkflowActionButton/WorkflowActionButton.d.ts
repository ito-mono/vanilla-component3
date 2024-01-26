import { Lunguage, WorkflowAction } from '../../enum';
import { WorkflowOnActionProps } from '../../types';
export type WorkflowActionButtonProps = {
    actionCode: WorkflowAction;
    lang?: Lunguage;
    params?: unknown;
} & WorkflowOnActionProps;
export declare function WorkflowActionButton({ actionCode, lang, params, onAction, }: WorkflowActionButtonProps): import("react/jsx-runtime").JSX.Element;
