import { cleanup, screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Language, WorkflowAction, WorkflowActionUtil } from '@wf/enum';
import { EmployeeInfo } from '@wf/types';
import { describe, test, expect, afterEach, vitest } from 'vitest';

import { WorkflowUnit, WorkflowUnitProps } from '.';

describe('WorkflowUnit', () => {
  const index = 2;
  const title = '承認者';
  const sendEmail = true;
  describe('表示のテスト', () => {
    test('日本語', () => {
      const lang = Language.Japanese;
      const targetActionCode = WorkflowAction.AddUnit;
      const elm = setup(targetActionCode, lang);
      const label = WorkflowActionUtil.getLabel(targetActionCode, lang) as string;
      expect(elm).toHaveTextContent(label);
    });
    render(<WorkflowUnit {...props} />);
  });

  // セットアップ関数
  function setup(index: number, title: string, lang: Language, employeeInfo?: EmployeeInfo) {
    render(<WorkflowUnit />);
  }

  afterEach(() => {
    cleanup();
  });
});
