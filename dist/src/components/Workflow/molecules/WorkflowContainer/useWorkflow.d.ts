import { Dispatch, SetStateAction } from 'react';
import { Language, WorkflowStatus } from '../../enum';
import { EmployeeInfo } from '../../types';
import { WorkflowUnitProps } from '../WorkflowUnit';
export type useWorkflowProps = {
    units: useWorkflowUnitProps[];
    statusCode: WorkflowStatus;
    lang?: Language;
};
type useWorkflowUnitProps = {
    title: string;
    employeeInfo?: EmployeeInfo;
};
export type useWorkflowReturn = {
    units: WorkflowUnitProps[];
    setUnits: Dispatch<SetStateAction<WorkflowUnitProps[]>>;
    initialStatusCode: WorkflowStatus;
    statusCode: WorkflowStatus;
    setStatusCode: Dispatch<SetStateAction<WorkflowStatus>>;
    lang: Language;
};
/**
 * ワークフローの状態を管理するカスタムフック
 */
export declare function useWorkflow({ lang, ...props }: useWorkflowProps): useWorkflowReturn;
export {};
