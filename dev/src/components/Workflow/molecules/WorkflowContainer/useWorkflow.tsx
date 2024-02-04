import { Dispatch, SetStateAction, useState } from 'react';

import { Language, WorkflowStatus } from '@wf/enum';
import { EmployeeInfo } from '@wf/types';

import { WorkflowUnitProps } from '../WorkflowUnit';

// 引数
export type useWorkflowProps = {
  units: useWorkflowUnitProps[];
  statusCode: WorkflowStatus;
  lang?: Language;
};

// 引数のユニットの型定義
type useWorkflowUnitProps = {
  title: string;
  employeeInfo?: EmployeeInfo;
};

// 返り値
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
export function useWorkflow({
  lang = Language.Japanese,
  ...props
}: useWorkflowProps): useWorkflowReturn {
  // WorkflowUnitPropsにキャスト
  const castedUnits = props.units.map(
    (unit, index) =>
      ({
        ...unit,
        index,
        lang,
      }) as WorkflowUnitProps,
  );

  const [units, setUnits] = useState<WorkflowUnitProps[]>(castedUnits);
  // prettier-ignore
  const [statusCode, setStatusCode] = useState<WorkflowStatus>(props.statusCode);

  return {
    units,
    setUnits,
    initialStatusCode: props.statusCode,
    statusCode,
    setStatusCode,
    lang,
  };
}
