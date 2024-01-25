import '@/reset.css';
import { useState } from 'react';

import { WorkflowActionButtonsContainer } from '../WorkflowActionButtonsContainer';

import { styles } from './WorkflowContainer.css';

import { WorkflowUnit, WorkflowUnitProps } from '@/components/Workflow/atoms';
import { WorkflowAction } from '@/components/Workflow/enum';

export type WorkflowContainerProps = {
  units?: WorkflowUnitProps[];
};

export function WorkflowContainer({ ...props }: WorkflowContainerProps) {
  if (props.units == null) props.units = [{ title: '申請者' }];
  const [units, setUnits] = useState(props.units);
  return (
    <div className={styles.container}>
      <div className={styles.unitContainer}>
        {
          /* MEMO: 突貫でkey = indexにしてしまっているのでいずれ直す */
          units.map((unit, index) => (
            <WorkflowUnit
              {...unit}
              index={index}
              onAction={onAction}
              key={index}
            />
          ))
        }
      </div>
    </div>
  );

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
      console.log(index);
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
