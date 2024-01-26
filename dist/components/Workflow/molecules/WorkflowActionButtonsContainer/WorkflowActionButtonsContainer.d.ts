import { WorkflowStatus } from '../../enum';
import { WorkflowOnActionProps } from '../../types';
export type WorkflowActionButtonsContainerProps = {
    statusCode?: WorkflowStatus;
} & WorkflowOnActionProps;
export declare function WorkflowActionButtonsContainer({ statusCode, onAction, }: WorkflowActionButtonsContainerProps): import("react/jsx-runtime").JSX.Element;
