/* WorkflowStatus の拡張 */

import { Language } from '.';
import { WorkflowStatus } from '.';

// MEMO: namespace のLintエラーを一時的に解除
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace WorkflowStatusUtil {
  // Codeからラベルを取得
  export function getLabel(
    statusCode: WorkflowStatus,
    lang: Language = Language.Japanese,
  ): React.ReactNode {
    return WorkflowStatusLabel[statusCode][lang];
  }

  // 表示するラベルの辞書
  const WorkflowStatusLabel: {
    [key in WorkflowStatus]: Record<string, React.ReactNode>;
  } = {
    // 基本のステータス
    [WorkflowStatus.None]: {
      [Language.Japanese]: '申請情報なし',
      [Language.English]: 'None',
    },
    [WorkflowStatus.PrePetition]: {
      [Language.Japanese]: '申請前',
      [Language.English]: 'Pre Petition',
    },
    [WorkflowStatus.Petitioning]: {
      [Language.Japanese]: '申請中',
      [Language.English]: 'Petitioning',
    },
    [WorkflowStatus.Remanded]: {
      [Language.Japanese]: '差戻し中',
      [Language.English]: 'Remanded',
    },
    [WorkflowStatus.Approved]: {
      [Language.Japanese]: '承認完了',
      [Language.English]: 'Approved',
    },

    // 申請前 から遷移するステータス
    [WorkflowStatus.CanEditFromPrePetition]: {
      [Language.Japanese]: '編集可能',
      [Language.English]: 'Can Edit',
    },
    [WorkflowStatus.EditingFromPrePetition]: {
      [Language.Japanese]: '編集中',
      [Language.English]: 'Editing',
    },

    // 申請中 から遷移するステータス
    [WorkflowStatus.CanEditFromPetitioning]: {
      [Language.Japanese]: '編集可能',
      [Language.English]: 'Can Edit',
    },
    [WorkflowStatus.EditingFromPetitioning]: {
      [Language.Japanese]: '編集中',
      [Language.English]: 'Editing',
    },
    [WorkflowStatus.Approving]: {
      [Language.Japanese]: '承認中',
      [Language.English]: 'Approving',
    },

    // 差戻し中 から遷移するステータス
    [WorkflowStatus.CanEditFromRemanded]: {
      [Language.Japanese]: '編集可能',
      [Language.English]: 'Can Edit',
    },
    [WorkflowStatus.EditingFromRemanded]: {
      [Language.Japanese]: '編集中',
      [Language.English]: 'Editing',
    },

    // 申請情報なし から遷移するステータス
    [WorkflowStatus.CanEditFromNone]: {
      [Language.Japanese]: '編集可能',
      [Language.English]: 'Can Edit',
    },
    [WorkflowStatus.EditingFromNone]: {
      [Language.Japanese]: '編集中',
      [Language.English]: 'Editing',
    },
  };
}
