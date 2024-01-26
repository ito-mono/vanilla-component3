/* WorkflowStatus の拡張 */

import { Lunguage } from '.';
import { WorkflowStatus } from '.';

// MEMO: namespace のLintエラーを一時的に解除
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace WorkflowStatusUtil {
  // Codeからラベルを取得
  export function getLabel(
    statusCode: WorkflowStatus,
    lang: Lunguage = Lunguage.Japanese,
  ): React.ReactNode {
    return WorkflowStatusLabel[statusCode][lang];
  }

  // 表示するラベルの辞書
  const WorkflowStatusLabel: {
    [key in WorkflowStatus]: Record<string, React.ReactNode>;
  } = {
    [WorkflowStatus.None]: {
      [Lunguage.Japanese]: '申請情報なし',
      [Lunguage.English]: 'None',
    },
    [WorkflowStatus.PrePetition]: {
      [Lunguage.Japanese]: '申請前',
      [Lunguage.English]: 'PrePetition',
    },
    [WorkflowStatus.Petitioning]: {
      [Lunguage.Japanese]: '申請中',
      [Lunguage.English]: 'Petitioning',
    },
    [WorkflowStatus.Remanded]: {
      [Lunguage.Japanese]: '差戻し中',
      [Lunguage.English]: 'Remanded',
    },
    [WorkflowStatus.Approved]: {
      [Lunguage.Japanese]: '承認完了',
      [Lunguage.English]: 'Approved',
    },
  };
}
