import { RefObject, createRef, useEffect, useRef } from 'react';

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
  // unitsのrefを作成
  const refs = useRef<RefObject<HTMLDivElement>[]>([]);
  units.forEach((_, index) => {
    refs.current[index] = createRef<HTMLDivElement>();
  });

  useEffect(() => {
    console.log(refs.current);
  }, [units]);
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
            ref={refs.current[index]}
          />
        ))
      }
    </div>
  );
}
