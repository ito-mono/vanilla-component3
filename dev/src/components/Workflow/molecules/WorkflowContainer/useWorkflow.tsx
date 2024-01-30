import { Dispatch, SetStateAction, useState } from 'react';

import { Language, WorkflowStatus } from '@wf/enum';

import { WorkflowUnitProps } from '../WorkflowUnit';

// 引数
export type useWorkFlowProps = {
  units: WorkflowUnitProps[];
  statusCode: WorkflowStatus;
  lang?: Language;
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
  const [units, setUnits] = useState<WorkflowUnitProps[]>(props.units);
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
