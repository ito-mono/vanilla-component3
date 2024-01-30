import { Dispatch, SetStateAction, useState } from 'react';

import { Language, WorkflowStatus } from '@wf/enum';
import { EmployeeInfo } from '@wf/types';

import { WorkflowUnitProps } from '../WorkflowUnit';

// 引数
export type useWorkFlowProps = {
  units: useWorkFlowUnitProps[];
  statusCode: WorkflowStatus;
  lang?: Language;
};

// 引数のユニットの型定義
type useWorkFlowUnitProps = {
  title: string;
  employeeInfo?: EmployeeInfo;
};

// 返り値
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
export function useWorkFlow({
  lang = Language.Japanese,
  ...props
}: useWorkFlowProps): useWorkFlowReturn {
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
