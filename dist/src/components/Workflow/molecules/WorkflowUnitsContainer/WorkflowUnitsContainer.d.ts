import { WorkflowOnAction } from '../../types';
import { WorkflowUnitProps } from '../WorkflowUnit';
export type WorkflowUnitsContainerProps = {
    units: WorkflowUnitProps[];
    onAction: WorkflowOnAction;
};
export declare function WorkflowUnitsContainer({ units, onAction }: WorkflowUnitsContainerProps): import("react/jsx-runtime").JSX.Element;
