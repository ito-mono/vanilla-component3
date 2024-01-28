import { render } from '@testing-library/react';
import { describe, expect, test, vitest } from 'vitest';

import { WorkflowContainer } from '..';

import { WorkflowStatus } from '@/components/Workflow/enum';

describe('関数', () => {
  test('SetActiveStatusのテスト', () => {
    const mock = vitest.fn();
    render(
      <WorkflowContainer
        units={[]}
        statusCode={WorkflowStatus.Approved}
        setUnits={mock}
        setStatusCode={mock}
      />,
    );
  });
});
