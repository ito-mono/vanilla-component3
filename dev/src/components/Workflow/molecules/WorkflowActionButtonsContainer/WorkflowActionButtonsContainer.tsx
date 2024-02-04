import { WorkflowActionButton, WorkflowActionButtonProps } from '@wf/atoms';
import { Language, WorkflowAction, WorkflowStatus } from '@wf/enum';
import { WorkflowOnAction } from '@wf/types';

import { styles } from './WorkflowActionButtonsContainer.css';

export type WorkflowActionButtonsContainerProps = {
  statusCode?: WorkflowStatus;
  lang?: Language;
  onAction?: WorkflowOnAction;
};

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
          <WorkflowActionButton {...{ ...button, lang, onAction }} key={index} />
        ))
      }
    </div>
  );

  /* 以下関数定義 */
  // StatusCode によってボタンを変える
  function getButtons(statusCode?: WorkflowStatus): WorkflowActionButtonProps[] {
    let buttons: WorkflowActionButtonProps[] = [];
    const beseProps = { lang, onAction };
    switch (statusCode) {
      // 申請前 かつ 編集不可のユーザーでログインしている場合
      case WorkflowStatus.None:
      case WorkflowStatus.PrePetition:
        buttons = [];
        break;
      // 申請中 かつ 編集不可のユーザーでログインしている場合
      case WorkflowStatus.Petitioning:
        buttons = [{ ...beseProps, actionCode: WorkflowAction.CancelPetition }];
        break;
      case WorkflowStatus.Remanded:
        buttons = [
          { ...beseProps, actionCode: WorkflowAction.Modify },
          { ...beseProps, actionCode: WorkflowAction.Petition },
        ];
        break;
      case WorkflowStatus.Approved:
        buttons = [];
        break;
      // 編集可能
      case WorkflowStatus.CanEdit:
        buttons = [
          { ...beseProps, actionCode: WorkflowAction.Modify },
          { ...beseProps, actionCode: WorkflowAction.Petition },
        ];
        break;
      // 編集中
      case WorkflowStatus.Editing:
        buttons = [
          { ...beseProps, actionCode: WorkflowAction.SubmitModify },
          { ...beseProps, actionCode: WorkflowAction.CancelModify },
        ];
        break;
      case WorkflowStatus.Approving:
        buttons = [
          { ...beseProps, actionCode: WorkflowAction.Approve },
          { ...beseProps, actionCode: WorkflowAction.Disapprove },
        ];
        break;
    }
    return buttons;
  }
}
