import { Language, WorkflowStatus, WorkflowStatusUtil } from '@wf/enum';
import clsx from 'clsx';

import { styles } from './WorkflowStatusLabel.css';

export type WorkflowStatusLabelProps = {
  statusCode?: WorkflowStatus;
  lang?: Language;
};

export function WorkflowStatusLabel({
  statusCode = WorkflowStatus.None,
  lang = Language.Japanese,
}: WorkflowStatusLabelProps) {
  const label =
    WorkflowStatusUtil.getLabel(statusCode, lang) + statusCode.toString();
  const themeClass = getThemeClass(statusCode);
  return <p className={clsx(styles.label, themeClass)}>{label}</p>;
}

/* 以下関数定義 */
// StatusCode によってテーマを変える
function getThemeClass(statusCode: WorkflowStatus): string {
  let themeClass = '';
  switch (statusCode) {
    // 申請前
    case WorkflowStatus.None:
    case WorkflowStatus.PrePetition:
      themeClass = styles.themes.pending;
      break;
    // 申請中
    case WorkflowStatus.Petitioning:
      themeClass = styles.themes.danger;
      break;
    // 差戻し中
    case WorkflowStatus.Remanded:
      themeClass = styles.themes.danger;
      break;
    // 承認済み
    case WorkflowStatus.Approved:
      themeClass = styles.themes.success;
      break;
    // 編集可能
    case WorkflowStatus.CanEditFromPrePetition:
    case WorkflowStatus.CanEditFromPetitioning:
    case WorkflowStatus.CanEditFromRemanded:
    case WorkflowStatus.CanEditFromNone:
      themeClass = styles.themes.pending;
      break;
    // 編集中
    case WorkflowStatus.EditingFromPrePetition:
    case WorkflowStatus.EditingFromPetitioning:
    case WorkflowStatus.EditingFromRemanded:
    case WorkflowStatus.EditingFromNone:
      themeClass = styles.themes.pending;
      break;
    // 承認中
    case WorkflowStatus.Approving:
      themeClass = styles.themes.action;
      break;
  }
  return themeClass;
}
