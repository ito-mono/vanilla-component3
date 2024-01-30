import { Dispatch, SetStateAction } from 'react';
import { Language, WorkflowStatus } from '../../enum';
import { EmployeeInfo } from '../../types';
import { WorkflowUnitProps } from '../WorkflowUnit';
export type useWorkFlowProps = {
    units: useWorkFlowUnitProps[];
    statusCode: WorkflowStatus;
    lang?: Language;
};
type useWorkFlowUnitProps = {
    title: string;
    employeeInfo?: EmployeeInfo;
};
export type useWorkFlowReturn = {
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
export declare function useWorkFlow({ lang, ...props }: useWorkFlowProps): useWorkFlowReturn;
export {};
