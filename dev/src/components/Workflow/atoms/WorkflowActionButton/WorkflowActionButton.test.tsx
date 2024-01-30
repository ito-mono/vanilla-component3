import { cleanup, screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Language, WorkflowAction, WorkflowActionUtil } from '@wf/enum';
import { describe, test, expect, afterEach, vitest } from 'vitest';

import { styles } from './WorkflowActionButton.css';

import { WorkflowActionButton, WorkflowActionButtonProps } from '.';

describe('WorkflowActionButton', () => {
  const mockOnAction = vitest.fn();
  const user = userEvent.setup();

  describe('表示と動作のテスト', () => {
    describe('表示', () => {
      describe('日本語', () => {
        const lang = Language.Japanese;
        test('ユニット追加', () => {
          const actionCode = WorkflowAction.AddUnit;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toBeInTheDocument(); // アイコンの場合は表示されていることのみ確認
          expect(elm).toHaveClass(styles.iconButton);
          expect(elm).toHaveClass(styles.themes.icon);
        });
        test('承認者変更', () => {
          const actionCode = WorkflowAction.ChangeApprover;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toBeInTheDocument(); // アイコンの場合は表示されていることのみ確認
          expect(elm).toHaveClass(styles.iconButton);
          expect(elm).toHaveClass(styles.themes.icon);
        });
        test('ユニット削除', () => {
          const actionCode = WorkflowAction.RemoveUnit;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toBeInTheDocument(); // アイコンの場合は表示されていることのみ確認
          expect(elm).toHaveClass(styles.iconButton);
          expect(elm).toHaveClass(styles.themes.icon);
        });
        test('編集', () => {
          const actionCode = WorkflowAction.Modify;
          // ラベルの場合はテキストも確認 getLabelの妥当性はenumの責務のためここではテストしない
          const label = WorkflowActionUtil.getLabel(actionCode, lang) as string;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toHaveTextContent(label);
          expect(elm).toHaveClass(styles.labelButton);
          expect(elm).toHaveClass(styles.themes.normal);
        });
        test('編集キャンセル', () => {
          const actionCode = WorkflowAction.CancelModify;
          // ラベルの場合はテキストも確認 getLabelの妥当性はenumの責務のためここではテストしない
          const label = WorkflowActionUtil.getLabel(actionCode, lang) as string;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toHaveTextContent(label);
          expect(elm).toHaveClass(styles.labelButton);
          expect(elm).toHaveClass(styles.themes.danger);
        });
        test('編集確定', () => {
          const actionCode = WorkflowAction.SubmitModify;
          // ラベルの場合はテキストも確認 getLabelの妥当性はenumの責務のためここではテストしない
          const label = WorkflowActionUtil.getLabel(actionCode, lang) as string;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toHaveTextContent(label);
          expect(elm).toHaveClass(styles.labelButton);
          expect(elm).toHaveClass(styles.themes.safe);
        });
        test('申請', () => {
          const actionCode = WorkflowAction.Petition;
          // ラベルの場合はテキストも確認 getLabelの妥当性はenumの責務のためここではテストしない
          const label = WorkflowActionUtil.getLabel(actionCode, lang) as string;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toHaveTextContent(label);
          expect(elm).toHaveClass(styles.labelButton);
          expect(elm).toHaveClass(styles.themes.warn);
        });
        test('申請キャンセル', () => {
          const actionCode = WorkflowAction.CancelPetition;
          // ラベルの場合はテキストも確認 getLabelの妥当性はenumの責務のためここではテストしない
          const label = WorkflowActionUtil.getLabel(actionCode, lang) as string;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toHaveTextContent(label);
          expect(elm).toHaveClass(styles.labelButton);
          expect(elm).toHaveClass(styles.themes.danger);
        });
        test('承認', () => {
          const actionCode = WorkflowAction.Approve;
          // ラベルの場合はテキストも確認 getLabelの妥当性はenumの責務のためここではテストしない
          const label = WorkflowActionUtil.getLabel(actionCode, lang) as string;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toHaveTextContent(label);
          expect(elm).toHaveClass(styles.labelButton);
          expect(elm).toHaveClass(styles.themes.safe);
        });
        test('非承認', () => {
          const actionCode = WorkflowAction.Disapprove;
          // ラベルの場合はテキストも確認 getLabelの妥当性はenumの責務のためここではテストしない
          const label = WorkflowActionUtil.getLabel(actionCode, lang) as string;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toHaveTextContent(label);
          expect(elm).toHaveClass(styles.labelButton);
          expect(elm).toHaveClass(styles.themes.danger);
        });
        test('再申請', () => {
          const actionCode = WorkflowAction.Reapplication;
          // ラベルの場合はテキストも確認 getLabelの妥当性はenumの責務のためここではテストしない
          const label = WorkflowActionUtil.getLabel(actionCode, lang) as string;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toHaveTextContent(label);
          expect(elm).toHaveClass(styles.labelButton);
          expect(elm).toHaveClass(styles.themes.danger);
        });
      });

      describe('英語', () => {
        const lang = Language.English;
        test('ユニット追加', () => {
          const actionCode = WorkflowAction.AddUnit;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toBeInTheDocument(); // アイコンの場合は表示されていることのみ確認
          expect(elm).toHaveClass(styles.iconButton);
          expect(elm).toHaveClass(styles.themes.icon);
        });
        test('承認者変更', () => {
          const actionCode = WorkflowAction.ChangeApprover;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toBeInTheDocument(); // アイコンの場合は表示されていることのみ確認
          expect(elm).toHaveClass(styles.iconButton);
          expect(elm).toHaveClass(styles.themes.icon);
        });
        test('ユニット削除', () => {
          const actionCode = WorkflowAction.RemoveUnit;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toBeInTheDocument(); // アイコンの場合は表示されていることのみ確認
          expect(elm).toHaveClass(styles.iconButton);
          expect(elm).toHaveClass(styles.themes.icon);
        });
        test('編集', () => {
          const actionCode = WorkflowAction.Modify;
          // ラベルの場合はテキストも確認 getLabelの妥当性はenumの責務のためここではテストしない
          const label = WorkflowActionUtil.getLabel(actionCode, lang) as string;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toHaveTextContent(label);
          expect(elm).toHaveClass(styles.labelButton);
          expect(elm).toHaveClass(styles.themes.normal);
        });
        test('編集キャンセル', () => {
          const actionCode = WorkflowAction.CancelModify;
          // ラベルの場合はテキストも確認 getLabelの妥当性はenumの責務のためここではテストしない
          const label = WorkflowActionUtil.getLabel(actionCode, lang) as string;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toHaveTextContent(label);
          expect(elm).toHaveClass(styles.labelButton);
          expect(elm).toHaveClass(styles.themes.danger);
        });
        test('編集確定', () => {
          const actionCode = WorkflowAction.SubmitModify;
          // ラベルの場合はテキストも確認 getLabelの妥当性はenumの責務のためここではテストしない
          const label = WorkflowActionUtil.getLabel(actionCode, lang) as string;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toHaveTextContent(label);
          expect(elm).toHaveClass(styles.labelButton);
          expect(elm).toHaveClass(styles.themes.safe);
        });
        test('申請', () => {
          const actionCode = WorkflowAction.Petition;
          // ラベルの場合はテキストも確認 getLabelの妥当性はenumの責務のためここではテストしない
          const label = WorkflowActionUtil.getLabel(actionCode, lang) as string;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toHaveTextContent(label);
          expect(elm).toHaveClass(styles.labelButton);
          expect(elm).toHaveClass(styles.themes.warn);
        });
        test('申請キャンセル', () => {
          const actionCode = WorkflowAction.CancelPetition;
          // ラベルの場合はテキストも確認 getLabelの妥当性はenumの責務のためここではテストしない
          const label = WorkflowActionUtil.getLabel(actionCode, lang) as string;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toHaveTextContent(label);
          expect(elm).toHaveClass(styles.labelButton);
          expect(elm).toHaveClass(styles.themes.danger);
        });
        test('承認', () => {
          const actionCode = WorkflowAction.Approve;
          // ラベルの場合はテキストも確認 getLabelの妥当性はenumの責務のためここではテストしない
          const label = WorkflowActionUtil.getLabel(actionCode, lang) as string;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toHaveTextContent(label);
          expect(elm).toHaveClass(styles.labelButton);
          expect(elm).toHaveClass(styles.themes.safe);
        });
        test('非承認', () => {
          const actionCode = WorkflowAction.Disapprove;
          // ラベルの場合はテキストも確認 getLabelの妥当性はenumの責務のためここではテストしない
          const label = WorkflowActionUtil.getLabel(actionCode, lang) as string;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toHaveTextContent(label);
          expect(elm).toHaveClass(styles.labelButton);
          expect(elm).toHaveClass(styles.themes.danger);
        });
        test('再申請', () => {
          const actionCode = WorkflowAction.Reapplication;
          // ラベルの場合はテキストも確認 getLabelの妥当性はenumの責務のためここではテストしない
          const label = WorkflowActionUtil.getLabel(actionCode, lang) as string;
          const props = setupProps(actionCode, lang);
          const elm = setup(props);
          expect(elm).toHaveTextContent(label);
          expect(elm).toHaveClass(styles.labelButton);
          expect(elm).toHaveClass(styles.themes.danger);
        });
      });
    });
    describe('動作: ◯→実行する ✕→実行しない', () => {
      const lang = Language.Japanese;
      describe('params有', () => {
        const params = 3;

        test('◯ ユニット追加', async () => {
          const actionCode = WorkflowAction.AddUnit;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
        test('◯ 承認者変更', async () => {
          const actionCode = WorkflowAction.ChangeApprover;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
        test('◯ ユニット削除', async () => {
          const actionCode = WorkflowAction.RemoveUnit;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
        test('◯ 編集', async () => {
          const actionCode = WorkflowAction.Modify;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
        test('◯ 編集キャンセル', async () => {
          const actionCode = WorkflowAction.CancelModify;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
        test('◯ 編集確定', async () => {
          const actionCode = WorkflowAction.SubmitModify;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
        test('◯ 申請', async () => {
          const actionCode = WorkflowAction.Petition;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
        test('◯ 申請キャンセル', async () => {
          const actionCode = WorkflowAction.CancelPetition;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
        test('◯ 承認', async () => {
          const actionCode = WorkflowAction.Approve;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
        test('◯ 非承認', async () => {
          const actionCode = WorkflowAction.Disapprove;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
        test('◯ 再申請', async () => {
          const actionCode = WorkflowAction.Reapplication;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
      });

      describe('params無', () => {
        const params = undefined;

        test('✕ ユニット追加', async () => {
          const actionCode = WorkflowAction.AddUnit;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).not.toHaveBeenCalled();
        });
        test('✕ 承認者変更', async () => {
          const actionCode = WorkflowAction.ChangeApprover;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).not.toHaveBeenCalled();
        });
        test('✕ ユニット削除', async () => {
          const actionCode = WorkflowAction.RemoveUnit;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).not.toHaveBeenCalled();
        });
        test('◯ 編集', async () => {
          const actionCode = WorkflowAction.Modify;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
        test('◯ 編集キャンセル', async () => {
          const actionCode = WorkflowAction.CancelModify;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
        test('◯ 編集確定', async () => {
          const actionCode = WorkflowAction.SubmitModify;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
        test('◯ 申請', async () => {
          const actionCode = WorkflowAction.Petition;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
        test('◯ 申請キャンセル', async () => {
          const actionCode = WorkflowAction.CancelPetition;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
        test('◯ 承認', async () => {
          const actionCode = WorkflowAction.Approve;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
        test('◯ 非承認', async () => {
          const actionCode = WorkflowAction.Disapprove;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
        test('◯ 再申請', async () => {
          const actionCode = WorkflowAction.Reapplication;
          const props = setupProps(actionCode, lang, params);
          const elm = setup(props);
          await user.click(elm);
          expect(mockOnAction).toHaveBeenCalledWith(actionCode, params);
        });
      });
    });
  });

  // セットアップ関数
  function setup({ ...props }: WorkflowActionButtonProps) {
    render(<WorkflowActionButton {...props} />);
    return screen.getByRole('button');
  }

  function setupProps(
    actionCode: WorkflowAction,
    lang: Language,
    params?: unknown,
  ): WorkflowActionButtonProps {
    return {
      actionCode,
      lang,
      onAction: mockOnAction,
      params,
    };
  }

  afterEach(() => {
    mockOnAction.mockClear();
    cleanup();
  });
});
