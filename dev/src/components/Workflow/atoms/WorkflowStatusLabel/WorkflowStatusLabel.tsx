import { Lunguage, WorkflowStatus, WorkflowStatusUtil } from '@wf/enum';

import { styles } from './WorkflowStatusLabel.css';

export type WorkflowStatusLabelProps = {
  statusCode?: WorkflowStatus;
  lang?: Lunguage;
};

export function WorkflowStatusLabel({
  statusCode = WorkflowStatus.None,
  lang = Lunguage.Japanese,
}: WorkflowStatusLabelProps) {
  const label = WorkflowStatusUtil.getLabel(statusCode, lang);
  return <p className={styles.label}>{label}</p>;
}
