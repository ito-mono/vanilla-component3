/// <reference types="react" />
import { Language } from ".";
import { WorkflowStatus } from ".";
export declare namespace WorkflowStatusUtil {
  function getLabel(
    statusCode: WorkflowStatus,
    lang?: Language
  ): React.ReactNode;
}
