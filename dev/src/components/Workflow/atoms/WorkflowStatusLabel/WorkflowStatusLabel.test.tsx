import { cleanup, screen, render } from '@testing-library/react';
import { Language, WorkflowStatus, WorkflowStatusUtil } from '@wf/enum';
import { describe, test, expect, afterEach } from 'vitest';

import { styles } from './WorkflowStatusLabel.css';

import { WorkflowStatusLabel } from '.';

describe('WorkflowStatusLabel', () => {
  describe('表示のテスト', () => {
    describe('日本語', () => {
      const lang = Language.Japanese;
      test('申請情報なし', () => {
        const targetActionCode = WorkflowStatus.None;
        const elm = setup(targetActionCode, lang);
        const label = WorkflowStatusUtil.getLabel(targetActionCode, lang) as string;
        expect(elm).toHaveTextContent(label);
        expect(elm).toHaveClass(styles.themes.pending);
      });
      test('申請前', () => {
        const targetActionCode = WorkflowStatus.PrePetition;
        const elm = setup(targetActionCode, lang);
        const label = WorkflowStatusUtil.getLabel(targetActionCode, lang) as string;
        expect(elm).toHaveTextContent(label);
        expect(elm).toHaveClass(styles.themes.pending);
      });
      test('申請中', () => {
        const targetActionCode = WorkflowStatus.Petitioning;
        const elm = setup(targetActionCode, lang);
        const label = WorkflowStatusUtil.getLabel(targetActionCode, lang) as string;
        expect(elm).toHaveTextContent(label);
        expect(elm).toHaveClass(styles.themes.danger);
      });
      test('差戻し中', () => {
        const targetActionCode = WorkflowStatus.Remanded;
        const elm = setup(targetActionCode, lang);
        const label = WorkflowStatusUtil.getLabel(targetActionCode, lang) as string;
        expect(elm).toHaveTextContent(label);
        expect(elm).toHaveClass(styles.themes.danger);
      });
      test('承認完了', () => {
        const targetActionCode = WorkflowStatus.Approved;
        const elm = setup(targetActionCode, lang);
        const label = WorkflowStatusUtil.getLabel(targetActionCode, lang) as string;
        expect(elm).toHaveTextContent(label);
        expect(elm).toHaveClass(styles.themes.success);
      });
      test('編集可能', () => {
        const targetActionCode = WorkflowStatus.CanEdit;
        const elm = setup(targetActionCode, lang);
        const label = WorkflowStatusUtil.getLabel(targetActionCode, lang) as string;
        expect(elm).toHaveTextContent(label);
        expect(elm).toHaveClass(styles.themes.pending);
      });
      test('編集中', () => {
        const targetActionCode = WorkflowStatus.Editing;
        const elm = setup(targetActionCode, lang);
        const label = WorkflowStatusUtil.getLabel(targetActionCode, lang) as string;
        expect(elm).toHaveTextContent(label);
        expect(elm).toHaveClass(styles.themes.pending);
      });
      test('承認中', () => {
        const targetActionCode = WorkflowStatus.Approving;
        const elm = setup(targetActionCode, lang);
        const label = WorkflowStatusUtil.getLabel(targetActionCode, lang) as string;
        expect(elm).toHaveTextContent(label);
        expect(elm).toHaveClass(styles.themes.action);
      });
    });

    describe('日本語', () => {
      const lang = Language.English;
      test('申請情報なし', () => {
        const targetActionCode = WorkflowStatus.None;
        const elm = setup(targetActionCode, lang);
        const label = WorkflowStatusUtil.getLabel(targetActionCode, lang) as string;
        expect(elm).toHaveTextContent(label);
        expect(elm).toHaveClass(styles.themes.pending);
      });
      test('申請前', () => {
        const targetActionCode = WorkflowStatus.PrePetition;
        const elm = setup(targetActionCode, lang);
        const label = WorkflowStatusUtil.getLabel(targetActionCode, lang) as string;
        expect(elm).toHaveTextContent(label);
        expect(elm).toHaveClass(styles.themes.pending);
      });
      test('申請中', () => {
        const targetActionCode = WorkflowStatus.Petitioning;
        const elm = setup(targetActionCode, lang);
        const label = WorkflowStatusUtil.getLabel(targetActionCode, lang) as string;
        expect(elm).toHaveTextContent(label);
        expect(elm).toHaveClass(styles.themes.danger);
      });
      test('差戻し中', () => {
        const targetActionCode = WorkflowStatus.Remanded;
        const elm = setup(targetActionCode, lang);
        const label = WorkflowStatusUtil.getLabel(targetActionCode, lang) as string;
        expect(elm).toHaveTextContent(label);
        expect(elm).toHaveClass(styles.themes.danger);
      });
      test('承認完了', () => {
        const targetActionCode = WorkflowStatus.Approved;
        const elm = setup(targetActionCode, lang);
        const label = WorkflowStatusUtil.getLabel(targetActionCode, lang) as string;
        expect(elm).toHaveTextContent(label);
        expect(elm).toHaveClass(styles.themes.success);
      });
      test('編集可能', () => {
        const targetActionCode = WorkflowStatus.CanEdit;
        const elm = setup(targetActionCode, lang);
        const label = WorkflowStatusUtil.getLabel(targetActionCode, lang) as string;
        expect(elm).toHaveTextContent(label);
        expect(elm).toHaveClass(styles.themes.pending);
      });
      test('編集中', () => {
        const targetActionCode = WorkflowStatus.Editing;
        const elm = setup(targetActionCode, lang);
        const label = WorkflowStatusUtil.getLabel(targetActionCode, lang) as string;
        expect(elm).toHaveTextContent(label);
        expect(elm).toHaveClass(styles.themes.pending);
      });
      test('承認中', () => {
        const targetActionCode = WorkflowStatus.Approving;
        const elm = setup(targetActionCode, lang);
        const label = WorkflowStatusUtil.getLabel(targetActionCode, lang) as string;
        expect(elm).toHaveTextContent(label);
        expect(elm).toHaveClass(styles.themes.action);
      });
    });
  });

  // セットアップ関数
  function setup(statusCode: WorkflowStatus, lang: Language) {
    render(<WorkflowStatusLabel {...{ statusCode, lang }} />);
    return screen.getByTestId('workflowStatusLabel');
  }

  afterEach(() => {
    cleanup();
  });
});
