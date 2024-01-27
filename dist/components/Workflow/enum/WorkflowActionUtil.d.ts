/// <reference types="react" />
import { Language, WorkflowAction } from ".";
export declare namespace WorkflowActionUtil {
  function getLabel(
    actionCode: WorkflowAction,
    lang?: Language
  ): React.ReactNode;
  function isIcon(actionCode: WorkflowAction): boolean;
}
