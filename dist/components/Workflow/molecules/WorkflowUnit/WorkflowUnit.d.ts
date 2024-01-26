import { EmployeeInfo, WorkflowOnActionProps } from '../../types';
export type WorkflowUnitProps = {
    index?: number;
    title?: string;
    employeeInfo?: EmployeeInfo;
} & WorkflowOnActionProps;
export declare function WorkflowUnit({ index, title, employeeInfo, onAction, }: WorkflowUnitProps): import("react/jsx-runtime").JSX.Element;
