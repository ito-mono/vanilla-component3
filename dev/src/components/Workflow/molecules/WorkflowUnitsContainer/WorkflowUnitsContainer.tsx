import { WorkflowOnActionProps } from '@wf/types';

import { WorkflowUnit, WorkflowUnitProps } from '../WorkflowUnit';

import { styles } from './WorkflowUnitsContainer.css';

export type WorkflowUnitsContainerProps = {
  units: WorkflowUnitProps[];
} & WorkflowOnActionProps;

export function WorkflowUnitsContainer({
  units,
  onAction,
}: WorkflowUnitsContainerProps) {
  return (
    <div className={styles.container}>
      {
        /* TODO: 突貫でkey = indexにしてしまっているのでいずれ直す */
        units.map((unit, index) => (
          <WorkflowUnit
            {...unit}
            index={index}
            onAction={onAction}
            key={index}
          />
        ))
      }
    </div>
  );
}
