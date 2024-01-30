import { MdOutlinePersonAdd, MdOutlinePersonRemove, MdOutlinePersonSearch } from 'react-icons/md';
import { describe, test, expect } from 'vitest';

import { Language, WorkflowAction, WorkflowActionUtil } from '.';

describe('WorkflowAction', () => {
  describe('関数のテスト', () => {
    describe('getLabel', () => {
      test('日本語', () => {
        const lang = Language.Japanese;
        let label: React.ReactNode;

        label = WorkflowActionUtil.getLabel(WorkflowAction.AddUnit, lang);
        expect(label).toStrictEqual(<MdOutlinePersonAdd />);
        label = WorkflowActionUtil.getLabel(WorkflowAction.ChangeApprover, lang);
        expect(label).toStrictEqual(<MdOutlinePersonSearch />);
        label = WorkflowActionUtil.getLabel(WorkflowAction.RemoveUnit, lang);
        expect(label).toStrictEqual(<MdOutlinePersonRemove />);
        label = WorkflowActionUtil.getLabel(WorkflowAction.Modify, lang);
        expect(label).toStrictEqual('編集');
        label = WorkflowActionUtil.getLabel(WorkflowAction.CancelModify, lang);
        expect(label).toStrictEqual('キャンセル');
        label = WorkflowActionUtil.getLabel(WorkflowAction.SubmitModify, lang);
        expect(label).toStrictEqual('保存');
        label = WorkflowActionUtil.getLabel(WorkflowAction.Petition, lang);
        expect(label).toStrictEqual('申請');
        label = WorkflowActionUtil.getLabel(WorkflowAction.CancelPetition, lang);
        expect(label).toStrictEqual('申請キャンセル');
        label = WorkflowActionUtil.getLabel(WorkflowAction.Approve, lang);
        expect(label).toStrictEqual('承認');
        label = WorkflowActionUtil.getLabel(WorkflowAction.Disapprove, lang);
        expect(label).toStrictEqual('非承認');
        label = WorkflowActionUtil.getLabel(WorkflowAction.Reapplication, lang);
        expect(label).toStrictEqual('再申請');
      });
      test('英語', () => {
        const lang = Language.English;
        let label: React.ReactNode;

        label = WorkflowActionUtil.getLabel(WorkflowAction.AddUnit, lang);
        expect(label).toStrictEqual(<MdOutlinePersonAdd />);
        label = WorkflowActionUtil.getLabel(WorkflowAction.ChangeApprover, lang);
        expect(label).toStrictEqual(<MdOutlinePersonSearch />);
        label = WorkflowActionUtil.getLabel(WorkflowAction.RemoveUnit, lang);
        expect(label).toStrictEqual(<MdOutlinePersonRemove />);
        label = WorkflowActionUtil.getLabel(WorkflowAction.Modify, lang);
        expect(label).toStrictEqual('Modify');
        label = WorkflowActionUtil.getLabel(WorkflowAction.CancelModify, lang);
        expect(label).toStrictEqual('Cancel');
        label = WorkflowActionUtil.getLabel(WorkflowAction.SubmitModify, lang);
        expect(label).toStrictEqual('Save');
        label = WorkflowActionUtil.getLabel(WorkflowAction.Petition, lang);
        expect(label).toStrictEqual('Petition');
        label = WorkflowActionUtil.getLabel(WorkflowAction.CancelPetition, lang);
        expect(label).toStrictEqual('Cancel Petition');
        label = WorkflowActionUtil.getLabel(WorkflowAction.Approve, lang);
        expect(label).toStrictEqual('Approve');
        label = WorkflowActionUtil.getLabel(WorkflowAction.Disapprove, lang);
        expect(label).toStrictEqual('Disapprove');
        label = WorkflowActionUtil.getLabel(WorkflowAction.Reapplication, lang);
        expect(label).toStrictEqual('Reapplication');
      });
      test('引数なし (日本語)', () => {
        let label: React.ReactNode;

        label = WorkflowActionUtil.getLabel(WorkflowAction.AddUnit);
        expect(label).toStrictEqual(<MdOutlinePersonAdd />);
        label = WorkflowActionUtil.getLabel(WorkflowAction.ChangeApprover);
        expect(label).toStrictEqual(<MdOutlinePersonSearch />);
        label = WorkflowActionUtil.getLabel(WorkflowAction.RemoveUnit);
        expect(label).toStrictEqual(<MdOutlinePersonRemove />);
        label = WorkflowActionUtil.getLabel(WorkflowAction.Modify);
        expect(label).toStrictEqual('編集');
        label = WorkflowActionUtil.getLabel(WorkflowAction.CancelModify);
        expect(label).toStrictEqual('キャンセル');
        label = WorkflowActionUtil.getLabel(WorkflowAction.SubmitModify);
        expect(label).toStrictEqual('保存');
        label = WorkflowActionUtil.getLabel(WorkflowAction.Petition);
        expect(label).toStrictEqual('申請');
        label = WorkflowActionUtil.getLabel(WorkflowAction.CancelPetition);
        expect(label).toStrictEqual('申請キャンセル');
        label = WorkflowActionUtil.getLabel(WorkflowAction.Approve);
        expect(label).toStrictEqual('承認');
        label = WorkflowActionUtil.getLabel(WorkflowAction.Disapprove);
        expect(label).toStrictEqual('非承認');
        label = WorkflowActionUtil.getLabel(WorkflowAction.Reapplication);
        expect(label).toStrictEqual('再申請');
      });
    });

    describe('isIcon', () => {
      test('アイコン', () => {
        let result: boolean;
        result = WorkflowActionUtil.isIcon(WorkflowAction.AddUnit);
        expect(result).toBeTruthy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.ChangeApprover);
        expect(result).toBeTruthy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.RemoveUnit);
        expect(result).toBeTruthy();
      });
      test('ラベル', () => {
        let result: boolean;
        result = WorkflowActionUtil.isIcon(WorkflowAction.Modify);
        expect(result).toBeFalsy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.CancelModify);
        expect(result).toBeFalsy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.SubmitModify);
        expect(result).toBeFalsy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.Petition);
        expect(result).toBeFalsy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.CancelPetition);
        expect(result).toBeFalsy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.Approve);
        expect(result).toBeFalsy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.Disapprove);
        expect(result).toBeFalsy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.Reapplication);
        expect(result).toBeFalsy();
      });
    });

    describe('needParams', () => {
      test('params必須', () => {
        let result: boolean;
        result = WorkflowActionUtil.isIcon(WorkflowAction.AddUnit);
        expect(result).toBeTruthy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.ChangeApprover);
        expect(result).toBeTruthy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.RemoveUnit);
        expect(result).toBeTruthy();
      });
      test('params不要', () => {
        let result: boolean;
        result = WorkflowActionUtil.isIcon(WorkflowAction.Modify);
        expect(result).toBeFalsy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.CancelModify);
        expect(result).toBeFalsy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.SubmitModify);
        expect(result).toBeFalsy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.Petition);
        expect(result).toBeFalsy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.CancelPetition);
        expect(result).toBeFalsy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.Approve);
        expect(result).toBeFalsy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.Disapprove);
        expect(result).toBeFalsy();
        result = WorkflowActionUtil.isIcon(WorkflowAction.Reapplication);
        expect(result).toBeFalsy();
      });
    });
  });
});
