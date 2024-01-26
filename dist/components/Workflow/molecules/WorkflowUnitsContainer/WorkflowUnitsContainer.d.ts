import { WorkflowOnActionProps } from '../../types';
import { WorkflowUnitProps } from '../WorkflowUnit';
export type WorkflowUnitsContainerProps = {
    units: WorkflowUnitProps[];
} & WorkflowOnActionProps;
export declare function WorkflowUnitsContainer({ units, onAction, }: WorkflowUnitsContainerProps): import("react/jsx-runtime").JSX.Element;
