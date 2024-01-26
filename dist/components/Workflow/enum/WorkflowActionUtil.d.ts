/// <reference types="react" />
import { Lunguage, WorkflowAction } from '.';
export declare namespace WorkflowActionUtil {
    function getLabel(actionCode: WorkflowAction, lang?: Lunguage): React.ReactNode;
    function isIcon(actionCode: WorkflowAction): boolean;
}
