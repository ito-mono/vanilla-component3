import { WorkflowActionButton } from '@wf/atoms';
import { WorkflowAction } from '@wf/enum';
import { EmployeeInfo, WorkflowOnActionProps } from '@wf/types';

import { styles } from './WorkflowUnit.css';

export type WorkflowUnitProps = {
  index?: number;
  title?: string;
  employeeInfo?: EmployeeInfo;
} & WorkflowOnActionProps;

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
          <WorkflowActionButton
            actionCode={WorkflowAction.AddUnit}
            onAction={onAction}
            params={index}
          />
          <WorkflowActionButton
            actionCode={WorkflowAction.ChangeApprover}
            onAction={onAction}
            params={index}
          />
          <WorkflowActionButton
            actionCode={WorkflowAction.RemoveUnit}
            onAction={onAction}
            params={index}
          />
        </div>
      </div>
    </div>
  );
}
