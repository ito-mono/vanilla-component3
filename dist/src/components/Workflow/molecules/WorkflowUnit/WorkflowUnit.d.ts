import { Language } from '../../enum';
import { EmployeeInfo, WorkflowOnAction } from '../../types';
export type WorkflowUnitProps = {
    index: number;
    title: string;
    employeeInfo?: EmployeeInfo;
    sendEmail: boolean;
    lang: Language;
    onAction?: WorkflowOnAction;
};
export declare function WorkflowUnit(props: WorkflowUnitProps): import("react/jsx-runtime").JSX.Element;
