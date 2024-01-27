import '@/reset.css';
import { Dispatch, SetStateAction } from 'react';

import { WorkflowStatusLabel } from '@wf/atoms';
import { Language, WorkflowAction, WorkflowStatus } from '@wf/enum';

import { WorkflowActionButtonsContainer } from '../WorkflowActionButtonsContainer';
import { WorkflowUnitProps } from '../WorkflowUnit';
import { WorkflowUnitsContainer } from '../WorkflowUnitsContainer';

import { styles } from './WorkflowContainer.css';

export type WorkflowContainerProps = {
  units: WorkflowUnitProps[];
  setUnits: Dispatch<SetStateAction<WorkflowUnitProps[]>>;
  statusCode: WorkflowStatus;
  setStatusCode: Dispatch<SetStateAction<WorkflowStatus>>;
  lang?: Language;
};

export function WorkflowContainer({
  units,
  setUnits,
  statusCode,
  setStatusCode,
  lang = Language.Japanese,
}: WorkflowContainerProps) {
  return (
    <div className={styles.container}>
      <WorkflowUnitsContainer {...{ units, onAction }} />
      <div className={styles.sideContainer}>
        <WorkflowStatusLabel {...{ statusCode, lang }} />
        <WorkflowActionButtonsContainer {...{ statusCode, lang, onAction }} />
      </div>
    </div>
  );

  /* 以下関数定義 */

  // actionCodeによって処理を分岐
  function onAction(actionCode: WorkflowAction, params?: unknown): void {
    switch (actionCode) {
      case WorkflowAction.AddUnit:
        addUnit(params);
        break;
      case WorkflowAction.ChangeApprover:
        break;
      case WorkflowAction.RemoveUnit:
        removeUnit(params);
        break;
      case WorkflowAction.Modify:
      case WorkflowAction.SubmitModify:
      case WorkflowAction.CancelModify:
        setActiveStatus(statusCode, actionCode);
        break;
      default:
        alert(`Call API ${WorkflowAction[actionCode]}`);
        break;
    }
  }

  // ユニット追加
  function addUnit(params?: unknown) {
    setUnits((units) => {
      const index = (params as number) + 1;
      const newUnits = [...units];
      newUnits.splice(index, 0, { title: '承認者' });
      return newUnits;
    });
  }

  // ユニット削除
  function removeUnit(params?: unknown) {
    setUnits((units) => {
      const index = params as number;
      const newUnits = [...units];
      newUnits.splice(index, 1);
      return newUnits;
    });
  }

  // statusCodeを変更
  function setActiveStatus(
    statusCode: WorkflowStatus,
    actionCode: WorkflowAction,
  ): boolean {
    switch (actionCode) {
      // 編集ボタン押下時
      case WorkflowAction.Modify:
        switch (statusCode) {
          case WorkflowStatus.None:
            setStatusCode(WorkflowStatus.EditingFromNone);
            break;
          case WorkflowStatus.PrePetition:
            setStatusCode(WorkflowStatus.EditingFromPrePetition);
            break;
          case WorkflowStatus.Petitioning:
            setStatusCode(WorkflowStatus.EditingFromPetitioning);
            break;
          case WorkflowStatus.Remanded:
            setStatusCode(WorkflowStatus.EditingFromRemanded);
            break;
          default:
            return false;
        }
        break;
      // 保存及びキャンセルボタン押下時
      case WorkflowAction.SubmitModify:
      case WorkflowAction.CancelModify:
        switch (statusCode) {
          case WorkflowStatus.CanEditFromNone:
            setStatusCode(WorkflowStatus.None);
            break;
          case WorkflowStatus.CanEditFromPrePetition:
            setStatusCode(WorkflowStatus.PrePetition);
            break;
          case WorkflowStatus.CanEditFromPetitioning:
            setStatusCode(WorkflowStatus.Petitioning);
            break;
          case WorkflowStatus.CanEditFromRemanded:
            setStatusCode(WorkflowStatus.Remanded);
            break;
          default:
            return false;
        }
        break;
      default:
        return false;
    }
    return true;
  }
}
