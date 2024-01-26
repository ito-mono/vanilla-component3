import { Lunguage, WorkflowAction, WorkflowActionUtil } from '@wf/enum';
import { WorkflowOnActionProps } from '@wf/types';

import { styles } from './WorkflowActionButton.css';

export type WorkflowActionButtonProps = {
  actionCode: WorkflowAction;
  lang?: Lunguage;
  params?: unknown;
} & WorkflowOnActionProps;

export function WorkflowActionButton({
  actionCode,
  lang = Lunguage.Japanese,
  params,
  onAction = () => {},
}: WorkflowActionButtonProps) {
  const isIcon = WorkflowActionUtil.isIcon(actionCode);
  const label = WorkflowActionUtil.getLabel(actionCode, lang);
  const className = isIcon ? styles.iconButton : styles.labelButton;

  return (
    <button className={className} onClick={() => onAction(actionCode, params)}>
      {label}
    </button>
  );
}
