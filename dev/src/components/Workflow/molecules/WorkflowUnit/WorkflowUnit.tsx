import { WorkflowActionButton } from '@wf/atoms';
import { Language, WorkflowAction } from '@wf/enum';
import { EmployeeInfo, WorkflowOnAction } from '@wf/types';
import { MdMailOutline } from 'react-icons/md';

import { styles } from './WorkflowUnit.css';

export type WorkflowUnitProps = {
  index: number;
  title: string;
  employeeInfo?: EmployeeInfo;
  sendEmail: boolean;
  lang: Language;
  onAction?: WorkflowOnAction;
};

export function WorkflowUnit(props: WorkflowUnitProps) {
  const { index, title, employeeInfo, sendEmail, lang, onAction = () => {} } = props;
  return (
    <div className={styles.frame}>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{title}</p>
          <i>{sendEmail && <MdMailOutline />}</i>
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
            {...{ actionCode: WorkflowAction.AddUnit, lang, onAction, params: index }}
          />
          <WorkflowActionButton
            {...{ actionCode: WorkflowAction.ChangeApprover, lang, onAction, params: index }}
          />
          <WorkflowActionButton
            {...{ actionCode: WorkflowAction.RemoveUnit, lang, onAction, params: index }}
          />
        </div>
      </div>
    </div>
  );
}
