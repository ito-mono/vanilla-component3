/* WorkflowAction の拡張 */

import {
  MdOutlinePersonAdd,
  MdOutlinePersonRemove,
  MdOutlinePersonSearch,
} from 'react-icons/md';

import { Lunguage, WorkflowAction } from '.';

// MEMO: namespace のLintエラーを一時的に解除
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace WorkflowActionUtil {
  // Codeからラベルを取得
  export function getLabel(
    actionCode: WorkflowAction,
    lang: Lunguage = Lunguage.Japanese,
  ): React.ReactNode {
    if (isIcon(actionCode)) lang = Lunguage.Japanese; // アイコンの場合は強制的にjaにする
    return WorkflowActionLabel[actionCode][lang];
  }

  export function isIcon(actionCode: WorkflowAction): boolean {
    const result = WorkflowActionLabel[actionCode].isIcon as boolean;
    if (result == null) return false;
    return result;
  }

  // 表示するラベル（アイコンも含む）の辞書
  // MEMO: アイコンのみの場合はjaのみ定義、isIcon: trueを追加する
  const WorkflowActionLabel: {
    [key in WorkflowAction]: Record<string, React.ReactNode>;
  } = {
    [WorkflowAction.AddUnit]: {
      [Lunguage.Japanese]: <MdOutlinePersonAdd />,
      isIcon: true,
    },
    [WorkflowAction.ChangeApprover]: {
      [Lunguage.Japanese]: <MdOutlinePersonSearch />,
      isIcon: true,
    },
    [WorkflowAction.RemoveUnit]: {
      [Lunguage.Japanese]: <MdOutlinePersonRemove />,
      isIcon: true,
    },
    [WorkflowAction.Modify]: {
      [Lunguage.Japanese]: '編集',
      [Lunguage.English]: 'Modify',
    },
    [WorkflowAction.CancelModify]: {
      [Lunguage.Japanese]: 'キャンセル',
      [Lunguage.English]: 'Cancel',
    },
    [WorkflowAction.SubmitModify]: {
      [Lunguage.Japanese]: '保存',
      [Lunguage.English]: 'Save',
    },
    [WorkflowAction.Petition]: {
      [Lunguage.Japanese]: '申請',
      [Lunguage.English]: 'Petition',
    },
    [WorkflowAction.CancelPetition]: {
      [Lunguage.Japanese]: '申請キャンセル',
      [Lunguage.English]: 'Cancel Petition',
    },
    [WorkflowAction.Approve]: {
      [Lunguage.Japanese]: '承認',
      [Lunguage.English]: 'Approve',
    },
    [WorkflowAction.Disapprove]: {
      [Lunguage.Japanese]: '非承認',
      [Lunguage.English]: 'Disapprove',
    },
    [WorkflowAction.Reapplication]: {
      [Lunguage.Japanese]: '再申請',
      [Lunguage.English]: 'Reapplication',
    },
  };
}
