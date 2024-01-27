import { Language, WorkflowAction, WorkflowActionUtil } from '@wf/enum';
import { WorkflowOnActionProps } from '@wf/types';
import clsx from 'clsx';

import { styles } from './WorkflowActionButton.css';

export type WorkflowActionButtonProps = {
  actionCode: WorkflowAction;
  lang?: Language;
  params?: unknown;
} & WorkflowOnActionProps;

export function WorkflowActionButton({
  actionCode,
  lang = Language.Japanese,
  params,
  onAction = () => {},
}: WorkflowActionButtonProps) {
  const isIcon = WorkflowActionUtil.isIcon(actionCode);
  const label = WorkflowActionUtil.getLabel(actionCode, lang);
  const className = isIcon ? styles.iconButton : styles.labelButton;
  const themeClass = getThemeClass(actionCode);

  return (
    <button
      className={clsx(className, themeClass)}
      onClick={() => onAction(actionCode, params)}
    >
      {label}
    </button>
  );
}

/* 以下関数定義 */
// StatusCode によってテーマを変える
function getThemeClass(actionCode: WorkflowAction): string {
  let themeClass = '';
  switch (actionCode) {
    case WorkflowAction.AddUnit:
      themeClass = styles.themes.icon;
      break;
    case WorkflowAction.ChangeApprover:
      themeClass = styles.themes.icon;
      break;
    case WorkflowAction.RemoveUnit:
      themeClass = styles.themes.icon;
      break;
    case WorkflowAction.Modify:
      break;
    case WorkflowAction.CancelModify:
      break;
    case WorkflowAction.SubmitModify:
      break;
    case WorkflowAction.Petition:
      break;
    case WorkflowAction.CancelPetition:
      themeClass = styles.themes.danger;
      break;
    case WorkflowAction.Approve:
      themeClass = styles.themes.action;
      break;
    case WorkflowAction.Disapprove:
      themeClass = styles.themes.danger;
      break;
    case WorkflowAction.Reapplication:
      break;
  }
  return themeClass;
}
