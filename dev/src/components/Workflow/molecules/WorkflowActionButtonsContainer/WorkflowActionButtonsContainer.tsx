import { WorkflowActionButton, WorkflowActionButtonProps } from '@wf/atoms';
import { WorkflowAction, WorkflowStatus } from '@wf/enum';
import { WorkflowOnActionProps } from '@wf/types';

import { styles } from './WorkflowActionButtonsContainer.css';

export type WorkflowActionButtonsContainerProps = {
  statusCode?: WorkflowStatus;
} & WorkflowOnActionProps;

export function WorkflowActionButtonsContainer({
  statusCode,
  onAction = () => {},
}: WorkflowActionButtonsContainerProps) {
  console.log(statusCode);
  const buttons: WorkflowActionButtonProps[] = [
    { actionCode: WorkflowAction.Petition },
    { actionCode: WorkflowAction.Reapplication },
  ];
  return (
    <div className={styles.container}>
      {buttons.map((button) => (
        <WorkflowActionButton {...button} onAction={onAction} />
      ))}
    </div>
  );
}
