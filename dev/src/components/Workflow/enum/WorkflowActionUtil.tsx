/* WorkflowAction の拡張 */

import {
  MdOutlinePersonAdd,
  MdOutlinePersonRemove,
  MdOutlinePersonSearch,
} from 'react-icons/md';

import { Language, WorkflowAction } from '.';

// MEMO: namespace のLintエラーを一時的に解除
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace WorkflowActionUtil {
  // Codeからラベルを取得
  export function getLabel(
    actionCode: WorkflowAction,
    lang: Language = Language.Japanese,
  ): React.ReactNode {
    if (isIcon(actionCode)) lang = Language.Japanese; // アイコンの場合は強制的にjaにする
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
      [Language.Japanese]: <MdOutlinePersonAdd />,
      isIcon: true,
    },
    [WorkflowAction.ChangeApprover]: {
      [Language.Japanese]: <MdOutlinePersonSearch />,
      isIcon: true,
    },
    [WorkflowAction.RemoveUnit]: {
      [Language.Japanese]: <MdOutlinePersonRemove />,
      isIcon: true,
    },
    [WorkflowAction.Modify]: {
      [Language.Japanese]: '編集',
      [Language.English]: 'Modify',
    },
    [WorkflowAction.CancelModify]: {
      [Language.Japanese]: 'キャンセル',
      [Language.English]: 'Cancel',
    },
    [WorkflowAction.SubmitModify]: {
      [Language.Japanese]: '保存',
      [Language.English]: 'Save',
    },
    [WorkflowAction.Petition]: {
      [Language.Japanese]: '申請',
      [Language.English]: 'Petition',
    },
    [WorkflowAction.CancelPetition]: {
      [Language.Japanese]: '申請キャンセル',
      [Language.English]: 'Cancel Petition',
    },
    [WorkflowAction.Approve]: {
      [Language.Japanese]: '承認',
      [Language.English]: 'Approve',
    },
    [WorkflowAction.Disapprove]: {
      [Language.Japanese]: '非承認',
      [Language.English]: 'Disapprove',
    },
    [WorkflowAction.Reapplication]: {
      [Language.Japanese]: '再申請',
      [Language.English]: 'Reapplication',
    },
  };
}
