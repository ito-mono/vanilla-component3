import '@/reset.css';
import { useState } from 'react';

import { WorkflowStatusLabel } from '@wf/atoms';
import { WorkflowAction, WorkflowStatus } from '@wf/enum';

import { WorkflowActionButtonsContainer } from '../WorkflowActionButtonsContainer';
import { WorkflowUnitProps } from '../WorkflowUnit';
import { WorkflowUnitsContainer } from '../WorkflowUnitsContainer';

import { styles } from './WorkflowContainer.css';

export type WorkflowContainerProps = {
  units?: WorkflowUnitProps[];
  statusCode?: WorkflowStatus;
};

export function WorkflowContainer({
  statusCode,
  ...props
}: WorkflowContainerProps) {
  const [units, setUnits] = useState(props.units ? props.units : initUnits());
  return (
    <div className={styles.container}>
      <WorkflowUnitsContainer units={units} onAction={onAction} />
      <div>
        <WorkflowStatusLabel statusCode={statusCode} />
        <WorkflowActionButtonsContainer
          statusCode={statusCode}
          onAction={onAction}
        />
      </div>
    </div>
  );

  /* 以下関数定義 */

  // ユニット初期値
  function initUnits(): WorkflowUnitProps[] {
    return [{ title: '承認者' }];
  }

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
}
