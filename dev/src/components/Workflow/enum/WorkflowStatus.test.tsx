import { describe, test, expect } from 'vitest';

import { Language, WorkflowStatus, WorkflowStatusUtil } from '.';

describe('WorkflowStatus', () => {
  describe('関数のテスト', () => {
    describe('getLabel', () => {
      test('日本語', () => {
        const lang = Language.Japanese;
        let label: React.ReactNode;

        label = WorkflowStatusUtil.getLabel(WorkflowStatus.None, lang);
        expect(label).toStrictEqual('申請情報なし');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.PrePetition, lang);
        expect(label).toStrictEqual('申請前');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.Petitioning, lang);
        expect(label).toStrictEqual('申請中');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.Remanded, lang);
        expect(label).toStrictEqual('差戻し中');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.Approved, lang);
        expect(label).toStrictEqual('承認完了');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.CanEdit, lang);
        expect(label).toStrictEqual('編集可能');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.Editing, lang);
        expect(label).toStrictEqual('編集中');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.Approving, lang);
        expect(label).toStrictEqual('承認中');
      });

      test('英語', () => {
        const lang = Language.English;
        let label: React.ReactNode;

        label = WorkflowStatusUtil.getLabel(WorkflowStatus.None, lang);
        expect(label).toStrictEqual('None');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.PrePetition, lang);
        expect(label).toStrictEqual('Pre Petition');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.Petitioning, lang);
        expect(label).toStrictEqual('Petitioning');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.Remanded, lang);
        expect(label).toStrictEqual('Remanded');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.Approved, lang);
        expect(label).toStrictEqual('Approved');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.CanEdit, lang);
        expect(label).toStrictEqual('Can Edit');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.Editing, lang);
        expect(label).toStrictEqual('Editing');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.Approving, lang);
        expect(label).toStrictEqual('Approving');
      });

      test('引数なし (日本語)', () => {
        let label: React.ReactNode;

        label = WorkflowStatusUtil.getLabel(WorkflowStatus.None);
        expect(label).toStrictEqual('申請情報なし');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.PrePetition);
        expect(label).toStrictEqual('申請前');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.Petitioning);
        expect(label).toStrictEqual('申請中');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.Remanded);
        expect(label).toStrictEqual('差戻し中');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.Approved);
        expect(label).toStrictEqual('承認完了');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.CanEdit);
        expect(label).toStrictEqual('編集可能');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.Editing);
        expect(label).toStrictEqual('編集中');
        label = WorkflowStatusUtil.getLabel(WorkflowStatus.Approving);
        expect(label).toStrictEqual('承認中');
      });
    });
  });
});
