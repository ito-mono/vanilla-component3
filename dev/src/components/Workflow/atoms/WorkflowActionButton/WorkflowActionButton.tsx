import { Language, WorkflowAction, WorkflowActionUtil } from '@wf/enum';
import { WorkflowOnAction } from '@wf/types';
import clsx from 'clsx';

import { styles } from './WorkflowActionButton.css';

export type WorkflowActionButtonProps = {
  actionCode: WorkflowAction;
  lang: Language;
  onAction: WorkflowOnAction;
  params?: unknown;
};

/**
 *
 * @param actionCode WorkflowAction
 * @param lang Language
 * @param onAction
 * @param params
 *
 * @returns ワークフローアクションボタン
 */
export function WorkflowActionButton({
  actionCode,
  lang,
  onAction = () => {},
  params,
}: WorkflowActionButtonProps) {
  const isIcon = WorkflowActionUtil.isIcon(actionCode);
  const label = WorkflowActionUtil.getLabel(actionCode, lang);
  const className = isIcon ? styles.iconButton : styles.labelButton;
  const themeClass = getThemeClass(actionCode);

  return (
    <button className={clsx(className, themeClass)} onClick={onClick}>
      {label}
    </button>
  );

  // クリックイベント
  function onClick() {
    const needParams = WorkflowActionUtil.needParams(actionCode);
    // パラメータが必要なのに渡されていない場合は何もしない
    if (needParams && !params) return;
    onAction(actionCode, params);
  }
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
      themeClass = styles.themes.normal;
      break;
    case WorkflowAction.CancelModify:
      themeClass = styles.themes.danger;
      break;
    case WorkflowAction.SubmitModify:
      themeClass = styles.themes.safe;
      break;
    case WorkflowAction.Petition:
      themeClass = styles.themes.warn;
      break;
    case WorkflowAction.CancelPetition:
      themeClass = styles.themes.danger;
      break;
    case WorkflowAction.Approve:
      themeClass = styles.themes.safe;
      break;
    case WorkflowAction.Disapprove:
      themeClass = styles.themes.danger;
      break;
    case WorkflowAction.Reapplication:
      themeClass = styles.themes.danger;
      break;
  }
  return themeClass;
}
