import { Language, WorkflowAction } from '../../enum';
import { WorkflowOnAction } from '../../types';
export type WorkflowActionButtonProps = {
    actionCode: WorkflowAction;
    lang: Language;
    onAction: WorkflowOnAction;
    params?: unknown;
};
/**
 *
 * @param actionCode WorkflowAction
 * @param lang Language
 * @param onAction
 * @param params
 *
 * @returns ワークフローアクションボタン
 */
export declare function WorkflowActionButton({ actionCode, lang, onAction, params, }: WorkflowActionButtonProps): import("react/jsx-runtime").JSX.Element;
