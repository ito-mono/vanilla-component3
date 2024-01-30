import '@/reset.css';

import { WorkflowStatusLabel } from '@wf/atoms';
import { WorkflowAction, WorkflowStatus } from '@wf/enum';

import { WorkflowActionButtonsContainer } from '../WorkflowActionButtonsContainer';
import { WorkflowUnitsContainer } from '../WorkflowUnitsContainer';

import { styles } from './WorkflowContainer.css';
import { useWorkFlowReturn } from './useWorkflow';

export type WorkflowContainerProps = {
  props: useWorkFlowReturn;
};

export function WorkflowContainer({
  props: { units, setUnits, statusCode, setStatusCode, lang },
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
        setActiveStatus(actionCode);
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
  function setActiveStatus(actionCode: WorkflowAction): boolean {
    switch (actionCode) {
      // 編集ボタン押下時
      case WorkflowAction.Modify:
        setStatusCode(WorkflowStatus.Editing);
        break;
      // 保存及びキャンセルボタン押下時
      case WorkflowAction.SubmitModify:
      case WorkflowAction.CancelModify:
        setStatusCode(WorkflowStatus.CanEdit);
        break;
      default:
        return false;
    }
    return true;
  }
}
