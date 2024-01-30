import { Language, WorkflowStatus } from '../../enum';
import { WorkflowOnAction } from '../../types';
export type WorkflowActionButtonsContainerProps = {
    statusCode?: WorkflowStatus;
    lang?: Language;
    onAction?: WorkflowOnAction;
};
export declare function WorkflowActionButtonsContainer({ statusCode, lang, onAction, }: WorkflowActionButtonsContainerProps): import("react/jsx-runtime").JSX.Element;
