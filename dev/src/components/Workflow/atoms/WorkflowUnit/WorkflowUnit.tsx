import {
  MdOutlinePersonAdd,
  MdOutlinePersonRemove,
  MdOutlinePersonSearch,
} from 'react-icons/md';

import { styles } from './WorkflowUnit.css';

import { WorkflowAction } from '@/components/Workflow/enum';
import { EmployeeInfo } from '@/components/Workflow/types';

export type WorkflowUnitProps = {
  index?: number;
  title?: string;
  employeeInfo?: EmployeeInfo;
  onAction?: (actionCode: WorkflowAction, params: unknown) => void;
};

export function WorkflowUnit({
  index,
  title,
  employeeInfo,
  onAction = () => {},
}: WorkflowUnitProps) {
  return (
    <div className={styles.frame}>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <p>{title}</p>
        </div>
        <div className={styles.employeeInfoContainer}>
          {
            /* 従業員情報の有無で表示を変える */
            employeeInfo == null ? (
              <p className={styles.error}>承認社未設定</p>
            ) : (
              <>
                <p>{employeeInfo?.id}</p>
                <p>{employeeInfo?.name}</p>
              </>
            )
          }
        </div>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => onAction(WorkflowAction.AddUnit, index)}
            className={styles.button}
          >
            <MdOutlinePersonAdd />
          </button>
          <button
            onClick={() => onAction(WorkflowAction.ChangeApprover, index)}
            className={styles.button}
          >
            <MdOutlinePersonSearch />
          </button>
          <button
            onClick={() => onAction(WorkflowAction.RemoveUnit, index)}
            className={styles.button}
          >
            <MdOutlinePersonRemove />
          </button>
        </div>
      </div>
    </div>
  );
}
