import { WorkflowActionButton, WorkflowActionButtonProps } from '@wf/atoms';
import { Language, WorkflowAction, WorkflowStatus } from '@wf/enum';
import { WorkflowOnActionProps } from '@wf/types';

import { styles } from './WorkflowActionButtonsContainer.css';

export type WorkflowActionButtonsContainerProps = {
  statusCode?: WorkflowStatus;
  lang?: Language;
} & WorkflowOnActionProps;

export function WorkflowActionButtonsContainer({
  statusCode,
  lang = Language.Japanese,
  onAction = () => {},
}: WorkflowActionButtonsContainerProps) {
  const buttons: WorkflowActionButtonProps[] = getButtons(statusCode);

  return (
    <div className={styles.container}>
      {
        /* TODO: 突貫でkey = indexにしてしまっているのでいずれ直す */
        buttons.map((button, index) => (
          <WorkflowActionButton
            {...{ ...button, lang, onAction }}
            key={index}
          />
        ))
      }
    </div>
  );
}

/* 以下関数定義 */
// StatusCode によってボタンを変える
function getButtons(statusCode?: WorkflowStatus): WorkflowActionButtonProps[] {
  let buttons: WorkflowActionButtonProps[] = [];
  switch (statusCode) {
    // 申請前 かつ 編集不可のユーザーでログインしている場合
    case WorkflowStatus.None:
    case WorkflowStatus.PrePetition:
      buttons = [];
      break;
    // 申請中 かつ 編集不可のユーザーでログインしている場合
    case WorkflowStatus.Petitioning:
      buttons = [{ actionCode: WorkflowAction.CancelPetition }];
      break;
    case WorkflowStatus.Remanded:
      buttons = [
        { actionCode: WorkflowAction.Modify },
        { actionCode: WorkflowAction.Petition },
      ];
      break;
    case WorkflowStatus.Approved:
      buttons = [];
      break;
    // 編集可能
    case WorkflowStatus.CanEditFromNone:
    case WorkflowStatus.CanEditFromPrePetition:
    case WorkflowStatus.CanEditFromPetitioning:
    case WorkflowStatus.CanEditFromRemanded:
      buttons = [
        { actionCode: WorkflowAction.Modify },
        { actionCode: WorkflowAction.Petition },
      ];
      break;
    // 編集中
    case WorkflowStatus.EditingFromNone:
    case WorkflowStatus.EditingFromPrePetition:
    case WorkflowStatus.EditingFromPetitioning:
    case WorkflowStatus.EditingFromRemanded:
      buttons = [
        { actionCode: WorkflowAction.SubmitModify },
        { actionCode: WorkflowAction.CancelModify },
      ];
      break;
    case WorkflowStatus.Approving:
      buttons = [
        { actionCode: WorkflowAction.Approve },
        { actionCode: WorkflowAction.Disapprove },
      ];
      break;
  }
  return buttons;
}
